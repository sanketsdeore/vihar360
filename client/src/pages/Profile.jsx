import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUpload, FiTrash, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
} from "../redux/user/userSlice";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = async (file) => {
    if (!file) {
      console.error("No file selected.");
      return;
    }
    const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        true
      );

      // Track upload progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded * 100) / event.total);
          setFilePerc(percent);
        }
      };
      xhr.onload = async () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          if (data.secure_url) {
            setFormData((prev) => ({ ...prev, avatar: data.secure_url }));
            setFilePerc(100); // Set to 100% on success
          } else {
            console.error("Cloudinary upload failed:", data);
            setFileUploadError(true);
          }
        } else {
          console.error("Upload failed with status:", xhr.status);
          setFileUploadError(true);
        }
      };

      xhr.onerror = () => {
        console.error("Error uploading to Cloudinary.");
        setFileUploadError(true);
      };

      xhr.send(formData);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      setFileUploadError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart());

    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            hidden
            ref={fileRef}
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div
            className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
            onClick={() => fileRef.current.click()}
          >
            <img
              src={
                formData.avatar ||
                currentUser.avatar ||
                "https://via.placeholder.com/100"
              }
              alt="profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
              <FiUpload className="text-white text-2xl" />
            </div>
          </div>
          {filePerc > 0 && filePerc < 100 && (
            <p className="text-sm text-gray-600">Uploading {filePerc}%</p>
          )}
          {fileUploadError && (
            <p className="text-red-500 text-sm">Error uploading image</p>
          )}
          <input
            type="text"
            id="username"
            placeholder="Username"
            defaultValue={currentUser.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            defaultValue={currentUser.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <Link
            to="/create-listing"
            className="w-full p-2 bg-green-600 text-white font-semibold rounded-md text-center block hover:bg-green-700 transition"
          >
            Create Listing
          </Link>
        </form>

        <div className="flex justify-between text-gray-600 text-sm">
          <button
            onClick={handleDeleteUser}
            className="flex items-center space-x-2 hover:text-red-600 transition"
          >
            <FiTrash /> <span>Delete Account</span>
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 hover:text-blue-600 transition"
          >
            <FiLogOut /> <span>Sign Out</span>
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {updateSuccess && (
          <p className="text-green-500">Profile updated successfully!</p>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg space-y-4">
        <button
          onClick={handleShowListings}
          className="w-full p-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition"
        >
          Show Listings
        </button>
        {showListingsError && (
          <p className="text-red-500 text-center">Error showing listings</p>
        )}

        {userListings && userListings.length > 0 && (
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-4">
              Your Listings
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userListings.map((listing) => (
                <div
                  key={listing._id}
                  className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      src={listing.imageUrls[0]}
                      alt="listing cover"
                      className="w-full h-40 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link
                      to={`/listing/${listing._id}`}
                      className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
                    >
                      {listing.name}
                    </Link>
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handleListingDelete(listing._id)}
                        className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                      <Link to={`/update-listing/${listing._id}`}>
                        <button className="p-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
