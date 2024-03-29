import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";
import Link from "next/link";
import { ObjectId } from "mongodb";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").find().toArray();

  data = data.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <div className="list-bg">
      <ListItem data={data} />
    </div>
  );
}
