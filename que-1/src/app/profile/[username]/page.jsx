'use client';

import { useParams } from 'next/navigation';

export default function ProfilePage() {
  const params = useParams();
  const { username } = params;

  return (
    <div>
      <h1>Profile Page: {username}</h1>
    </div>
  );
}