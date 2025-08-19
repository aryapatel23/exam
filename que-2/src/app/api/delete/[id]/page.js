'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DeletePage({ params }) {
  const { id } = params;
  const [originalPost, setOriginalPost] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fetch original post on component mount
  useEffect(() => {
    const fetchOriginalPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.ok) {
          const post = await response.json();
          setOriginalPost(post);
        }
      } catch (error) {
        console.error('Error fetching original post:', error);
      }
    };

    fetchOriginalPost();
  }, [id]);

  const handleDeletePost = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! status: ${apiResponse.status}`);
      }

      // DELETE requests typically don't return content, but JSONPlaceholder returns an empty object
      const data = await apiResponse.json();
      setResponse(data);
      setShowConfirmation(false);
    } catch (err) {
      setError(err.message);
      setShowConfirmation(false);
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
        
        <h1 className="text-3xl font-bold mb-4">DELETE Request - Delete Post</h1>

        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Request Details</h2>
          <p><strong>Method:</strong> DELETE</p>
          <p><strong>Endpoint:</strong> /posts/{id}</p>
          <p><strong>Status:</strong> {loading ? 'Loading...' : response ? 'Success' : error ? 'Error' : 'Ready'}</p>
        </div>

        {originalPost && (
          <div className="mb-6 p-4 border rounded">
            <h2 className="font-semibold mb-4">Post to Delete (ID: {id})</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Title</h3>
                <p className="text-xl">{originalPost.title}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Content</h3>
                <p className="text-gray-600">{originalPost.body}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">
                  <strong>User ID:</strong> {originalPost.userId}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6 p-4 border rounded">
          <h2 className="font-semibold mb-4">Delete Action</h2>
          
          {!showConfirmation ? (
            <div className="space-y-4">
              <button
                onClick={() => setShowConfirmation(true)}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete Post
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 border border-red-300 rounded bg-red-50">
                <h3 className="font-semibold text-red-800 mb-2">Confirm Deletion</h3>
                <div className="flex gap-4">
                  <button
                    onClick={handleDeletePost}
                    disabled={loading}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Deleting...' : 'Confirm Delete'}
                  </button>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    disabled={loading}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
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
              <h2 className="font-semibold mb-4">Delete Confirmation</h2>
              
              <div className="p-4 border border-green-300 rounded bg-green-50 mb-4">
                <p className="text-green-800 font-semibold">Post successfully deleted!</p>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500"><strong>Deleted Post ID:</strong> {id}</p>
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

        <div className="flex justify-between items-center mt-6">
          <Link 
            href={`/api/delete/${Math.max(1, parseInt(id) - 1)}`}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            ← Previous Post
          </Link>
          
          <Link 
            href={`/api/delete/${parseInt(id) + 1}`}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Next Post →
          </Link>
        </div>
      </div>
    </div>
  );
}
