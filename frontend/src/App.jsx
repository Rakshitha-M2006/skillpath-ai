import { useState, useEffect } from 'react';

function App() {
  const [apiMessage, setApiMessage] = useState('Connecting to backend...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from our Express server on port 5000
    fetch('http://localhost:5000/api/test')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to connect');
        return res.json();
      })
      .then((data) => {
        setApiMessage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching API:', err);
        setApiMessage('Could not reach backend API. Is the server running?');
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4">
      <div className="text-center p-8 bg-slate-800 rounded-2xl shadow-xl max-w-md border border-slate-700">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          SkillPath AI
        </h1>
        
        {/* Dynamic content loaded directly from our Express server */}
        <p className={`text-lg ${loading ? 'text-slate-400 animate-pulse' : 'text-slate-300'}`}>
          {apiMessage}
        </p>

        <button className="mt-6 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 shadow-lg shadow-blue-500/20">
          Let's Explore
        </button>
      </div>
    </div>
  );
}

export default App;