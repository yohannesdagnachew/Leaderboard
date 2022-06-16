const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljmGTCiQ0bLn1cM60koG/scores';
const getPost = async (inputFile) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputFile),
  });
  await response.json();
};
exports.getPost = getPost;
