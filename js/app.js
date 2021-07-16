//variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const Transmisión = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datosBusquedas = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmisión: '',
  color:''
}

//introducir filtrado
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

document.addEventListener('DOMContentLoaded', () =>{
  mostrarAutos(autos) //mostrar descripcion de los autos

  //generar e introucir año
  llenarSelect()
});

//btenindo eventos de inputs

marca.addEventListener('change', (e)=>{
  datosBusquedas.marca = e.target.value

  filtrarAutos()
});
year.addEventListener('change', (e)=>{
  datosBusquedas.year = e.target.value

  filtrarAutos()

});
minimo.addEventListener('change', (e)=>{
  datosBusquedas.minimo = e.target.value

  filtrarAutos()

});
maximo.addEventListener('change', (e)=>{
  datosBusquedas.maximo = e.target.value

  filtrarAutos()

});
puertas.addEventListener('change', (e)=>{
  datosBusquedas.puertas = parseInt(e.target.value
)
  filtrarAutos()

});
transmision.addEventListener('change', (e)=>{
  datosBusquedas.transmision = e.target.value

  filtrarAutos()

});
color.addEventListener('change', (e)=>{
  datosBusquedas.color = e.target.value

  filtrarAutos()

  console.log(datosBusquedas)
});


//funciones
function mostrarAutos (autos){
  limpiarHTML() //limpia el resultado

  autos.forEach( (auto)=>{
    const {marca,modelo,year,puertas,transmision,color,precio} = auto;
    const autoHTML = document.createElement('p')

    autoHTML.textContent = `
      Marca: ${marca} - Modelo: ${modelo} - ${year} - Puertas: ${puertas} - Transmision: ${transmision} - Color: ${color} - Precio: ${precio}
    `;

    resultado.appendChild(autoHTML);


  })
}

//mostrar cuando no hay resultado
function noResultado(){

  limpiarHTML();

  const noResultado = document.createElement('div');
  noResultado.classList.add('error','alerta');
  noResultado.textContent ='Resultado no encontrado '
  resultado.appendChild(noResultado)

}


//limpiar html
function limpiarHTML (){
  while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
  }
}

//ingresa los años de los autos
function llenarSelect(){
  for( let i = max; i >= min; i-- ){
    const opcion = document.createElement('option')
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion)
  }
}

function filtrarAutos (){
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);


  if(resultado.length){
    mostrarAutos(resultado)
    console.log(resultado)
  }else{
    noResultado();
  }
} 

function filtrarMarca (auto){
  const {marca} = datosBusquedas;
  if(marca){
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear (auto){
  const {year} = datosBusquedas;
  if(year){
    return auto.year === parseInt(year);
  }
  return auto;
}
function filtrarMinimo (auto){
  const {minimo} = datosBusquedas;

  if(minimo){
    return auto.precio >= minimo;
  }
  return auto;
}

function filtrarMaximo (auto){
  const {maximo} = datosBusquedas;
  if(maximo){
    return auto.precio <= maximo;
  }
  return auto;
}

function filtrarPuertas (auto){
  const {puertas} = datosBusquedas;
  console.log(typeof puertas)
  if(puertas){
    return auto.puertas === puertas;
  }
  return auto;

}

function filtrarTransmision (auto){
  const {transmision} = datosBusquedas;
  if(transmision){
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor (auto){
  const {color} = datosBusquedas;
  if(color){
    return auto.color === color;
  }
  return auto;
}