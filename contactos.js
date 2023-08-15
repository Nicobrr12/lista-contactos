let listaDeContactos = [];


let lectorId = 1;


function agregarContacto(nombreCompleto) {
  let nuevoContacto = {
    
    id: lectorId,
    nombre: nombreCompleto 
  };
  
  listaDeContactos.push(nuevoContacto);
  lectorId++;
  console.log("Contacto agregado exitosamente!");
}


function borrarContactoPorId(id) {
  let indice = -1;
  for (var i = 0; i < listaDeContactos.length; i++) {
    if (listaDeContactos[i].id === id) {
      indice = i;
      break;
    }
  }

  if (indice !== -1) {
    console.log(`contacto ${listaDeContactos[indice].nombre} borrado exitosamente`);
    listaDeContactos.splice(indice, 1);
   
  } else {
    console.log("Contacto no encontrado en la lista.");
  }
}


agregarContacto("Luisiño perez");
agregarContacto("Sarita salabarrieta");
agregarContacto("Jesus Chacon");
agregarContacto("Pepito perez");

console.log("Lista antes de borrar:", listaDeContactos);

borrarContactoPorId(2);
borrarContactoPorId(4);


console.log("Lista después de borrar:", listaDeContactos);