import Listing from "../models/listingModel.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef.toString()) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef.toString()) {
    return next(errorHandler(401, "You can only update your own listings!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {

    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    let offer = req.query.offer === "true" ? true : { $in: [false, true] };
    let furnished =
      req.query.furnished === "true" ? true : { $in: [false, true] };
    let parking = req.query.parking === "true" ? true : { $in: [false, true] };

    let type =
      req.query.type && req.query.type !== "all"
        ? req.query.type
        : { $exists: true };

    const searchTerm = req.query.searchTerm
      ? { $regex: req.query.searchTerm, $options: "i" }
      : { $exists: true };

    const sort = req.query.sort || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1; // Convert "asc" | "desc" to 1 | -1

    const query = {
      name: searchTerm,
      offer,
      furnished,
      parking,
      type,
    };

    const listings = await Listing.find(query)
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);
      
    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
