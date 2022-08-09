import { MongoClient, ServerApiVersion } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Narayan:admin@cluster0.gcwqhk1.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
      }
    );

    client.connect((err) => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
