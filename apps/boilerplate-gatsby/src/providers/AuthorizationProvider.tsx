import { createContext, useContext, useEffect, useState } from 'react';

import { navigate } from 'gatsby';

const AuthorizationContext = createContext<any>({});

export function AuthorizationProvider({ children, path }: any) {
  const [user, setUser] = useState<any>();
  const [isAuthorized, setIsAuthorized] = useState<boolean>();
  const requestAuthentication = path.match(/\/:.*\//g);

  function checkAuthentication() {
    const auth = false;
    if (auth) {
      setUser({
        name: 'Vinicius',
      });
      setIsAuthorized(true);
    }
    setIsAuthorized(false);
    navigate('/');
  }

  useEffect(() => {
    if (requestAuthentication) {
      checkAuthentication();
    }
  }, []);

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, user }}>
      {isAuthorized || !requestAuthentication ? children : null}
    </AuthorizationContext.Provider>
  );
}

export function useAuthorization() {
  return useContext(AuthorizationContext);
}
