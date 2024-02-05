const Concept = () => {
  return (
    <div className="p-4 space-y-4 bg-black bg-opacity-20">
      <div>
        <h2 className="mb-2 text-xl border-b border-primary">
          XnonXte Profile
        </h2>
        <div className="flex items-center justify-around my-4">
          <div>
            <img
              src="./src/img/default-user.jpg"
              alt="User image"
              className="w-[100px] h-[100px] rounded-full shadow-lg mb-4"
            />
            <h3 className="mb-2 text-lg font-bold text-primary">XnonXte</h3>
            <p className="text-secondary">Quddus Salam</p>
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="mb-2 border-b border-secondary">ELO</h3>
              <p>200</p>
            </div>
            <div>
              <h3 className="mb-2 border-b border-secondary">
                <i className="text-lg text-[#1DA1F2] bi bi-twitter"></i> Twitter
              </h3>
              <a
                href="https://twitter.com/XnonXte"
                target="_blank"
                className="link-primary"
              >
                @XnonXte
              </a>
            </div>
            <div>
              <h3 className="mb-2 border-b border-secondary">
                <i className="text-lg text-[#5865F2] bi bi-discord"></i> Discord
              </h3>
              <p>@xnonxte</p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="mb-2 border-b border-secondary">Last Online</h3>
              <p>5 days ago</p>
            </div>
            <div>
              <h3 className="mb-2 border-b border-secondary">
                Completed Guessrs
              </h3>
              <p>15</p>
            </div>
            <div>
              <h3 className="mb-2 border-b border-secondary">
                Submitted Chambers
              </h3>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xl border-b border-primary ">About Me</h2>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          maiores cumque accusamus voluptates possimus ratione veniam fugiat
          praesentium quisquam, dolores dicta ducimus vero labore quae dolore
          aut consequatur deserunt temporibus! Accusamus eaque, dolorum rerum,
          et delectus tempora impedit quisquam ab obcaecati, placeat magni
          repudiandae dignissimos id temporibus illum laudantium provident?
        </p>
      </div>

      <div>
        <button type="button" className="button-primary">
          Visit XnonXte's statistics
        </button>
      </div>
    </div>
  );
};

export default Concept;
