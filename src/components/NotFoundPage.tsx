import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-block bg-cyan-700 text-white px-6 py-3 rounded-lg hover:bg-cyan-800 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
