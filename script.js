let playersArr = [];
const playersList = document.querySelector('#playersList');
const buttons = document.querySelectorAll('.buttons');

// console.log(buttons);
// window.addEventListener('load', (e) => {
//     const prePlayerFirst = document.querySelector('.pre-player-1');
//     const prePlayerSecond = document.querySelector('.pre-player-2');
//     const prePlayerThird = document.querySelector('.pre-player-3');
    
//     playersList.append(prePlayerFirst,prePlayerSecond,prePlayerThird);
// });

function handleSubmit(e) {  

  // preventing the forms default submit behaviour
  e.preventDefault();

  // quering all buttons (+) (-) (remove)
  // const buttons = document.querySelectorAll('.buttons');

  // emptying the ul tag
  playersList.innerHTML = "";  

  // extracting data from each input from form
  const fName = document.querySelector("#fName");
  const lName = document.querySelector("#lName");
  const country = document.querySelector("#country");
  const score = document.querySelector("#score");
  
  //appending new entry to array
  playersArr.push({
    name: fName.value + " " + lName.value,
    country: country.value,
    score: score.value,
  });

  // sort the array on the basis of scores in descending order
  playersArr.sort((p1,p2) => p2.score - p1.score);

  // traversing the array and display each antry on ui
  playersArr.forEach((p) => {
    const player = document.createElement("li");
    player.classList.add("player");

    const playerDetails = document.createElement("div");
    playerDetails.classList.add("player-details");

    const nameDate = document.createElement("div");
    nameDate.classList.add("name-date");

    const name = document.createElement("span");
    name.classList.add("name");

    const date = document.createElement("span");
    date.classList.add("date");

    const country = document.createElement("span");
    country.classList.add("country");

    const score = document.createElement("span");
    score.classList.add("score");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const remove = document.createElement("div");
    remove.classList.add("delete");

    const increase = document.createElement("div");
    increase.classList.add("increase");

    const decrease = document.createElement("div");
    decrease.classList.add("decrease");

    ///////////////////////////////////////////////////////////
    
    name.innerText = p.name;

    country.innerText = p.country;
    score.innerText = p.score;
    remove.innerText = '🗑';
    increase.innerText = '+5';
    decrease.innerText = '-5';

    /////////////////////////////////////////////////////////////

    nameDate.append(name, date);
    playerDetails.append(nameDate, country, score);
    buttons.append(remove, increase, decrease);
    player.append(playerDetails, buttons);

    //////////////////////////////////////////////////////////////
    playersList.appendChild(player);

  });

  

}


// adding event listener to all 3 buttons of each ui using event delegation
// buttons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         if (e.target.innerText == '+5') {
//             var score = e.target.parentNode.previousElementSibling.lastElementChild;
//             score.innerText = Number(score.innerText) + 5;  
//         } else if (e.target.innerText == '🗑') {
            
//         } else if (e.target.innerText == '-5') {
//             var score = e.target.parentNode.previousElementSibling.lastElementChild;
//             score.innerText = Number(score.innerText) - 5; 
//         }
//     });
// });

playersList.addEventListener('click', (e) => {
  if (e.target.classList.contains('increase')) {
      var score = e.target.parentNode.previousElementSibling.lastElementChild;
      score.innerText = Number(score.innerText) + 5;  
      refreshArr();
  } else if (e.target.classList.contains('delete')) {
      // Handle remove logic
  } else if (e.target.classList.contains('decrease')) {
      var score = e.target.parentNode.previousElementSibling.lastElementChild;
      score.innerText = Number(score.innerText) - 5; 
      resfreshArr();
  }
});