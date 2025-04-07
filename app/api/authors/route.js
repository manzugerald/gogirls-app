import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import Author from '../../../models/Author';
import sequelize from '../../../config/database';

sequelize.sync();

const saltRounds = 10; // Number of salt rounds for bcrypt

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch authors' });
      }
      break;
    case 'POST':
      try {
        const { first_name, last_name, email, username, password, bio, image_url } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const author = await Author.create({
          first_name,
          last_name,
          email,
          username,
          password: hashedPassword,
          bio,
          image_url,
        });

        res.status(201).json(author);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create author' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}