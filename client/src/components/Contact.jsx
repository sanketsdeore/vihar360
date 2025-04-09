import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="bg-white flex flex-col gap-2">
          <p className="text-lg text-gray-700 font-medium">
            Contact{" "}
            <span className="font-bold text-gray-900 capitalize">
              {landlord.username}
            </span>{" "}
            for{" "}
            <span className="font-bold text-indigo-600 capitalize">
              {listing.name.toLowerCase()}
            </span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none trasition"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="block w-full text-center bg-indigo-600 text-white font-semibold uppercase rounded-lg py-3 mt-4 shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
