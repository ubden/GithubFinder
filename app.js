//Init github

const github = new Github();

const ui = new UI();

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
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show the profile
        console.log(data);
        console.log(data.repos);
        ui.showProfile(data.profile);
        //Show Repos
        ui.showRepos(data.repos);
      }
      
    });
  } else {
    ui.clearProfile();
    
  }
})