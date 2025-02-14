"use client";
import {useEffect, useState} from "react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const setupSlug = async () => {
      setSlug((await params).slug);
    }

    setupSlug().catch(err => setError(err.message));
  }, [params])

  if (error) return <div>failed to load</div>
  if (!slug) return <div>loading...</div>

  return <>
    <p>You Are On &#34;{slug}&#34;</p>
  </>
}