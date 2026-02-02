import { Client, Account, Databases, Storage } from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // e.g., https://cloud.appwrite.io/v1
  .setProject(process.env.APPWRITE_PROJECT_ID) // your project ID
  .setKey(process.env.APPWRITE_API_KEY); // only for server-side usage

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export default client;
