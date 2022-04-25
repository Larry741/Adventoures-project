import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kosi147:korruption47@nextauth.e3px9.mongodb.net/userauth?retryWrites=true&w=majority"
  );

  return client; 
} 

