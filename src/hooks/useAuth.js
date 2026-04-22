import { useState, useCallback } from 'react';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('designer');
  const [user, setUser] = useState(null);

  const login = useCallback((type = 'designer') => {
    setIsLoggedIn(true);
    setUserType(type);
    setUser({
      id: '1',
      name: 'Hajar Ahmed',
      email: 'hajar@fontts.io',
      avatar: null,
      type,
      rating: 4.9,
      level: 'Expert',
    });
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserType('designer');
    setUser(null);
  }, []);

  const signup = useCallback((data) => {
    setIsLoggedIn(true);
    setUserType(data.type || 'designer');
    setUser({ id: '1', ...data });
  }, []);

  return { isLoggedIn, userType, user, login, logout, signup };
}
