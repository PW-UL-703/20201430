//1. obtener cabecera
//raiza de  arbol
let cabecera = document.head
console.log(cabecera)

//2. obtener body
let body = document.body
console.log(body)

//3.parte de body 1 elemento
let lpantiguo = document.getElementById("antiguo")
console.log(lpantiguo)

let nodos = lpantiguo.childNodes
for(let i = 0; i<nodos.length; i++){
    console.log(nodos[i])
}

let arr_nodos = []
for(let i = 0; i<nodos.length; i++){
    if(nodos[i].nodeType == document.ELEMENT_NODE){
        arr_nodos.push(nodos[i].textContent)

    }
}
document.getElementById("rpta1").innerHTML = arr_nodos

//caso4: los mismo para los leng modernos

let lpmodernos = document.getElementById("moderno")
nodos = lpmodernos.childNodes
let arr_nodos2 = []
for(let i = 0; i<nodos.length; i++){
    if(nodos[i].nodeType == document.ELEMENT_NODE){
        arr_nodos2.push(nodos[i].textContent)

    }
}
document.getElementById("rpta2").innerHTML = arr_nodos2

//5. concatenar arreglos
let arr_rpta = arr_nodos.concat(arr_nodos2)
document.getElementById("rpta2").innerHTML = arr_rpta

//6. arreglo a cadena y mayuscula
let cadena = arr_nodos.join('**').toUpperCase()
document.getElementById("rpta3").innerHTML = cadena

//7.ubicar elemento en arreglo
let posicion = arr_nodos2.indexOf("kotlin")
document.getElementById("rpta2").innerHTML = posicion

//8. insertar elementod en el arreglo
arr_nodos2.splice(1,0, "X", "Y", "Z")
document.getElementById("rpta8").innerHTML = arr_nodos2


arr_nodos2.splice(5,0, "X", "Y", "Z")
document.getElementById("rpta8").innerHTML = arr_nodos2

//9. borrar
arr_nodos2.splice(1,3)
document.getElementById("rpta9").innerHTML = arr_nodos2

//10. Insertar y borrar
arr_nodos2.splice(4,3, "Peipito", "Luchito")
document.getElementById("rpta10").innerHTML = arr_nodos2

//11: retirar el ultimo elemento
document.getElementById("rpta11").innerHTML = arr_nodos2.pop()


//12: retirar el ultimo elemento
document.getElementById("rpta12").innerHTML = arr_nodos2.shift()

//13: Agregar elemento al final
arr_nodos2.push("Pokemon")
document.getElementById("rpta13").innerHTML = arr_nodos2
//otra formar
arr_nodos2[arr_nodos2.length] = "Digimon"
document.getElementById("rpta13").innerHTML = arr_nodos2

//14. agregar elemento al inicio
arr_nodos2.unshift("Nada")
document.getElementById("rpta14").innerHTML = arr_nodos2

//15. odenar
arr_nodos2.sort()
document.getElementById("rpta15").innerHTML = arr_nodos2

//16.invertir
arr_nodos2.reverse()
document.getElementById("rpta16").innerHTML = arr_nodos2

//17. crear rama html
let rama = []
rama.push ("<ol>")
rama.push ("<li>")
rama.push ("digan algo")
rama.push ("</li>")

rama.push ("<li>")
rama.push ("las fijas")
rama.push ("</li>")
rama.push ("</ol>")

let cadena2 = rama.join('')
document.getElementById("rpta17").innerHTML = cadena2

function mostrarRespuesta() {
    // Realiza todas las operaciones aquí
    let lpmodernos = document.getElementById("moderno")
nodos = lpmodernos.childNodes
let arr_nodos2 = []
for(let i = 0; i<nodos.length; i++){
    if(nodos[i].nodeType == document.ELEMENT_NODE){
        arr_nodos2.push(nodos[i].textContent)

    }
}


    document.getElementById("respuesta").innerHTML = arr_nodos2;
}


