import { config } from 'dotenv';

config();

if (!process.env.DEBUG) {
  process.env.DEBUG = '*';
}
