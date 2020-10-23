function pokemon(nombre, id, tipo, habilidad, tipoEnemigo) {
    this.nombrePokemon = nombre;
    this.tipoPokemon = tipo.split(`, `);
    this.habilidadPokemon = habilidad;
    this.tipoEnemigoPokemon = tipoEnemigo.split(`, `);

    let = id;



    this.ataque = function () {
        for (let prueba2 = 0; prueba2 < this.tipoEnemigoPokemon.length; prueba2++){
            switch (this.tipoEnemigoPokemon[prueba2]) {
                default:
                    console.log(`${this.nombrePokemon} usó ${this.habilidadPokemon}. No es muy efectivo...`)
                    break;
            }
        }
    }

    
    let listaTipo = [`normal`, `fuego`, `agua`, `planta`, `electrico`, `hielo`, `lucha`, `veneno`, `tierra`, `volador`, `psiquico`, `bicho`, `roca`, `fantasma`, `dragon`, `siniestro`, `acero`, `hada`]

    this.saberDebilidad = function(){
        for (let prueba = 0; prueba < this.tipoPokemon.length; prueba++){
            switch (this.tipoPokemon[prueba]) {
                case `normal`: 
                    let listaDebilidadesNormal = []
                    let pushNormal = listaDebilidadesNormal.push(listaTipo[6])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesNormal.join(", ")}`);
                    break;
                case `fuego`: 
                    let listaDebilidadesFuego = []
                    let pushFuego = listaDebilidadesFuego.push(listaTipo[2],listaTipo[8], listaTipo[12])
                    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesFuego.join(", ")}`);

                    break;
                    
                case `agua`: 
                    let listaDebilidadesAgua = []
                    let pushAgua = listaDebilidadesAgua.push(listaTipo[3],listaTipo[4])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesAgua.join(", ")}`);
    
                    break;
                case `planta`: 
                    let listaDebilidadesPlanta = []
                    let pushPlanta = listaDebilidadesPlanta.push(listaTipo[1],listaTipo[5], listaTipo[7], listaTipo[9], listaTipo[11])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesPlanta.join(", ")}`);
    
                    break;
                case `electrico`: 
                    let listaDebilidadesElectrico = []
                    let pushElectrico = listaDebilidadesElectrico.push(listaTipo[8])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesElectrico.join(", ")}`);
    
                    break;
                case `hielo`: 
                    let listaDebilidadesHielo = []
                    let pushHielo = listaDebilidadesHielo.push(listaTipo[1],listaTipo[6], listaTipo[12], listaTipo[16])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesHielo.join(", ")}`);
    
                    break;
                case `lucha`: 
                    let listaDebilidadesLucha = []
                    let pushLucha = listaDebilidadesLucha.push(listaTipo[9],listaTipo[10], listaTipo[17])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesLucha.join(", ")}`);
    
                    break;
                case `veneno`: 
                    let listaDebilidadesVeneno = []
                    let pushVeneno = listaDebilidadesVeneno.push(listaTipo[8],listaTipo[10],)
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesVeneno.join(", ")}`);
    
                    break;
                case `tierra`: 
                    let listaDebilidadesTierra = []
                    let pushTierra = listaDebilidadesTierra.push(listaTipo[2],listaTipo[3], listaTipo[5])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesTierra.join(", ")}`);
    
                    break;
                case `volador`: 
                    let listaDebilidadesVolador = []
                    let pushVolador = listaDebilidadesVolador.push(listaTipo[4],listaTipo[5], listaTipo[12])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesVolador.join(", ")}`);
    
                    break;
                case `psiquico`: 
                    let listaDebilidadesPsiquico = []
                    let pushPsiquico = listaDebilidadesPsiquico.push(listaTipo[11],listaTipo[13], listaTipo[15])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesPsiquico.join(", ")}`);
    
                    break;
                case `bicho`: 
                    let listaDebilidadesBicho = []
                    let pushBicho = listaDebilidadesBicho.push(listaTipo[9],listaTipo[12], listaTipo[1])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesBicho.join(", ")}`);
    
                    break;
                case `roca`: 
                    let listaDebilidadesRoca = []
                    let pushRoca = listaDebilidadesRoca.push(listaTipo[2],listaTipo[3], listaTipo[6], listaTipo[8], listaTipo[16])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesRoca.join(", ")}`);
    
                    break;
                case `fantasma`: 
                    let listaDebilidadesFantasma = []
                    let pushFantasma = listaDebilidadesFantasma.push(listaTipo[13],listaTipo[15])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesFantasma.join(", ")}`);
    
                    break;
                case `dragon`: 
                    let listaDebilidadesDragon = []
                    let pushDragon = listaDebilidadesDragon.push(listaTipo[5],listaTipo[14], listaTipo[17])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesDragon.join(", ")}`);
    
                    break;
                case `siniestro`: 
                    let listaDebilidadesSiniestro = []
                    let pushSiniestro = listaDebilidadesSiniestro.push(listaTipo[6],listaTipo[11], listaTipo[17])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesSiniestro.join(", ")}`);
    
                    break;
                case `acero`: 
                    let listaDebilidadesAcero = []
                    let pushAcero = listaDebilidadesAcero.push(listaTipo[1],listaTipo[6], listaTipo[8])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesAcero.join(", ")}`);
    
                    break;
                case `hada`: 
                    let listaDebilidadesHada = []
                    let pushHada = listaDebilidadesHada.push(listaTipo[7],listaTipo[16])
    
                    console.log(`${this.nombrePokemon} es débil a ${listaDebilidadesHada.join(", ")}`);
    
                    break;
            
                default:
                    console.log("este tipo no está registrado en la podekex, no buguees el sistema")
                    break;
            }
        }
    }
    

}

let nuevoPokemon = new pokemon("Charizard", 006, "fuego, volador", "Mar Llamas", "tierra, roca")

console.log(nuevoPokemon);
console.log(nuevoPokemon.saberDebilidad());
console.log(nuevoPokemon.ataque());