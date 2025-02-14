"use client";
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Page() {
  const { data, error } = useSwr('/api/example', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <>
    <h1>example page</h1>
    <p>{data.message}</p>
  </>
}