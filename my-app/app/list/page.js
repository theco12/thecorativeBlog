import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").find().toArray();
  console.log(data);

  return (
    <div className="list-bg">
      {data.map((a, i) => {
        return (
          <div key={i} className="list-item">
            <h4>{a.title}</h4>
            <p>{a.content}</p>
          </div>
        );
      })}
    </div>
  );
}
