//
//GRID SYSTEM
//
var findLocked = document.querySelectorAll('.locked');
var findUnlocked = document.querySelectorAll('.unlocked');
var findInprogress = document.querySelectorAll('.inProgress');

for (var a = 0; a < findLocked.length; a++) {
    findLocked[a].addEventListener('click', function() {
        this.classList.toggle('unlocked');
    }, false);
}

for (var b = 0; b < findUnlocked.length; b++) {

    findUnlocked[b].addEventListener('click', function() {
        this.classList.toggle('inProgress');
    }, false);
}
for (var c = 0; c < findInprogress.length; c++) {

    findInprogress[c].addEventListener('click', function() {
        this.classList.toggle('finished');
    }, false);
}

//
//FORMS
//
var zoneOut = document.querySelectorAll('#zoneOut');

//login
var loginMail = document.querySelectorAll('#loginMail');
var logMeIn = document.querySelectorAll('#logMeIn');
var loginNext = document.querySelectorAll('#checkLogin');
//register
var registerMe = document.querySelectorAll('#registerMe');
var registerNext = document.querySelectorAll('#registerForm>#registerMail>input:nth-of-type(2)');

//----LOGINFORM
//----
// Exitform
for (var a = 0; a < zoneOut.length; a++) {
    zoneOut[a].addEventListener('click', function() {
        document.querySelector('#zoneOut').className = ('hidden');
        document.querySelector('#loginForm').className = ('hidden');
        document.querySelector('#registerForm').className = ('hidden');
    }, false);
}

//showhide//
for (var a = 0; a < logMeIn.length; a++) {
    logMeIn[a].addEventListener('click', function() {
        document.querySelector('#loginForm').classList.toggle('hidden');
        document.querySelector('#registerForm').classList.add('hidden');
        document.querySelector('#zoneOut').classList.toggle('hidden');

    }, false);
}

//checkmail
for (var a = 0; a < loginNext.length; a++) {
    loginNext[a].addEventListener('click', function() {
        document.querySelector('#enterPassword').classList.remove('hidden');
        document.querySelector('#checkLogin').classList.add('hidden');
    }, false);
}

//----REGISTERFORM
//----

//showhide//
for (var a = 0; a < registerMe.length; a++) {
    registerMe[a].addEventListener('click', function() {
        document.querySelector('#registerForm').classList.toggle('hidden');
        document.querySelector('#loginForm').classList.add('hidden');
        document.querySelector('#zoneOut').classList.toggle('hidden');
    }, false);
}

//
//LOVE A STORY
//

var LoveStoryClick = document.querySelectorAll('#loveStory');

for (var a = 0; a < LoveStoryClick.length; a++) {
    LoveStoryClick[a].addEventListener('click', function() {
        document.querySelector('#fullHeart').classList.toggle('hidden');
        console.log('hi');
    }, false);
}
//
//FILTERBUTTON
//

//openclose
var filterInteract = document.querySelectorAll('#filterIMG');
var filterZoneout = document.querySelectorAll('#filterZoneout');


for (var a = 0; a < filterInteract.length; a++) {
    filterInteract[a].addEventListener('click', function() {
        document.querySelector('#filterTab').classList.toggle('filterTabMinimized');
        document.querySelector('#filterZoneout').classList.toggle('hidden');


    }, false);
}
for (var a = 0; a < filterZoneout.length; a++) {
    filterZoneout[a].addEventListener('click', function() {
        document.querySelector('#filterZoneout').className = ('hidden');
        document.querySelector('#filterTab').className = ('filterTabMinimized');


    }, false);
}
//slider W3schools
var slider = document.getElementById("myRange");
var outputSlider = document.getElementById("sliderOne");
outputSlider.innerHTML = slider.value + (' seconds');

slider.oninput = function() {
    if (outputSlider.innerHTML = this.value >= 500) {
        outputSlider.innerHTML = this.value + ('+ seconds');
    } else {
        outputSlider.innerHTML = this.value + (' seconds');
    }
};

//Filter Buttons
var filterApply = document.querySelectorAll('#filterButtonApply');
var filterCancel = document.querySelectorAll('#filterButtonCancel');

for (var a = 0; a < filterApply.length; a++) {
    filterApply[a].addEventListener('click', function() {
        document.querySelector('#filterTab').classList.toggle('filterTabMinimized');
        document.querySelector('#filterZoneout').className = ('hidden');

    }, false);
}
for (var a = 0; a < filterCancel.length; a++) {
    filterCancel[a].addEventListener('click', function() {
        document.querySelector('#filterTab').classList.toggle('filterTabMinimized');
        document.querySelector('#filterZoneout').className = ('hidden');

    }, false);
}




// //slider  MET querySelector, werkte niet ;()
// var slider = document.querySelectorAll('#myRange');
// var outputSlider = document.querySelectorAll('#sliderOne');
// outputSlider.innerHTML = slider.value + (' seconds'); // Display the default slider value
//
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     if (outputSlider.innerHTML = this.value >= 500){
//         outputSlider.innerHTML = this.value + ('+ seconds');
//     } else {
//         outputSlider.innerHTML = this.value + (' seconds');
//     }
//
// };




//THE FOLLOWING CODE IS USED FOR THE HAIKU CRATCHCARD
//WITH MASSIVE HELP FROM: https://codepen.io/dudleystorey/pen/yJQxLX
