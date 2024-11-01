"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.task.get);
  console.log(tasks)
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text,isCompleted }) => <div key={_id}> <p>{text} is Completed:{isCompleted?"true":"false"}</p></div>)}
      
    </main>
  );
}
