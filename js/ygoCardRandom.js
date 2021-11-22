const cardFlipToggle = document.querySelector(".cardContainer");

const btn = document.querySelector('.button');
const btn2 = document.querySelector('.button2');

btn.addEventListener("click", function(){
  cardFlipToggle.classList.toggle("flip");
});

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    document.querySelector(".cardInfo").innerHTML = myObj.name + "<br></br>" + myObj.desc;

    document.querySelector(".cardFront").style.background = "url(https://storage.googleapis.com/ygoprodeck.com/pics/" + myObj.id + ".jpg)";

    document.querySelector(".cardFront").style.backgroundSize = "328px 480px";

  }
};

xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/randomcard.php", true);
xhttp.send();

btn2.addEventListener("click", function(){
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);

      document.querySelector(".cardInfo").innerHTML = myObj.name + "<br></br>" + myObj.desc;

      document.querySelector(".cardFront").style.background = "url(https://storage.googleapis.com/ygoprodeck.com/pics/" + myObj.id + ".jpg)";

      document.querySelector(".cardFront").style.backgroundSize = "328px 480px";

    }
  }

  xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/randomcard.php", true);
  xhttp.send();

});
