
export default function Page() {
  return <>
    <div className={"flex w-screen h-screen items-center justify-center p-4"}>
      <div className={"text-center"}>
        <div className={"rounded-2xl bg-emerald-700 rotate-6 !sm:max-w-xs mx-auto"}>
          <h1 className={"text-6xl sm:text-9xl text-yellow-100 font-extrabold font-serif py-5 m-5 -rotate-6"}>DogThing</h1>
        </div>
        <a className={"btn btn-warning"} href={"/dawg"}>Get A Dog</a>
      </div>
    </div>
  </>
}
