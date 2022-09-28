import clientPromise from "../../utils/db/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  if(req.body.ip == '::1'){
    res.status(200).send({message: 'You are cool'});
    return;
  }

  const db = client.db("senjin-solutions");
  const collection = db.collection("http_log");
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