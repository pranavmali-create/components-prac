const Navbar = () => {
  return (
    <nav className="bg-purple-500 text-white p-3 justify-between flex items-center">
      <div className="flex items-center">
        <h5 className="font-extrabold">LOGO</h5>
      </div>
      <div className="flex items-center gap-3">
        <h5>HOME</h5>
        <h5>ABOUT</h5>
        <h5>SERVICE</h5>
        <h5>CONTACT</h5>
      </div>
    </nav>
  );
};

export default Navbar;
