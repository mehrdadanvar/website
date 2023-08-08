import { MongoClient } from "mongodb";
export default defineEventHandler(async (event) => {
  let jobs: any = [];
  const uri: string = process.env.MONGO_URI!;
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("port");
      const collection = database.collection("clinical");
      const cursor = collection.find({});
      await cursor.forEach((item) => {
        jobs.push(item);
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  await run().catch(console.dir);
  // let sorted_jobs = jobs.sort((a: any, b: any) => {
  //   return a.id - b.id;
  // });
  return jobs;
});