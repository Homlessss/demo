import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux";
import { Routes } from "./routes";
import LoadingOverlay from "./components/LoadingOverlay";
import { SplashScreen } from "./components/SplashScreen";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

const { PUBLIC_URL } = process.env;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        <React.Suspense fallback={<SplashScreen />}>
          <Routes basename={PUBLIC_URL} />
          <LoadingOverlay />
          <ToastContainer />
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
