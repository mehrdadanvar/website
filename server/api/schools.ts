import { MongoClient } from "mongodb";
export default defineEventHandler(async (event) => {
  let unis: any = [];
  const uri: string = process.env.MONGO_URI!;
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("port");
      const collection = database.collection("schools");
      const cursor = collection.find({});
      await cursor.forEach((item) => {
        unis.push(item);
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  await run().catch(console.dir);
  return unis;
});
