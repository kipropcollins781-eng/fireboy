import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/games';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [balance, setBalance] = useState(2500);

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Unable to load games');
        }

        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  const handlePlay = (game) => {
    if (balance <= 0) {
      setError('Your wallet is empty. Add funds to keep playing.');
      return;
    }

    setBalance((prev) => prev - 25);
    setError('');
    alert(`You started playing ${game.name}.`);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Fireboy</h1>
        </div>
        <div className="wallet-box">
          <span>Wallet</span>
          <strong>${balance}</strong>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">REAL MONEY GAMING</p>
          <h2>Play smart. Win bigger.</h2>
        </div>
        <button className="primary-btn">Deposit</button>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Available Games</span>
          <strong>{games.length}</strong>
        </div>
        <div className="stat-card">
          <span>Hot Picks</span>
          <strong>8</strong>
        </div>
        <div className="stat-card">
          <span>VIP Level</span>
          <strong>Gold</strong>
        </div>
      </section>

      <section className="games-header">
        <h3>Featured games</h3>
      </section>

      {loading && <p className="status">Loading games...</p>}
      {error && <p className="status error">{error}</p>}

      <section className="games-grid">
        {games.map((game) => (
          <article key={game.id} className="game-card">
            <div className="badge-row">
              <span className="badge">{game.type}</span>
              <span className={`badge ${game.realMoney ? 'live' : 'demo'}`}>
                {game.realMoney ? 'Real money' : 'Demo'}
              </span>
            </div>
            <h4>{game.name}</h4>
            <p>{game.description}</p>
            <div className="meta-row">
              <span>Payout {game.payout}</span>
              <span>{game.popularity}%</span>
            </div>
            <button className="play-btn" onClick={() => handlePlay(game)}>
              Play now
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
