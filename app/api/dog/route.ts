export async function GET() {
  const dog: string = await fetch('https://dog.ceo/api/breeds/image/random', { cache: 'no-cache' })
    .then(response => response.json())
    .then(data => data.message);

  const dogImage: Response = await fetch(dog)
  const dogImageBuffer: ArrayBuffer = await dogImage.arrayBuffer();

  const base64URL: string = Buffer.from(dogImageBuffer).toString('base64');

  const dataURL = `data:image/png;base64,${base64URL}`;

  return Response.json({ message: dataURL });
}