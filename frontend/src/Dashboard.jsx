function Dashboard({ user, onLogout }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}>
        <h2>SkillPath AI</h2>
        <div>
          <span style={{ marginRight: '15px', color: '#555' }}>{user.email}</span>
          <button onClick={onLogout} style={{ padding: '8px 15px', background: '#d9534f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Log Out
          </button>
        </div>
      </header>
      
      <main style={{ marginTop: '30px' }}>
        <h3>Your Learning Roadmap</h3>
        <p style={{ color: '#666' }}>This is where your AI-generated roadmap and skill gaps will appear.</p>
        
        {/* Placeholder for future Phase 7 components */}
        <div style={{ marginTop: '20px', padding: '20px', border: '1px dashed #aaa', borderRadius: '8px', textAlign: 'center' }}>
          <p>Resume upload and skill extraction module coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;