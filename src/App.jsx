import './style.css';

import interstellar from './assets/Interstellar.png';
import tangled from './assets/Tangled.png';
import obsession from './assets/Obsession.png';

 function App() {
  return (
    <main>
      <h1>Now Showing</h1>

      <section className="movie-grid">
        
        <img src={interstellar} alt="Interstellar" />
        <img src={tangled} alt="Tangled" />
        <img src={obsession} alt="Obsession" />
      </section>
    </main>
  );
}

export default App;