import db from 'api/db';
import Project from 'api/models/Project';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProject } from 'types';

type Data = { message: string } | IProject;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV !== 'development')
    return res.status(403).json({
      message: 'Only allowed on development',
    });

  switch (req.method) {
    case 'POST':
      return createProject(req, res);

    // TODO: PUT

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

async function createProject(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { title = '', description = '', tech = [], url, github } = req.body;
  await db.connect();
  try {
    const newProject = new Project({ title, description, tech, url, github });

    await newProject.save();
    await db.disconnect();

    return res.status(201).json(newProject);
  } catch (error) {
    await db.disconnect();

    return res.status(400).json({
      message: 'No se logró crear el proyecto',
    });
  }
}
