import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', score: '', level: '' });
  const [loading, setLoading] = useState(true);

  // Fetch all players (GET)
  const fetchPlayers = async () => {
    try {
      const res = await fetch('http://localhost:5000/players/get');
      const data = await res.json();
      setPlayers(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching players:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add a new player (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/players/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const newPlayer = await res.json();
      setPlayers([...players, newPlayer]); // Update UI
      setForm({ name: '', age: '', score: '', level: '' }); // Clear form
    } catch (err) {
      console.error('Error adding player:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">👤 Player Dashboard</h1>

      {/* Form to add player */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600">Add New Player</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="score"
            placeholder="Score"
            value={form.score}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="level"
            placeholder="Level"
            value={form.level}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Add Player
        </button>
      </form>

      {/* Players display */}
      {loading ? (
        <div className="text-center text-gray-500">Loading players...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {players.map((player) => (
            <div
              key={player._id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold text-purple-700 mb-2">{player.name || 'Unnamed Player'}</h2>
              <p className="text-gray-600">Age: {player.age || 'N/A'}</p>
              <p className="text-gray-600">Score: {player.score || 0}</p>
              <p className="text-gray-600">Level: {player.level || 'Beginner'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
