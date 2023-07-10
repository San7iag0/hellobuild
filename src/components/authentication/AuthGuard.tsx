import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface AuthGuardProps {
    children: ReactNode
}

const AuthGuard: FC<AuthGuardProps> = props => {
    const [loading, setLoading] = useState(false);
    const { children } = props;
    const auth = getAuth() as any;
    const nav = useNavigate();

    useEffect(() => {
      const AuthCheck = onAuthStateChanged(auth, (user) => {
          if (user) {
              setLoading(false);
              console.log('authorized ', user);
              
          } else {
              console.log('unauthorized');
              nav('/login');
          }
      });

      return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return <>{children}</>;
};

export default AuthGuard;
