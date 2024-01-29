const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 mb-4 border-b-2 border-primary">
      <div className="space-x-4">
        <a href="#">
          <i className="text-4xl bi bi-person-fill"></i>
        </a>
        <a href="#">
          <i className="text-4xl bi bi-question-circle-fill"></i>
        </a>
      </div>
      <div>
        <h1 className="text-4xl">PortalGuessr</h1>
      </div>
      <div className="space-x-4">
        <a href="#">
          <i className="text-4xl bi bi-bar-chart-fill"></i>
        </a>
        <a href="#">
          <i className="text-4xl bi bi-gear-fill"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
