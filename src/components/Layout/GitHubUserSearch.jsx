import React, { useState, useEffect } from 'react';

const GitHubUserSearch = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users when search term changes
  useEffect(() => {
    if (!search) return;

    const timeoutId = setTimeout(() => {
      setLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.items || []);
          setLoading(false);
        });
    }, 500); // debounce: wait 500ms

    return () => clearTimeout(timeoutId); // cleanup for debounce
  }, [search]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />

      {loading && <p>Loading...</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img
                src={user.avatar_url}
                alt={user.login}
                style={{ width: 40, borderRadius: '50%', marginRight: 10 }}
              />
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUserSearch;
