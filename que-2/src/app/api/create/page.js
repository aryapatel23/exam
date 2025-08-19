'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CreatePage() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sampleData = {
    title: "Hello Next.js API Test",
    body: "This is a test post created using Next.js to demonstrate POST requests with the JSONPlaceholder API.",
    userId: 1
  };

  const handleCreatePost = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sampleData),
      });

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-4">POST Request - Create Post</h1>

        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Request Details</h2>
          <p><strong>Method:</strong> POST</p>
          <p><strong>Endpoint:</strong> /posts</p>
          <p><strong>Status:</strong> {loading ? 'Loading...' : response ? 'Success' : error ? 'Error' : 'Ready'}</p>
        </div>

        <div className="mb-6 p-4 border rounded">
          <h2 className="font-semibold mb-4">Request Data</h2>
          <pre className="bg-gray-100 p-4 rounded mb-4 text-sm overflow-x-auto">
            {JSON.stringify(sampleData, null, 2)}
          </pre>
          
          <button
            onClick={handleCreatePost}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Post...' : 'Create Post'}
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-300 rounded bg-red-50">
            <h2 className="font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {response && (
          <div className="space-y-6">
            <div className="p-4 border rounded">
              <h2 className="font-semibold mb-4">Created Post</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Title</h3>
                  <p className="text-xl">{response.title}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Content</h3>
                  <p className="text-gray-600">{response.body}</p>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500"><strong>Post ID:</strong> {response.id}</p>
                  <p className="text-sm text-gray-500"><strong>User ID:</strong> {response.userId}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Raw JSON Response</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
