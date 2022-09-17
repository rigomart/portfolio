import mongoose, { Schema, model, Model } from 'mongoose';
import { IProject } from 'types';

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
    url: { type: String },
    github: { type: String },
  },
  {
    timestamps: true,
  },
);

const Project: Model<IProject> =
  mongoose.models.Project || model('Project', projectSchema);

export default Project;
