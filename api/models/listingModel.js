import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Listing name is required"],
      trim: true,
      minlength: [3, "Name should be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description should be at least 10 characters long"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    regularPrice: {
      type: Number,
      required: [true, "Regular price is required"],
      min: [1, "Regular price must be at least 1"],
    },
    discountPrice: {
      type: Number,
      required: false,
      min: [0, "Discount price must be at least 0"],
      validate: {
        validator: function (value) {
          return value < this.regularPrice;
        },
        message: "Discount price should be less than regular price",
      },
    },
    bathrooms: {
      type: Number,
      required: [true, "Number of bathrooms is required"],
      min: [1, "At least 1 bathroom is required"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required"],
      min: [1, "At least 1 bedroom is required"],
    },
    furnished: {
      type: Boolean,
      required: true,
      default: false,
    },
    parking: {
      type: Boolean,
      required: true,
      default: false,
    },
    type: {
      type: String,
      required: true,
      enum: ["apartment", "house", "villa", "studio", "rent", "sale"],
    },
    offer: {
      type: Boolean,
      required: true,
      default: false,
    },
    imageUrls: {
      type: [String],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one image URL is required",
      },
    },
    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
