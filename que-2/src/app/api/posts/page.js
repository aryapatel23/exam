import Link from 'next/link';

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const posts = await response.json();
    return posts.slice(0, 5); // Return only first 5 posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-4">GET Request - Posts List</h1>

        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Request Details</h2>
          <p><strong>Method:</strong> GET</p>
          <p><strong>Endpoint:</strong> /posts</p>
          <p><strong>Posts Retrieved:</strong> {posts.length}</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Posts (First 5)</h2>
        
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="p-4 border rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <span className="text-sm text-gray-500">ID: {post.id}</span>
                </div>
                <p className="text-gray-600 mb-2">{post.body}</p>
                <p className="text-sm text-gray-500">User ID: {post.userId}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No posts found.</p>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Raw JSON Response</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            {JSON.stringify(posts, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
