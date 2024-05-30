const cardFlipToggle = document.querySelector(".cardContainer");

const btn = document.querySelector('.button');
const btn2 = document.querySelector('.button2');

btn.addEventListener("click", function(){
  cardFlipToggle.classList.toggle("flip");
});

var xhttp = new XMLHttpRequest();

/* Randomizes four scapeGoat token images. */
var scapeGoat = function(){
  switch (Math.floor(Math.random() * 4 + 1)) {
    case 1:
      return "assets/sheepBlue.jpg";
      break;
    case 2:
      return "assets/sheepRed.jpg";
      break;
    case 3:
      return "assets/sheepOrange.jpg";
      break;
    case 4:
      return "assets/sheepYellow.jpg";
      break;
    default:
      break;
  }
};

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    document.querySelector(".cardInfo").innerHTML = myObj.name + "<br></br>" + myObj.type + "<br></br>" + myObj.race + "<br></br>" + myObj.atk + "/" + myObj.def + "<br></br>" + myObj.desc;

    document.querySelector(".cardFront").style.background = "url('" + scapeGoat() + "')";

    document.querySelector(".cardFront").style.backgroundSize = "328px 480px";

  }
};

xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/randomcard.php", true);
xhttp.send();

btn2.addEventListener("click", function(){
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);

      document.querySelector(".cardInfo").innerHTML = myObj.name + "<br></br>" + myObj.type + "<br></br>" + myObj.race + "<br></br>" + myObj.atk + "/" + myObj.def + "<br></br>" + myObj.desc;

      document.querySelector(".cardFront").style.background = "url('" + scapeGoat() + "')";

      document.querySelector(".cardFront").style.backgroundSize = "328px 480px";

    }
  }

  xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/randomcard.php", true);
  xhttp.send();

});
