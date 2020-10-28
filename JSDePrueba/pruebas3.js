
function CasaHogwarts() {
  this.varita = [];
  this.persona = []
  this.linaje = [];
  this.reliquia = [];

  this.puntosG = [];
  this.puntosR = [];
  this.puntosS = [];
  this.puntosH = [];



  this.preguntarVarita = function () {

    alert("¿Que varita te habrá elegido?");

    let respuestaVarita = Math.floor(Math.random() * (4 - 1)) + 1;

    if (respuestaVarita == 1) {

        this.puntosG.push("10 puntos");
        this.varita.push("Varita de fenix");
      alert("Varita numero " + respuestaVarita + ", Varita de fenix");
      console.log(this.puntosG)

    } else if (respuestaVarita == 2) {
        this.puntosR.push("10 puntos");
        this.varita.push("Varita de dragon");
      alert("Varita numero " + respuestaVarita + ", Varita de dragon");
      console.log(this.puntosR)

    } else if (respuestaVarita == 3) {
        this.puntosH.push("10 puntos");
        this.varita.push("Varita de unicornio");
      alert("Varita numero " + respuestaVarita + ", Varita de unicornio");
      console.log(this.puntosH)

    } else if (respuestaVarita == 4) {
        this.puntosS.push("10 puntos");
        this.varita.push("Varita de sauco");
      alert("Varita numero " + respuestaVarita + ", Varita de sauco");
      console.log(this.puntosS)
    }
  };

  this.preguntarPersona = function () {

    let respuestaPersona = prompt("De las siguientes cualidades: valentia, sabiduria, ambicion, honestidad, ¿Cuál te representa más?:");
    // let respuestaPersona = "ambicion";

    if (respuestaPersona == "valentia") {
        this.puntosG.push("10 puntos");
      alert("10 puntos para Gryffindor");
        console.log(this.puntosG)

    } else if (respuestaPersona == "sabiduria") {
        this.puntosR.push("10 puntos");
      alert("10 puntos para Ravenclaw");
        console.log(this.puntosR)

    } else if (respuestaPersona == "ambicion") {
        this.puntosS.push("10 puntos");
      alert("10 puntos para Slytherin");
        console.log(this.puntosS)

    } else if (respuestaPersona == "honestidad") {
        this.puntosH.push("10 puntos");
      alert("10 puntos para Hufflepuff");
        console.log(this.puntosH)

    } else {
      alert("Solo se admiten las cualidades mencionadas: valentia, sabiduria, ambicion, honestidad");
    }
  };

  this.preguntarLinaje = function () {

    let respuestaLinaje = prompt("¿Cuál es tu linaje? padres magos, padres muggles, madre muggle y padre mago o madre bruja y padre muggle");

    if (respuestaLinaje == "padres magos") {
        this.puntosG.push("10 puntos");
      alert("Eres 100% magico");
        console.log(this.puntosG)

    } else if (respuestaLinaje == "padres muggles") {
        this.puntosR.push("10 puntos");
      alert("Eres mestizo");
      console.log(this.puntosR)

    } else if (respuestaLinaje == "madre muggle y padre mago") {
        this.puntosH.push("10 puntos");
      alert("Eres mestizo");
      console.log(this.puntosH)

    } else if (respuestaLinaje == "madre bruja y padre muggle") {
        this.puntosS.push("10 puntos");
      alert("Eres mestizo");
      console.log(this.puntosS)

    } else {
      alert("¡Cuentanos si son magos o muggles!");
    }
  };

  this.elijeReliquia = function () {
    var respuestaReliquia = prompt("¿Que prefieres? Espada, Copa, Diadema, Guardapelo:");

    switch (respuestaReliquia) {
      case "espada":
        alert("Has elegido la espada de Gryffindor");
        this.puntosG.push("10 puntos");
        console.log(this.puntosG)
        break;
      case "diadema":
        alert("Has elegido la diadema de Ravenclaw");
        this.puntosR.push("10 puntos");
        console.log(this.puntosR)
        break;
      case "copa":
        alert("Has elegido la copa de Hufflepuff");
        this.puntosH.push("10 puntos");
        console.log(this.puntosH)
        break;
      case "guardapelo":
        alert("Has elegido el guardapelo de Slytherin");
        this.puntosS.push("10 puntos");
        console.log(this.puntosS)
        break;
      default:
        alert("Debes elegir entre las opciones que te brindamos");
        break;
    }
  };

  this.saberCasa = function(){
    while (this.puntosG.length >= 2) {
        alert("¡Felicidades! Perteneces a Gryffindor");
        break;
      }
      while (this.puntosR.length >= 2) {
        alert("¡Felicidades! Perteneces a Ravenclaw");
        break;
      }
      while (this.puntosH.length >= 2) {
        alert("¡Felicidades! Perteneces a Hufflepuff");
        break;
      }
      while (this.puntosS.length >= 2) {
        alert("¡Felicidades! Perteneces a Slytherin");
        break;
      }
  }
  console.log(this.puntosR)
  console.log(this.puntosG)
  console.log(this.puntosH)
  console.log(this.puntosS)
}


let prueba = new CasaHogwarts();
prueba.preguntarVarita();
prueba.preguntarPersona();
prueba.preguntarLinaje();
prueba.elijeReliquia();
prueba.saberCasa();