import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch post');
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-4">GET Request - Single Post</h1>

        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Request Details</h2>
          <p><strong>Method:</strong> GET</p>
          <p><strong>Endpoint:</strong> /posts/{id}</p>
          <p><strong>Post ID:</strong> {id}</p>
        </div>

        <div className="mb-6 p-4 border rounded">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Post Details</h2>
            <span className="text-sm text-gray-500">ID: {post.id}</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Title</h3>
              <p className="text-xl">{post.title}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Content</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                <strong>User ID:</strong> {post.userId}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <Link 
            href={`/api/posts/${Math.max(1, parseInt(id) - 1)}`}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            ← Previous Post
          </Link>
          
          <Link 
            href={`/api/posts/${parseInt(id) + 1}`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next Post →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Raw JSON Response</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            {JSON.stringify(post, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
