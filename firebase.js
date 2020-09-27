// DOM references
const signupBtn = document.querySelector('.signupBtn');
const loginBtn = document.querySelector('.loginBtn');

signupBtn.addEventListener('click', signUp); 
loginBtn.addEventListener('click', logIn);


// sign up new user 
function signUp() {
const email = document.querySelector('.inpMail').value;
const password = document.querySelector('.inpPassword').value;


    firebase.auth().createUserWithEmailAndPassword(email, password)
}

// log in user
function logIn() {
    const email = document.querySelector('.inpMail').value;
    const password = document.querySelector('.inpPassword').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password);
  
};


// check state of user
firebase.auth().onAuthStateChanged(user => {
    if (user) {

      // User is signed in.
      console.log('you are logged in');
    //  Open main.html
      window.open("main.html","_self")
      
      // ...
    } else {
      // User is signed out.
      // ...
      console.log('user is not logged in');
    }
  });


