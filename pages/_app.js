import { useEffect } from "react";
import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { initializeCart } from "@/redux/cartRedux";

function App({ Component, pageProps }) {
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    store.dispatch(initializeCart({ products: cartProducts }));
  }, []);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default App;
