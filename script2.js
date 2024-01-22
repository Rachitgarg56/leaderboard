let playersArr = [];
const playersList = document.querySelector('#playersList');

// pre-data in playersArr
playersArr.push({
  name: "Virat Kohli",
  country:"INDIA",
  score: 85
});
playersArr.push({
  name: "Rohit Sharma",
  country:"INDIA",
  score: 95
});
playersArr.push({
  name: "Rahul Sharma",
  country:"INDIA",
  score: 70
});
/////////////////////////////


function handleSubmit(e) {  

  // preventing the forms default submit behaviour
  e.preventDefault();

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

  for (let i=0; i<playersArr.length; i++) {
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

    let dateObject = new Date();
    let month = dateObject.toLocaleString("default", {month:"long"})
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    date.innerText = `${month} ${day}: ${year} ${time}`

    const country = document.createElement("span");
    country.classList.add("country");

    const score = document.createElement("span");
    score.classList.add("score");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const remove = document.createElement("div");
    remove.classList.add("delete");
    remove.setAttribute('onclick', `deleteEntry(${i})`);

    const increase = document.createElement("div");
    increase.classList.add("increase");
    increase.setAttribute('onclick', `increaseScore(${i})`);

    const decrease = document.createElement("div");
    decrease.classList.add("decrease");
    decrease.setAttribute('onclick', `decreaseScore(${i})`);

    ///////////////////////////////////////////////////////////
    
    name.innerText = playersArr[i].name;

    country.innerText = playersArr[i].country;
    score.innerText = playersArr[i].score;
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
  }

}

function refreshArr () {
  
  playersList.innerHTML = "";  

  // sort the array on the basis of scores in descending order
  playersArr.sort((p1,p2) => p2.score - p1.score);

  for (let i=0; i<playersArr.length; i++) {
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

    let dateObject = new Date();
    let month = dateObject.toLocaleString("default", {month:"long"})
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    date.innerText = `${month} ${day}: ${year} ${time}`

    const country = document.createElement("span");
    country.classList.add("country");

    const score = document.createElement("span");
    score.classList.add("score");

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const remove = document.createElement("div");
    remove.classList.add("delete");
    remove.setAttribute('onclick', `deleteEntry(${i})`);

    const increase = document.createElement("div");
    increase.classList.add("increase");
    increase.setAttribute('onclick', `increaseScore(${i})`);

    const decrease = document.createElement("div");
    decrease.classList.add("decrease");
    decrease.setAttribute('onclick', `decreaseScore(${i})`);

    ///////////////////////////////////////////////////////////
    
    name.innerText = playersArr[i].name;

    country.innerText = playersArr[i].country;
    score.innerText = playersArr[i].score;
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
  }

};

function deleteEntry (index) {
  playersArr.splice(index,1);
  refreshArr();
};


function increaseScore (index) {
    playersArr[index].score = Number(playersArr[index].score) + 5;    
    refreshArr();
};


function decreaseScore (index) {
    playersArr[index].score -= 5;    
    refreshArr();
};
