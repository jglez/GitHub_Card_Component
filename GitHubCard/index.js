import axios from 'axios';

/*STEP 1: using axios, send a GET request to the following URL
  (replacing the placeholder with your Github name):
  https://api.github.com/users/<your name> */

const scaffold = document.querySelector('.cards');

axios
.get('https://api.github.com/users/jglez')
.then(res => {
   /* STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards */
  const newCard = gitHubCardMaker(res.data);

  scaffold.appendChild(newCard);
})
.catch(err => {
  console.log('no bueno')
})


/* STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    // Done.

    Skip to STEP 3. */

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(link => {
  axios
  .get('https://api.github.com/users/' + link)
  .then(res => {
    const newCard = gitHubCardMaker(res.data);
    scaffold.appendChild(newCard);
  });
});

/*STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> ---------------------------------------------------------------> DONE
      <img src={image url of user} /> ------------------------------------------------> DONE
      <div class="card-info"> --------------------------------------------------------> DONE
        <h3 class="name">{users name}</h3> -------------------------------------------> DONE
        <p class="username">{users user name}</p> ------------------------------------> DONE
        <p>Location: {users location}</p> --------------------------------------------> DONE
        <p>Profile: ------------------------------------------------------------------> DONE
          <a href={address to users github page}>{address to users github page}</a> --> DONE
        </p>
        <p>Followers: {users followers count}</p> ------------------------------------> DONE
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div> */

function gitHubCardMaker(obj) {
  debugger;
  const cardDiv = document.createElement('div'); 
  cardDiv.classList.add('card');

  const image = document.createElement('img');
  image.src = obj.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = obj.name;

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = obj.login;

  const location = document.createElement('p');
  location.textContent = obj.location;

  const profile = document.createElement('p');
  profile.textContent = 'Profile: ';

  const gitHubURL = document.createElement('a');
  gitHubURL.href = obj.html_url;
  gitHubURL.textContent = 'GitHub';
  
  const followers = document.createElement('p');
  followers.textContent = 'Followers: ' + obj.followers;

  const following = document.createElement('p');
  following.textContent = 'Following: ' + obj.following;

  const bio = document.createElement('p');
  bio.textContent = 'Bio: ' + obj.bio;

//  Append everything with the correct structure
  cardDiv.appendChild(image);
  cardDiv.appendChild(cardInfo);

  cardInfo.appendChild(h3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(gitHubURL);

  return cardDiv
}

/*  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
