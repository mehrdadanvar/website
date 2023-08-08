import { MongoClient } from "mongodb";
export default defineEventHandler(async (event) => {
  let docs: any = [];
  const uri: string = process.env.MONGO_URI!;
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("port");
      const collection = database.collection("pubs");
      const cursor = collection.find({});
      await cursor.forEach((item) => {
        docs.push(item);
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  await run().catch(console.dir);
  let sorted_docs = docs.sort((a: any, b: any) => {
    return a.id - b.id;
  });
  return sorted_docs;
});
