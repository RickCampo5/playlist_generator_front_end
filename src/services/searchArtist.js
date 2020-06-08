export function searchArtist (query, setArtists) {
  const token = localStorage.getItem('token')
  const baseURL = 'http://localhost:3000/search/'
  const payload = JSON.stringify({ "regex":query })

  fetch(baseURL, { 
    method: 'POST',
    body: payload,
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {
    const artists = JSON.parse(data)
    const items = artists.artists.items

    setArtists(items)
  })
}