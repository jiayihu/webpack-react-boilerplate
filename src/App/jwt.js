export function getAuth(email = 'costa.danilo88@gmail.com', password = 'secret') {
  const url = `http://api.coderblock.com/v1/sessions?email=${email}&password=${password}`;
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.error('Error', err));
}

export function getData(token) {
  const url = 'http://api.coderblock.com/v1/coders/DanPhyxius';
  const options = {
    headers: {
      tk: `Bearer ${token}`,
    },
  };
  return fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error('Error', err.message));
}
