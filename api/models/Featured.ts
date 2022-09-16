import mongoose, { Schema, model, Model } from 'mongoose';
import { IFeaturedProject } from 'types';

const featuredSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
    img: { type: String, required: true },
    url: { type: String, required: true },
    github: { type: String, required: true },
    order: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Featured: Model<IFeaturedProject> =
  mongoose.models.Project || model('Featured', featuredSchema);

export default Featured;
