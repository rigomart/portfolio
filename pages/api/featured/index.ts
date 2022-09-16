import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL || '');

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createFeaturedProject(req, res);

    // TODO: PUT

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

async function createFeaturedProject(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  let imageUrl = '';
  try {
    imageUrl = await parseFiles(req);
  } catch (error) {
    return res.status(400).json({
      message: 'No se logró subir la imagen',
    });
  }

  // TODO:completar
}

async function saveFile(file: formidable.File): Promise<string> {
  const { secure_url } = await cloudinary.uploader.upload(file.filepath);
  return secure_url;
}

async function parseFiles(req: NextApiRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return reject(err);
      }

      const filePath = await saveFile(files.file as formidable.File);
      resolve(filePath);
    });
  });
}
