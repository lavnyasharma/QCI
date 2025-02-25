import { useMemo, useEffect } from 'react';

import { useSetState } from 'src/hooks/use-set-state';

import { STORAGE_KEY } from './constant';
import { AuthContext } from '../auth-context';
import { setSession } from './utils';

// ----------------------------------------------------------------------

export function AuthProvider({ children }) {
  const { state, setState } = useSetState({
    user: null,
    loading: true,
  });

  useEffect(() => {
    const accessToken = sessionStorage.getItem(STORAGE_KEY);

    if (accessToken) {
      setSession(accessToken);
      setState({ user: { accessToken }, loading: false });
    } else {
      setState({ user: null, loading: false });
    }
  }, [setState]);

  // ----------------------------------------------------------------------

  const status = state.loading ? 'loading' : state.user ? 'authenticated' : 'unauthenticated';

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
    }),
    [state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
