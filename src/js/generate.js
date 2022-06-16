const url ='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljmGTCiQ0bLn1cM60koG/scores';
const generate = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((file) => {
      const newresult = file.result;
      for (let i = 0; i < newresult.length; i++) {
        newresult[i].index = i;
      }
      const html = newresult.map((user) => {
        if (user.index % 2 == 0) {
          return `<li class='list-item'><p>${user.user}</p><p>${user.score}</p></li>`;
        } else {
          return `<li class='gray'><p>${user.user}</p><p>${user.score}</p></li>`;
        }
      });
      const list = document.querySelector('#list');
      list.innerHTML = `${html.join('')}`;
    });
};
exports.generate = generate;
