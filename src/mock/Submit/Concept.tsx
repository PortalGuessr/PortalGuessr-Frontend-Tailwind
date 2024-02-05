const Concept = () => {
  return (
    <div className="p-4 space-y-4 bg-black bg-opacity-20">
      <h2 className="mb-2 text-xl text-center border-b border-primary">
        Submit a Guessr
      </h2>
      <p className="text-lg text-center">
        Prior to being accepted, the moderator must review your submission!
        We'll let you know as soon as there's any news. Thanks for contributing!
      </p>
      <form className="flex flex-col justify-center gap-2">
        <label htmlFor="chamber">Guessr Answer</label>
        <input
          type="text"
          name="chamber"
          maxLength={3}
          autoComplete="off"
          autoFocus
          placeholder="Chamber number (e.g., 01, 11, e02)"
          className="input-primary"
        />
        <label htmlFor="difficulty">Guessr Difficulty</label>
        <input
          type="text"
          name="difficulty"
          autoComplete="off"
          autoFocus
          placeholder="Insert a valid difficulty!"
          className="input-secondary"
        />
        <label htmlFor="image">Guessr Image</label>
        <input type="file" name="image" />
        <button type="submit" className="mt-4 button-success">
          <i className="bi bi-file-arrow-up-fill"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default Concept;
