const Concept = () => {
  return (
    <div className="space-y-4">
      <div>
        <a href="#">
          <i className="bi bi-arrow-left"></i> Back to profile
        </a>
      </div>

      <div className="p-4 bg-black bg-opacity-20">
        <div>
          <h2 className="mb-2 text-xl text-center border-b border-primary">
            Edit Profile
          </h2>
          <form className="flex flex-col justify-center gap-2">
            <label htmlFor="icon">User Picture</label>
            <input type="file" name="icon" />

            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              name="nickname"
              autoComplete="off"
              autoFocus
              placeholder="Nickname"
              className="input-primary"
            />

            <label htmlFor="real-name">Real Name</label>
            <input
              type="text"
              name="real-name"
              autoComplete="off"
              autoFocus
              placeholder="Real Name"
              className="input-secondary"
            />

            <label htmlFor="about-me">About Me</label>
            <textarea
              name="about-me"
              cols={30}
              rows={10}
              className="input-primary"
              placeholder="Hello! I'm bla bla bla"
            ></textarea>

            <label htmlFor="twitter">
              <i className="bi bi-twitter text-[#1DA1F2]"></i> Twitter
            </label>
            <input
              type="text"
              name="twitter"
              autoComplete="off"
              autoFocus
              placeholder="Twitter Handle"
              className="input-primary"
            />

            <label htmlFor="discord">
              {" "}
              <i className="bi bi-discord text-[#5865F2]"></i> Discord
            </label>
            <input
              type="text"
              name="discord"
              autoComplete="off"
              autoFocus
              placeholder="Discord Username"
              className="input-primary"
            />

            <button type="submit" className="mt-4 button-success">
              <i className="bi bi-floppy-fill"></i> Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Concept;
