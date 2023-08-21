let listaDeContactos = [];


let lectorId = 1;


function agregarContacto(nombreCompleto,apellido,telefono,ciudad,direccion) {
  let nuevoContacto = {
    
    id: lectorId,
    nombre: nombreCompleto,
    apellido: apellido,
    telefono: telefono,
    ubicacion : {
      ciudad: ciudad,
      direccion: direccion,
    }
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


function actualizarContacto(idContacto, nuevoNombre,nuevoApellido, nuevoTelefono, nuevaCiudad,nuevaDirecion) {
  for (let i = 0; i < listaDeContactos.length; i++) {
      if (listaDeContactos[i].id === idContacto) {
          if (nuevoNombre !== '') {
              listaDeContactos[i].nombre = nuevoNombre;
          }
          if (nuevoApellido !== ''){
            listaDeContactos[i].apellido = nuevoApellido;
          }
          if (nuevoTelefono !== '') {
              listaDeContactos[i].telefono = nuevoTelefono;
          }
          if (nuevaCiudad !== '') {
              listaDeContactos[i].ubicacion.ciudad = nuevaCiudad;
          }
          if (nuevaDirecion !== '') {
            listaDeContactos[i].ubicacion.direccion = nuevaDirecion;
        }
          
      }
  }
  
}

agregarContacto("Nicolas","pulido",3148566405,"facatativa-transversal 2 sur 1 a66")
agregarContacto("Luisiño","Rafael",3121728328,"Venezuela-caracas")
agregarContacto("Nicolas","pulido",3148566405,"facatativa","transversal 2 sur 1 a66")


console.log("Lista antes de borrar:", listaDeContactos);

borrarContactoPorId(2)
console.log("Lista después de borrar:", listaDeContactos);



actualizarContacto(1,"Felipe","gonzalo",312312312,"cartagena","transversal 1221")

console.log("Lista despues de actualizar ",listaDeContactos); 




