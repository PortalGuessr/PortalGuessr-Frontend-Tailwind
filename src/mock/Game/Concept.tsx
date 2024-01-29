const Concept = () => {
  return (
    <div className="space-y-4">
      <div>
        <a href="#" className="">
          <i className="bi bi-arrow-left"></i> Quit Game
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-xl">
        <i className="bi bi-clock-fill"></i>
        <h4>00:00</h4>
      </div>

      <div>
        <img src="./src/img/mock-easy.webp" alt="Guessr image" />
      </div>

      <div>
        <div className="flex items-center justify-center gap-2">
          <h5 className="p-2 text-white bg-primary">1 / 10</h5>
          <span className="p-2 text-white bg-success">Easy</span>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            className="input-secondary"
            placeholder="Your answer (e.g., 01, 11, e02)"
            autoComplete="OFF"
            autoFocus
            maxLength={3}
          />
          <button type="submit" className="button-primary">
            Guess
          </button>
        </form>
      </div>
    </div>
  );
};

export default Concept;
