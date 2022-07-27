//numero mayor de un array
let Numeros_array = [1,5,8,9,6,7,4,2,3]
let Numero_mayor = 0
for( let i=0;i<Numeros_array.length; i++){
  if (Numeros_array[i]>Numero_mayor) {
    Numero_mayor=Numeros_array[i]
  }
}
console.log("El Número mayor es: ",Numero_mayor)