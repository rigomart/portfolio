import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

import db from 'api/db';
import Featured from 'api/models/Featured';
import { IFeaturedProject } from 'types';
cloudinary.config(process.env.CLOUDINARY_URL || '');

type Data = { message: string } | IFeaturedProject | IFeaturedProject[];

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createFeaturedProject(req, res);
    case 'GET':
      return getFeaturedProjects(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

async function getFeaturedProjects(req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.connect();

  try {
    const featuredProjects = await Featured.find();
    await db.disconnect();

    return res.status(200).json(featuredProjects);
  } catch (error) {
    await db.disconnect();
    return res.status(503).json({
      message: 'No se lograron obtener los datos',
    });
  }
}

async function createFeaturedProject(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (process.env.NODE_ENV !== 'development')
    return res.status(403).json({
      message: 'Only allowed on development',
    });

  let imageUrl = '';

  try {
    imageUrl = await parseFiles(req);
  } catch (error) {
    return res.status(503).json({
      message: 'No se logró subir la imagen',
    });
  }

  const {
    title = '',
    description = '',
    tech = '',
    url = '',
    github = '',
    order = 0,
  } = req.body;

  await db.connect();
  try {
    const newFeatured = new Featured({
      title,
      description,
      tech: tech.split(',').map((item: string) => item.trim()),
      url,
      github,
      order,
      img: imageUrl,
    });
    await newFeatured.save();
    await db.disconnect();
    return res.status(201).json(newFeatured);
  } catch (error) {
    await db.disconnect();
    return res.status(503).json({
      message: 'No se logró crear el proyecto',
    });
  }
}

async function saveFile(img: formidable.File): Promise<string> {
  const { secure_url } = await cloudinary.uploader.upload(img.filepath);
  return secure_url;
}

async function parseFiles(req: NextApiRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return reject(err);
      }

      req.body = fields;
      const imgPath = await saveFile(files.img as formidable.File);
      resolve(imgPath);
    });
  });
}
