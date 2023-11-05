import "@/styles/globals.css";
import MainLayout from "@/src/components/layout/MainLayout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/src/redux/store";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
