// toggle class and show subjects

const emneA = document.getElementsByClassName('emneA');
const emneB = document.getElementsByClassName('emneB');
const emneC = document.getElementsByClassName('emneC');

document.querySelector('.kategoriEn').onclick = () => {
        for(i = 0; i < emneA.length; i++)
        emneA[i].classList.toggle('visEmne');
};

document.querySelector('.kategoriTo').onclick = () => {
        for(i = 0; i < emneB.length; i++)
        emneB[i].classList.toggle('visEmne');
};

document.querySelector('.kategoriTre').onclick = () => {
        for(i = 0; i < emneC.length; i++)
        emneC[i].classList.toggle('visEmne');
};




// log out user 

function logOut() {
    firebase.auth().signOut();
    console.log('user logged out'); 
    window.open('index.html', 'self');
}

const logOutBtn = document.querySelector('.logOut');
logOutBtn.addEventListener('click', logOut);


