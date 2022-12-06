import logo from "./logo.svg";

import { RoutesMain } from "./routes";

import { AuthProvider } from "./context/AuthContext";

import { GlobalStyles } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{ backgroundColor: "var(--color-grey-2)" }}
      />
    </>
  );
}

export default App;
