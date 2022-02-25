


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function (){

      var inputKey = this.innerHTML;
      makeSound(inputKey);
      shine(inputKey);
  });
}

document.addEventListener("keypress",function(event) {
  makeSound(event.key);
  shine(event.key);
})



function makeSound(inputKey)
{
  switch (inputKey) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
    break;
    case "a":
      var sound = new Audio("tom-2.mp3");
      sound.play();
    break;
    case "s":
      var sound = new Audio("tom-3.mp3");
      sound.play();
    break;
    case "d":
      var sound = new Audio("tom-4.mp3");
      sound.play();
    break;
    case "j":
      var sound = new Audio("snare.mp3");
      sound.play();
    break;
    case "k":
      var sound = new Audio("crash.mp3");
      sound.play();
    break;
    case "l":
      var sound = new Audio("kick-bass.mp3");
      sound.play();
    break;
    default:
    break;
  }
}


function shine(inputKey){
  var some = document.querySelector("."+inputKey);
  some.classList.add("pressed");

  setTimeout(function() {some.classList.remove("pressed")},100);
}
