const Concept = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">
        Select your difficulty...
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="mx-auto h-[300px] w-[200px] bg-success text-white flex flex-col items-center text-center justify-between hover:-translate-y-2">
          <img src="./src/img/mock-easy.webp" alt="Easy guessr preview" />
          <h3 className="px-2 py-1 font-semibold bg-white text-success">
            Easy
          </h3>
          <ul className="p-2 text-lg">
            <li>Shouldn't take too much time</li>
            <li>2 minutes timer</li>
            <li>10 total rounds</li>
          </ul>
        </div>
        <div className="mx-auto h-[300px] w-[200px] bg-warning text-black flex flex-col items-center text-center justify-between hover:-translate-y-2">
          <img src="./src/img/mock-medium.webp" alt="Medium guessr preview" />
          <h3 className="px-2 py-1 font-semibold bg-black text-warning">
            Medium
          </h3>
          <ul className="p-2 text-lg">
            <li>Challenging, but not too hard to guess</li>
            <li>2 minutes timer</li>
            <li>10 total rounds</li>
          </ul>
        </div>
        <div className="mx-auto h-[300px] w-[200px] bg-danger text-white flex flex-col items-center text-center justify-between hover:-translate-y-2">
          <img src="./src/img/mock-hard.webp" alt="Hard guessr preview" />
          <h3 className="px-2 py-1 font-semibold bg-white text-danger">Hard</h3>
          <ul className="p-2 text-lg">
            <li>It will take time, but still possible</li>
            <li>4 minutes timer</li>
            <li>10 total rounds</li>
          </ul>
        </div>
        <div className="mx-auto h-[300px] w-[200px] bg-info text-black flex flex-col items-center text-center justify-between hover:-translate-y-2">
          <img
            src="./src/img/mock-veryhard.webp"
            alt="Very Hard guessr preview"
          />
          <h3 className="px-2 py-1 font-semibold bg-black text-info">
            Very Hard
          </h3>
          <ul className="p-2 text-lg">
            <li>Very hard, unless you're Pr0tal :wink:</li>
            <li>2 minutes timer</li>
            <li>10 total rounds</li>
          </ul>
        </div>
        <div className="mx-auto h-[300px] w-[200px] bg-accent text-white flex flex-col items-center text-center justify-between hover:-translate-y-2">
          <img src="./src/img/mock-random.webp" alt="Random guessr preview" />
          <h3 className="px-2 py-1 font-semibold bg-white text-accent">
            Random
          </h3>
          <ul className="p-2 text-lg">
            <li>Randomizer activated!</li>
            <li>2 minutes timer</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Concept;
