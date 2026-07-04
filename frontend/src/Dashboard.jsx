import { useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import ResumeUpload from '../components/ResumeUpload';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for the logged-in user
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      
      {/* Pass the user object as a prop here! */}
      {user && <ResumeUpload user={user} />}
    </div>
  );
}