const jkEndpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw';

const getJK = () => new Promise((resolve, reject) => {
fetch(jkEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJK;
