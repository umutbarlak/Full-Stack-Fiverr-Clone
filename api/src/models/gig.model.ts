import { model, Schema, Types } from "mongoose";

export interface IGig {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: Types.ObjectId;
  title: string;
  description: string;
  reviewCount: number;
  starCount: number;
  category: string;
  coverImage: string;
  images: string[];
  package_title: string;
  package_description: string;
  package_price: number;
  package_features: string[];
  package_duration: number;
  package_revisions: number;
}

const gigSchema = new Schema<IGig>(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Lütfen başlık alanını doldurunuz"],
    },
    description: {
      type: String,
      required: [true, "Lütfen description alanını doldurunuz"],
      minlength: [15, "Description en az 15 karakter olmalıdır"],
      maxlength: [500, "Description en fazla 500 karakter olmalıdır"],
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    starCount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Lütfen category alanını doldurunuz"],
    },
    coverImage: {
      type: String,
      required: [true, "Lütfen coverImage alanını doldurunuz"],
    },
    images: {
      type: [String],
      required: [true, "Lütfen images alanını doldurunuz"],
    },
    package_title: {
      type: String,
      required: [true, "Lütfen package_title alanını doldurunuz"],
    },
    package_description: {
      type: String,
      required: [true, "Lütfen package_description alanını doldurunuz"],
    },
    package_price: {
      type: Number,
      required: [true, "Lütfen package_price alanını doldurunuz"],
    },
    package_features: {
      type: [String],
      required: [true, "Lütfen package_features alanını doldurunuz"],
    },
    package_duration: {
      type: Number,
      required: [true, "Lütfen package_duration alanını doldurunuz"],
    },
    package_revisions: {
      type: Number,
      required: [true, "Lütfen package_revisions alanını doldurunuz"],
    },
  },
  { timestamps: true }
);

const Gig = model<IGig>("Gig", gigSchema);

export default Gig;
