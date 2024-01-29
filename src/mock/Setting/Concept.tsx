const Concept = () => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-xl text-center">
          <i className="bi bi-gear-fill"></i> Setting
        </h4>
      </div>

      <div>
        <div className="mb-4">
          <h5 className="mb-2 text-lg text-success">Difficulty Modifiers</h5>
          <p>
            <i className="bi bi-arrow-right"></i> These modifiers change how the
            image would appear in your game.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div>
              <input type="checkbox" className="w-4 h-4" id="grayscale" />
            </div>
            <div>
              <label htmlFor="grayscale">Grayscale image</label>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <input type="checkbox" className="w-4 h-4" id="blur" />
            </div>
            <div>
              <label htmlFor="blur">Blur image</label>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <input type="checkbox" className="w-4 h-4" id="invert" />
            </div>
            <div>
              <label htmlFor="invert">Invert image upside down</label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h5 className="mb-2 text-lg text-danger">Danger Section!</h5>
          <p>
            <i className="bi bi-arrow-right"></i> WARNING: This action is
            irreversible!
          </p>
        </div>
        <button type="button" className="button-primary">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Concept;
