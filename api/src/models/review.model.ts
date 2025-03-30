import { model, Schema } from "mongoose";

export interface IReview {
  name: string;
}

const reviewSchema = new Schema<IReview>({
  name: {
    type: String,
  },
});

const Review = model<IReview>("Gig", reviewSchema);

export default Review;
