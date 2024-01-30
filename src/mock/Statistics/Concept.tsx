const Concept = () => {
  return (
    <div className="space-y-4">
      <h3 className="pb-2 text-xl font-bold text-center border-b-2 border-secondary">
        Statistics
      </h3>

      <div className="flex items-center justify-around gap-4">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Played</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">0%</h4>
          <p className="text-lg">Correct %</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Correct</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Incorrect</p>
        </div>
      </div>

      <h3 className="pb-2 text-xl font-bold text-center border-b-2 border-secondary">
        Difficulty Count
      </h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center justify-center p-2 text-white bg-success">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Easy</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 text-black bg-warning">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Medium</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 text-white bg-danger">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Hard</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 text-black bg-info">
          <h4 className="text-lg font-semibold">0</h4>
          <p className="text-lg">Very Hard</p>
        </div>
      </div>

      <h3 className="pb-2 text-2xl font-bold text-center border-b-2 border-secondary">
        Share
      </h3>
      <p className="text-lg text-center">
        Share your statistics with other people!
      </p>
      <div className="flex items-center justify-center gap-2">
        <button type="button" className="button-primary">
          <i className="bi bi-image"></i> Screenshot
        </button>
        <button type="button" className="button-secondary">
          <i className="bi bi-twitter"></i> Twitter
        </button>
        <button type="button" className="button-danger">
          <i className="bi bi-facebook"></i> Facebook
        </button>
      </div>
    </div>
  );
};

export default Concept;
