//Info de los cursos
const{cursos}= require('./infoCursos');

//Función para imprimir la info de un curso
let info=(cursos,i)=>{
	setTimeout(function(){
		console.log('\nEl curso de '+cursos[i].nombre+' ('+cursos[i].alias+') con id N°'+cursos[i].id+ ' tiene un costo de $'+cursos[i].valor+' con una duración de '+cursos[i].duracion+' horas\n');
	},i*2000);
}

//Función para imprimir todos los cursos
let imprimirCursos=(cursos)=>{
	var i=0;
	while(i<cursos.length){
		info(cursos,i);
		i+=1;
	}
	return i;	
}

//Info del estudiante
const{opciones,argv}= require('./estudiante');

//Para el archivo
const fs=require('fs');

let crearArchivo=(argv,informacion)=>{
	texto= 'Nombre: '+argv.n+'\n'+
		   'Cédula: '+argv.x+'\n'+
		   'IdCurso: '+argv.i+'\n'+
		   'Nombre del Curso: '+informacion.nombre+'\n'+
		   'Costo del Curso: '+informacion.valor+'\n'+
		   'Duración del Curso: '+informacion.duracion+' horas';

    fs.writeFile('Estudiante#'+argv.x+'.txt',texto,(err)=>{
    	if(err) throw (err);
    	console.log('Se ha creado el archivo');
    });
}

//Presentar los cursos y opción de inscripción
let cursosPrincipal=(cursos)=>{
	imprimirCursos(cursos);

	setTimeout(function(){
		console.log('Si desea conocer los datos necesarios para inscribir un curso esriba sin comillas: "node principal inscribir"');	
	},4000);//Número de segundo que tarda en imprimirse el último curso
}

//PRINCIPAL

if(typeof(argv.i)!='undefined'){

	let informacion=cursos.find(function(identificacion){
		return identificacion.id==argv.i})

		let validador=typeof(informacion);

		if(validador=='object'){
			console.log(argv.n+' con cédula N°'+argv.x+' se ha inscrito en el curso de '+informacion.nombre+' con id N°'+informacion.id+' que cuesta $'+informacion.valor+' y tiene una duración de '+informacion.duracion+' horas');			
			crearArchivo(argv,informacion);
		}
		else{
			console.log('El curso con id N°:'+ argv.i + ' no se ha encontrado');
			cursosPrincipal(cursos);
		}
	
}
else{
	cursosPrincipal(cursos);
}