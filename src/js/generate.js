
const url= 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljmGTCiQ0bLn1cM60koG/scores'
export const generate = async () => { 
    await fetch(url).then(res=>{
         return res.json();     
     }).then(file =>{
         const html = file.result.map(user => {
             return `<li class='list-item'><p>${user.user}</p><p>${user.score}</p></li>`
         })
         const list = document.querySelector('#list')
         list.innerHTML=`${html.join('')}`
     })
 }