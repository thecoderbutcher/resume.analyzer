import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen transition-all duration-300 px-2">
      <Navbar />
      <div className="flex flex-col grow-1 items-center justify-center">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
