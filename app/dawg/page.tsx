import Dogs from "@/app/dawg/Dogs";
import * as GetDog from "@/app/api/dog/route";

export async function generateMetadata() {
  return {
    title: "Dogs",
    description: "The Dogs Page",
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function _getFirstDog() {
  let error: string | null = null;
  //const data = await getDog().catch(err => error = err.message);
  const grq = await GetDog.GET().catch(err => error = err.message);

  let data: string = "";
  if (!error) {
    data = (await grq.json().catch((err: { message: string | null; }) => error = err.message)).message;
  }

  let dog: string = "";
  if (!error) {
    dog = data;
  }

  return {
    dog: dog,
    error: error,
  }
}

export default async function Page() {
  //const { dog, error } = await getFirstDog();

  return <>
    <Dogs initialDog={""} initialError={null}></Dogs>
  </>
}