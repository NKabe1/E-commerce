import { Suspense, useCallback, useContext } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { AuthContext, TAuthorizationStage } from "./contexts/AuthContext";
import { PublicRoutes } from "./views/Public/PublicRoutes";
import { PrivateRoutes } from "./views/Private/PrivateRoutes";


function App() {
  const { status } = useContext(AuthContext);
  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <>
            <PrivateRoutes />
            <PublicRoutes />
          </>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return <PublicRoutes />;
      }
    }
  }, []);

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>{handleRoutes(status)}</Suspense>
    </div>
  );
}

export default App;
