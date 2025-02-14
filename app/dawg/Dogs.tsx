"use client";
import {CSSProperties, useEffect, useState} from "react";

export default function Dogs({ initialDog, initialError }: { initialDog: string, initialError: string | null } ) {
  const [ dog, setDog ] = useState<string>("");
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    setDog(initialDog)
    setError(initialError)
  }, []);

  const dogCssProperties: CSSProperties = {
    width: "auto",
    height: "75dvh",
    objectFit: "contain",
  }
  const setupDog = async () => {
    setError(null)
    setDog("")
    let data: { message: string };
    try {
      data = await (await fetch("/api/dog")).json()
      setDog(data.message)
    } catch (err: unknown) {
      const {message} = err as Error;
      setError(message);
    }
  }

  useEffect(() => {
    if (initialDog == "" && initialError == null) setupDog().catch(err => setError(err.message));
  }, [])

  if (error) {
    return <div className={"flex items-center justify-center h-screen"}>
      <div className={"text-center space-y-5"}>
        <h1 className={"text-3xl"}>failed to load. ERR: &#34;{error}&#34;</h1>
        <button className={"btn btn-accent"} onClick={setupDog}>Retry</button>
      </div>
    </div>
  }

  if (dog == "") return <div className={"flex items-center justify-center h-screen"}>
    <div className={"text-center space-y-5"}>
      <h1 className={"text-3xl"}>loading...</h1>
      <button className={"btn btn-accent"} onClick={setupDog}>Retry</button>
    </div>
  </div>

  if (dog) return <div className={"flex items-center justify-center h-screen"}>
    <div className={"text-center space-y-5"}>
      {/* eslint-disable-next-line @next/next/no-img-element */ /* Image component causes errors */}
      <img src={dog} alt={"Dog Image"} style={dogCssProperties}></img>
      <button className={"btn btn-accent"} onClick={setupDog}>Retry</button>
    </div>
  </div>

  return <></>
}