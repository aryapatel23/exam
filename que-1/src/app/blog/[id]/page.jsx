'use client';

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
    </div>
  );
}