import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Layout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ✅ Auto scroll top on route change */}
      <ScrollToTop />

      {/* ✅ Fixed navbar for all pages */}
      <Navbar />

      {/* ✅ Page content */}
      <Outlet />

      {/* ✅ Footer for all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
