import Navbar from "./Navbar.js"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
