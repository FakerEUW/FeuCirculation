var e = document.getElementById("watchme");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "slidein";
function listener(id) {
  var rouge1 = document.getElementById(id);
  switch(e.type) {
    case "animationstart":
      rouge1.classList.add("etap1rouge");
      vert1.classList.add("etap1vert")
      break;
    case "animationend":
      l.innerHTML = "Fin : durée écoulée : " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "Nouvelle boucle démarrée à : " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}