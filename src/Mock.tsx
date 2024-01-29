const App = () => {
  return (
    <div className="h-screen bg-background text-text">
      <div className="container mx-auto space-y-4">
        <div>
          <h1>Hello, World!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nam
            nemo eligendi facere error dolorem consequuntur neque repudiandae
            quibusdam iure necessitatibus, illo consectetur perspiciatis.
            Magnam!
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            className={`bg-primary shadow-lg text-white p-2 hover:bg-white hover:text-primary`}
          >
            Primary
          </button>
          <input
            type="text"
            className="p-2 bg-secondary placeholder:text-lg placeholder:text-neutral-400 shadow-${shadowSize}"
            placeholder="Enter something..."
            autoComplete="OFF"
            autoFocus
          />
        </div>

        <a
          href="#"
          className="underline shadow-lg text-primary underline-offset-2 hover:text-white"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default App;
