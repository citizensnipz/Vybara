'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user === null) {
        router.push('/signup');
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Still checking auth state
  if (user === undefined) {
    return null;
  }

  // Not authenticated
  if (user === null) {
    return null;
  }

  // Authenticated
  return <>{children}</>;
}
