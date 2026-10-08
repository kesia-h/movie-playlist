import './style.css';

import interstellar from './assets/Interstellar.png';
import tangled from './assets/Tangled.png';
import obsession from './assets/Obsession.png';
import hungerGames from './assets/HungerGames.png';
import ratatouille from './assets/Ratatouille.png';
import forrestGump from './assets/ForrestGump.png';

 function App() {
  return (
    <main>
      <h1>Now Showing!</h1>

      <section className="movie-grid">
        
        <div className="movie-card">
        <img src={interstellar} alt="Interstellar" />
         <h2>Interstellar</h2>
         <p>Sci-Fi • 2014</p>
        </div>

        <div className="movie-card">
          <img src={tangled} alt="Tangled" />
          <h2>Tangled</h2>
          <p>Animation • 2010</p>
        </div>

        <div className="movie-card">
        <img src={hungerGames} alt="Hunger Games" />
          <h2>Hunger Games</h2>
          <p>Sci-Fi • 2012</p>
        </div>
      </section>

      <h1>Up Next!</h1>

      <section className="movie-grid">

        <div className="movie-card">
          <img src={obsession} alt="Obsession" />
          <h2>Obsession</h2>
          <p>Drama • 2023</p>
        </div>

        <div className="movie-card">
          <img src={ratatouille} alt="Ratatouille" />
          <h2>Ratatouille</h2>
          <p>Animation • 2007</p>
        </div>

        <div className="movie-card">
          <img src={forrestGump} alt="Forrest Gump" />
          <h2>Forrest Gump</h2>
          <p>Drama • 1994</p>
        </div>
      </section>

    </main>
  );
}

export default App;