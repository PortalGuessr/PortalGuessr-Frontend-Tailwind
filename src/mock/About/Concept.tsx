const Concept = () => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-xl text-center text-info">
          About PortalGuessr
        </h4>
        <p>
          PortalGuessr is a quiz game to test your knowledge about Portal.
          Previously a Discord bot, now come as a web app!
        </p>
      </div>

      <div>
        <h5 className="mb-2 text-lg text-warning">How To Play?</h5>
        <p>
          There are 10 rounds in a single game, you have to guess with entering
          a valid chamber number, try to finish the game before the timer runs
          out! Don't forget there are difficulty modifiers you can use to spice
          up your game!
        </p>
      </div>

      <div>
        <h5 className="mb-2 text-lg text-danger">Credits</h5>
        <ol>
          {/* TODO: Fix this issue with list numbering. */}
          <li>1. Everyone for beta testing the game!</li>
          <li>2. Worldle for the inspiration.</li>
          <li>3. GeoGuessr because the game is named after it.</li>
        </ol>
      </div>
    </div>
  );
};

export default Concept;
