import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <Footer />
    </div>
  );
}
