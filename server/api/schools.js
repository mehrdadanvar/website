import { MongoClient } from "mongodb";
let config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  let unis = [];
  const uri = config.apiSecret;
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
  await run().catch();
  return unis;
});
