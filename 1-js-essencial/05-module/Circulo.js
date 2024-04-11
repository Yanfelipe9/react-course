import { numeroAleatorio } from "./numeroAleatorio.js"

function area(raio){
  return Math.PI * raio * raio
}

function circunferencia(raio){
  return Math.PI * 2 * raio
}

function aleatorio(){
  return numeroAleatorio()
}

const Circulo = {
  area,
  circunferencia,
  aleatorio
}

export {Circulo};