import { config } from "dotenv";
config();

const { NODE_ENV, PORT } = process.env;

export const CONFIG = {
  NODE_ENV,
  PORT,
};
