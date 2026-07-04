import { useState } from 'react';
import { auth, googleProvider } from './firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup 
} from 'firebase/auth';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Clear previous errors
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      // This will print the exact reason it failed right on the screen
      setErrorMsg(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    setErrorMsg('');
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Sign In' : 'Create Account'}</h2>
      
      {/* Error Message Display */}
      {errorMsg && (
        <div style={{ backgroundColor: '#ffcccc', color: '#cc0000', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px' }}>
          <strong>Error:</strong> {errorMsg}
        </div>
      )}

      <form onSubmit={handleEmailAuth} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" 
          placeholder="Email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Password (min 6 characters)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>— OR —</div>

      <button 
        onClick={handleGoogleAuth}
        style={{ width: '100%', padding: '10px', background: 'white', color: '#444', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" style={{ width: '18px' }}/>
        Continue with Google
      </button>

      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); }} 
          style={{ color: '#0056b3', cursor: 'pointer', textDecoration: 'underline' }}
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </div>
  );
}

export default Auth;