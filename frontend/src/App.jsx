function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4">
      <div className="text-center p-8 bg-slate-800 rounded-2xl shadow-xl max-w-md border border-slate-700">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          SkillPath AI
        </h1>
        <p className="text-slate-300 text-lg">
          Tailwind CSS v4 is officially hooked up and working beautifully!
        </p>
        <button className="mt-6 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 shadow-lg shadow-blue-500/20">
          Let's Explore
        </button>
      </div>
    </div>
  );
}

export default App;