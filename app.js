//Init github

const github = new Github();

//Search input 

const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== '') {
    //make HTTP call 
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        //Show an alert that says users not found
      } else {
        //Show the profile
      }
      
    });
  } else {
    //Clear the profile
    
  }
})