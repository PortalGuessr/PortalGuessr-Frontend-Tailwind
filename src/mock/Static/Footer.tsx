const Footer = () => {
  return (
    <footer>
      <div className="mt-4 space-y-2 text-center">
        <h6 className="text-xl">
          Created By{" "}
          <a href="#" target="_blank" className="link-accent">
            XnonXte
          </a>
        </h6>
        <p className="text-lg">
          Join the{" "}
          <a href="#" target="_blank" className="link-primary">
            Discord server <i className="bi bi-discord"></i>
          </a>
        </p>
      </div>
      <div className="space-y-2">
        <div className="text-sm">
          <a href="#" target="_blank" className="link-danger">
            Found a bug? Report it on GitHub!
          </a>
        </div>
        <h6 className="text-xs">PortalGuessr v0.1</h6>
      </div>
    </footer>
  );
};

export default Footer;
