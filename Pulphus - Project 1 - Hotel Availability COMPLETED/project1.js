function Hotel(name, rooms){
  this.name=name;
  this.rooms=rooms;
};

var hotel1 = new Hotel('Hyatt', 50);
var hotel2 = new Hotel('Lotte', 50);
var hotel3 = new Hotel('Sheraton', 50);
var hotel4=  new Hotel('Westin', 50);

var bookedHotel1=0;
var bookedHotel2=0;
var bookedHotel3=0;
var bookedHotel4=0;

for (i=1; i<11; i++){
  var randomNum = Math.floor((Math.random()*4)+1);
  console.log(randomNum);
  if(randomNum==1){
    bookedHotel1++;
  }
  else if (randomNum==2){
    bookedHotel2++;
  }
  else if (randomNum==3){
    bookedHotel3++;
  }
  else {
    bookedHotel4++;
  }
}

var available1 = hotel1.rooms-bookedHotel1;
var available2 = hotel2.rooms-bookedHotel2;
var available3 = hotel3.rooms-bookedHotel3;
var available4 = hotel4.rooms-bookedHotel4;

var a = document.createElement("IMG"),
    b = document.createElement("IMG");
    c = document.createElement("IMG");
    d = document.createElement("IMG");

    a.setAttribute("src", "images/hyatt.jpg");
    b.setAttribute("src", "images/lotte.jpg");
    c.setAttribute("src", "images/sheraton.jpg");
    d.setAttribute("src", "images/westin.jpg");


document.getElementById('hyaHotel').innerHTML = "The name of the Hotel is: " + hotel1.name + "<br/>The total amount of rooms is: " + hotel1.rooms + "<br/>The number of booked rooms is: " + bookedHotel1 + "<br/>The number of available rooms is: " + available1 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>' + '<br/>';
document.getElementById('hyaHotel').appendChild(a);
var button = document.createElement("button");
button.innerHTML = "Do Something";

document.getElementById('lotHotel').innerHTML= "The name of the Hotel is: " + hotel2.name + "<br/>The total amount of rooms is: " + hotel2.rooms + "<br/>The number of booked rooms is: " + bookedHotel2 + "<br/>The number of available rooms is: " + available2 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('lotHotel').appendChild(b);

document.getElementById('sheHotel').innerHTML= "The name of the Hotel is: " + hotel3.name + "<br/>The total amount of rooms is: " + hotel3.rooms + "<br/>The number of booked rooms is: " + bookedHotel3 + "<br/>The number of available rooms is: " + available3 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('sheHotel').appendChild(c);

document.getElementById('wesHotel').innerHTML= "The name of the Hotel is: " + hotel4.name + "<br/>The total amount of rooms is: " + hotel4.rooms + "<br/>The number of booked rooms is: " + bookedHotel4 + "<br/>The number of available rooms is: " + available4 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('wesHotel').appendChild(d);

// POP-UP //

var msg= '<div id="msgNote"><div><a id="close" href="#">X<h3>Welcome, 반갑습니다 </h3></a>';
    msg+= '<br/> <button>All Hotels now 1 day FREE of fees~!!</button></div>';



var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;

document.body.appendChild(elNote);

function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ----------------------------------------------------//

// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

btn2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "block";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

btn3.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "block";
    modal4.style.display = "none";
}

btn4.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span3.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

span4.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}
