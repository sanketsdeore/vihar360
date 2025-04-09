import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { motion } from "framer-motion";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const [offersRes, rentRes, saleRes] = await Promise.all([
          fetch("/api/listing/get?offer=true&limit=4"),
          fetch("/api/listing/get?type=rent&limit=4"),
          fetch("/api/listing/get?type=sale&limit=4"),
        ]);

        const [offers, rent, sale] = await Promise.all([
          offersRes.json(),
          rentRes.json(),
          saleRes.json(),
        ]);

        setOfferListings(offers);
        setRentListings(rent);
        setSaleListings(sale);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <motion.div
        className="flex flex-col items-center text-center gap-6 px-6 py-16 bg-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-slate-700 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight capitalize">
          Find your next <span className="text-blue-600">perfect</span> place
          <br /> with ease
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg max-w-2xl">
          Vihar360 Estate is the best place to find your next perfect home.
          Browse through our listings and find your dream property today.
        </p>
        <Link
          to="/search"
          className="text-lg font-semibold text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Start Exploring
        </Link>
      </motion.div>

      {/* Swiper Section */}
      <Swiper navigation className="w-full">
        {offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center/cover no-repeat`,
                }}
                className="h-[400px] md:h-[500px] relative"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-2xl font-semibold">
                    {listing.name}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-8 rounded-xl">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Get Home Recommendations
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Sign in for a more personalized experience and find your dream home.
          </p>
          <Link to="/sign-in">
            <button className="mt-5 font-bold text-blue-700 border border-blue-700 px-4 py-2 rounded-md">
              Sign In
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/images/recommendation.jpg"
            alt="Home recommendation"
            className="w-full h-auto rounded-xl "
          />
        </div>
      </div>

      {/* Listing Sections */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-12">
        {[
          {
            title: "Recent Offers",
            data: offerListings,
            link: "/search?offer=true",
          },
          {
            title: "Places for Rent",
            data: rentListings,
            link: "/search?type=rent",
          },
          {
            title: "Places for Sale",
            data: saleListings,
            link: "/search?type=sale",
          },
        ].map(
          ({ title, data, link }) =>
            data?.length > 0 && (
              <div key={title}>
                <div className="flex justify-between items-center border-b pb-2">
                  <h2 className="text-2xl font-semibold text-slate-700 capitalize">
                    {title}
                  </h2>
                  <Link
                    to={link}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Show more
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {data.slice(0, 3).map((listing) => (
                    <ListingItem key={listing._id} listing={listing} />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
