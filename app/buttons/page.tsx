"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [ count, setCount ] = useState<number>(0);

  useEffect(() => {
    console.log("CLICKED COUNT, Its now set to", count);
  }, [ count ]);

  if (Math.abs(count) === 69 || Math.abs(count) === 420) return <>
    <div className={"flex items-center justify-center h-screen"}>
      <div className={"text-center"}>
        <h1 className={"text-3xl"}>Nice</h1>
        <div className={"flex flex-auto gap-4 justify-center"}>
          <button className={"btn btn-error"} onClick={() => setCount( count - 1 )}>-</button>
          <button className={"btn btn-accent"} onClick={() => setCount( count + 1 )}>+</button>
        </div>
      </div>
    </div>
  </>

  return <>
    <div className={"flex items-center justify-center h-screen"}>
      <div className={"text-center"}>
        <h1 className={"text-3xl"}>Counter: { count }</h1>
        <div className={"flex flex-auto gap-4 justify-center"}>
          <button className={"btn btn-error"} onClick={() => setCount( count - 1 )}>-</button>
          <button className={"btn btn-accent"} onClick={() => setCount( count + 1 )}>+</button>
        </div>
      </div>
    </div>
  </>
}