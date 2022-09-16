import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'api/db';
import Project from 'api/models/Project';
import { IProject } from 'types';
import { isValidObjectId } from 'mongoose';

type Data = { message: string } | IProject | IProject[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createProject(req, res);
    case 'GET':
      return getProjects(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

async function getProjects(req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.connect();

  try {
    const projects = await Project.find();
    await db.disconnect();

    return res.status(200).json(projects);
  } catch (error) {
    await db.disconnect();
    return res.status(503).json({
      message: 'No se lograron obtener los datos',
    });
  }
}

async function createProject(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV !== 'development')
    return res.status(403).json({
      message: 'Only allowed on development',
    });

  const { title = '', description = '', tech = [], url, github } = req.body;
  await db.connect();
  try {
    const newProject = new Project({ title, description, tech, url, github });

    await newProject.save();
    await db.disconnect();

    return res.status(201).json(newProject);
  } catch (error) {
    await db.disconnect();

    return res.status(503).json({
      message: 'No se logró crear el proyecto',
    });
  }
}
