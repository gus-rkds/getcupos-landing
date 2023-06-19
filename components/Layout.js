
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Landing Page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
