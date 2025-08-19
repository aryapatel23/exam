import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          JSONPlaceholder API Demo
        </h1>

        <ul className="space-y-4">
          <li>
            <Link href="/api/posts" className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">GET Request</h2>
              <span className="text-sm text-gray-500">Route: /api/posts</span>
            </Link>
          </li>

          <li>
            <Link href="/api/posts/1" className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">GET Single Post</h2>
              <span className="text-sm text-gray-500">Route: /api/posts/[id]</span>
            </Link>
          </li>

          <li>
            <Link href="/api/create" className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">POST Request</h2>
              <span className="text-sm text-gray-500">Route: /api/create</span>
            </Link>
          </li>

          <li>
            <Link href="/api/update/1" className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">PUT Request</h2>
              <span className="text-sm text-gray-500">Route: /api/update/[id]</span>
            </Link>
          </li>

          <li>
            <Link href="/api/delete/1" className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold mb-2">DELETE Request</h2>
              <span className="text-sm text-gray-500">Route: /api/delete/[id]</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
