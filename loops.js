var estudiantes = ["Maria", "Sergio","Rosa", "Daniel"];
function saludarEstudiante(estudiante){
    console.log(`hola, ${estudiante}`);
}
// for(var estudiante of estudiantes){
//     saludarEstudiante(estudiante);
// }

while(estudiantes.length >0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}