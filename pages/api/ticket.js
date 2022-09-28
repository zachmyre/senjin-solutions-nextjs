import clientPromise from "../../utils/db/mongodb";

export default async (req, res) => {
  const client = await clientPromise;

  const db = client.db("senjin-solutions");
  const collection = db.collection("tickets");
  const eventRequest = await collection
    .insertOne(req.body, {upsert: true, new: true})
    .then((result) => {
      console.log(result);
      res.status(200).send({ message: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err });
    });
};