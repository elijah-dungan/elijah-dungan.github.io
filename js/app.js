/* ---------------------------------------------------Pre-load--------------------------------------------------- */
makeSticky(); // preloads function to prevent offset of Nav Bar.
animate(); // preloads function to prevent misfire of animation dependent on page4Offset.
window.onscroll = function() {makeSticky()}; // when the user scrolls the page, executes makeSticky. 
/* ---------------------------------------------------Pre-load--------------------------------------------------- */
/* -------------------------------------------------Declarations------------------------------------------------- */
var grabElement = document.getElementById('stickynav');
var sticky = grabElement.offsetTop; // Get the offset position of the navbar.
var grabList = document.getElementsByClassName('navListItem');
var transitionTime = '0.6s'; // sets transition time for CSS fade-in fade out animation
/* -------------------------------------------------Declarations------------------------------------------------- */
/* ----------------------------------------------------Nav Bar--------------------------------------------------- */
function makeSticky() { // makes navbar sticky upon scroll. Removes sticky when scroll is returned to beginning y position.
  var grabElement = document.getElementById('stickynav');
  var grabList = document.getElementsByClassName('navListItem');
  var grabHeader = document.getElementById('magic_header')
  if(window.pageYOffset > sticky) {
    grabElement.style.position = 'fixed';
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
    grabElement.style.transition = transitionTime;
    grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 0)';
    grabHeader.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'black';
    } 
  } else if(window.pageXOffset > sticky) {
      grabElement.style.position = 'fixed';
      grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
      grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
      for(var i = 0; i < grabList.length; i++) {
        grabList[i].style.color = 'white';
    }
  } else {
      grabElement.style.position = 'fixed';
      grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
      grabElement.style.transition = transitionTime;
      grabHeader.style.backgroundColor = 'rgb(151, 61, 96, 1)';
      grabHeader.style.transition = transitionTime;
      for(var i = 0; i < grabList.length; i++) {
        grabList[i].style.color = 'white';
      }
    }
}
function makeOpaque() { // makes navbar opaque, used with onmouseover.
  if (window.pageYOffset < sticky) {
  } else {
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0.9)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'black';
    }
  }
}
function makeTransparent() { // makes navbar transparent, used with onmouseout.
  if (window.pageYOffset > sticky) {
  } else {
    grabElement.style.backgroundColor = 'rgb(255, 255, 255, 0)';
    grabElement.style.transition = transitionTime;
    for(var i = 0; i < grabList.length; i++) {
      grabList[i].style.color = 'white';
    }
  }
}
/* ----------------------------------------------------Nav Bar--------------------------------------------------- */

function animate() {
/* --------------------------------------------------Sub Header-------------------------------------------------- */
  $(window).scroll(function() { // gets scroll position and multiplies by number to increase/decrease speed, adds this as px to CSS property.
    var scroll_position = $(window).scrollTop() * 0.50; // change rate of speed here.
    $('body').css({
      'background-position-y' : - scroll_position + 'px',
    })
  })
/* --------------------------------------------------Sub Header-------------------------------------------------- */
/* -----------------------------------------------------Logo----------------------------------------------------- */
  $(window).scroll(function() { // gets scroll position and multiplies by number to fade, changes alpha to CSS property.
    var scroll_position = $(window).scrollTop() / -450; // change rate of fade here.
    $('#logo').css({
      'opacity' : ++ scroll_position, 
      'filter' : ' alpha(opacity=' + ++ scroll_position * 100 + ')'
    })
  })
/* -----------------------------------------------------Logo----------------------------------------------------- */
/* ----------------------------------------------------header---------------------------------------------------- 
  $(window).scroll(function() { // gets scroll position and multiplies by number to fade, changes alpha to CSS property.
    var scroll_position = $(window).scrollTop() / -75; // change rate of fade here.
    $('#magic_header').css({
      'background-color' : 'rgba(151,61,96,' + ++ scroll_position + ')'
    })
  })
 ----------------------------------------------------header---------------------------------------------------- */
}