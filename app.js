//Imprime un mensaje de bienvenida a la consola
console.log("Sistema EBAC de Registro de Alumnos!");
console.log("              ");

// Se define un arreglo de registro con datos de alumnos en Ebac
var registro = [

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Salvador Mora", edad: "30", zonaresidencia: "CDMX", nombrePrograma: "Desarrollador Front End de Cero a Pro", email: "salvadormora@ebac.mx", numeroTelefono: "365376688",seguroSocial: "Si" },
    {nombre: "Maria Hubert", edad: "34", zonaresidencia: "Edo Mex", nombrePrograma: "Desarrollado Front End con Python", email: "maria@ebac.mx", numeroTelefono:"3454665444",seguroSocial: "No"},
    {nombre: "Ana Hernández", edad: "38", zonaresidencia: "Puerto Vallarta", nombrePrograma: "Desarrollador Front End de Cero a Pro", email: "anahernandez@ebac.mx",numeroTelefono: "45667777",seguroSocial: "No"},
    {nombre: "Danela Maciel", edad: "20", zonaresidencia: "Nayarit", nombrePrograma: "Diseñador UX/UI", email: "dany@ebac.mx", numeroTelefono: "38346567889", seguroSocial: "No"},
    {nombre: "Sofia García", edad: "44", zonaresidencia: "CDMX", nombrePrograma: "Ingeniero Front End", email: "sofia@ebac.mx", numeroTelefono: "65893938373", seguroSocial: "Si"},

];

//Funcion que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //Se le solicita informacion al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del nuevo alumno");
    var nombrePrograma = prompt("Ingresa el programa a estudiar del nuevo alumno");
    var email = prompt("Ingresa el correro electrónico del nuevo alumno");
    var numeroTelefono = prompt("Ingresa el numero de telefono del alumno");
    var seguroSocial_Promp = prompt("¿Tiene seguro social? (S/N)");

    var seguroSocial_ValorNuevoAlumno;
    if (seguroSocial_Promp === "S") {
       seguroSocial_ValorNuevoAlumno= true;

    } else if (seguroSocial_Promp === "N") {
       seguroSocial_ValorNuevoAlumno = false;

    } 

//Crea un objeto que se llama nuevoAlumno con los datos ingresados
var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma,email: email, numeroTelefono: numeroTelefono, seguroSocial: seguroSocial_ValorNuevoAlumno};

//Agrega la informacion nuevoAlumno al arreglo
registro.push(nuevoAlumno); 
}

//Funcion para consultar los regisrros de los alumnos
function consultarRegistros(){ 

//Este ciclo for itera sobre cada uno de los registros del arreglo
for(var i = 0; i < registro.length; i++){

    //Esta lista de console.log permite ver al usuario el registro en la consola
    console.log("Nombre: " + registro[i].nombre);
    console.log("Edad: " + registro[i].edad);
    console.log("Zona de Residencia: " + registro[i].zonaresidencia);
    console.log("Nombre del Programa:  " + registro[i].nombrePrograma);
    console.log("Email: " + registro[i].email)
    console.log("Numero de Telefono: " + registro[i].numeroTelefono) ;   
    console.log("Seguro Social: " + registro[i].seguroSocial);
    console.log("                 ");
    
    };
};

//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    //solicita al usuario el nombre del alumno a eliminar
  var nombreAeliminar = prompt("Ingresa el nombre a eliminar");

//Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
registro =registro.filter(alumno => alumno.nombre !== nombreAeliminar);

}

//Ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
do{

//Variable que toma la eleccion del usuario para ejecutar la funcion indicada  
var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2.Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");

//Se declara este if para dar a elejir al ususario la opcion que quiera 
if(opcion === "1"){
   agregarAlumno(); 
} else if (opcion === "2"){
   consultarRegistros(); 
}else if (opcion === "3"){
   eliminarAlumno();
}else if ("Salir"){
    alert ("Salir del sistema");
    break;
}else{
    alert("Opción inválida, elige otra");

};

//Esta variable nos permite elejir si hacemos otra accion o cerramos el ciclo
var continuar = prompt("Deseas hacer otra acción? (S/N)");

//while que se encarga de cerrar el ciclo
}while(continuar === "s");