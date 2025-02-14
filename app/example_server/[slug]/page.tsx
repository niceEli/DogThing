export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <>
    <p>You Are On &#34;{slug}&#34;</p>
  </>
}