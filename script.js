function check_navbar(){
    let element = document.querySelector('.topnav');
    let style = getComputedStyle(element);
    let display = style.display   
    if(display == 'block'){
        document.getElementById("myLinks").style.display = 'none'
    }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}
document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('mobile');
    const box2 = document.getElementById('myLinks');
    if (!box.contains(event.target)) {
      box2.style.display = 'none';
    }
})


const buttons = document.getElementsByClassName("klik");
const result = document.getElementById("modal-image");

const tekst = e => {
    document.getElementById("myModal").style.display = 'block';
    var link = e.target.src
    result.setAttribute('src',link)
    console.log(link);
}

for (let przedmiot of buttons) {
    przedmiot.addEventListener("click", tekst);
  }
function zamknij_modal(){
    document.getElementById("myModal").style.display = 'none';
}
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}