var minutes = 25 ;
var secondes = "00" ; 

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template () {

    document.getElementById("minutes").innerHTML = minutes ; 
    document.getElementById("secondes").innerHTML = secondes ; 
    
}

function start () {

        click.play(); 

        minutes = 00 ; 
        secondes = 09 ; 

        document.getElementById("minutes").innerHTML = minutes ; 
        document.getElementById("secondes").innerHTML = secondes ; 

        var minutes_interval = setInterval(minutesTimer, 60000);
        var secondes_interval = setInterval(secondesTimer, 1000);

        function minutesTimer() {
            minutes = minutes - 1 ;
            document.getElementById("minutes").innerHTML = minutes ; 
        }
        function secondesTimer() {
            secondes = secondes - 1 ;
            document.getElementById("secondes").innerHTML = secondes ; 

            if ( secondes <= 0){

               

                if(minutes <= 0 ){
                    
                    clearInterval(minutes_interval);
                    clearInterval(secondes_interval);

                    document.getElementById("done").innerHTML = "DECOMPTE TERMINER";
                    document.getElementById("done").classList.add("show_message");
                    bell.play();
                }

                secondes = 60 ;  
            }


        }
}

/*TODO LIST FUNCTION */

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {

   
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  document.getElementById("change").innerText = inputValue;

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}