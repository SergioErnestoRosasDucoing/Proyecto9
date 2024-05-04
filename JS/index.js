for(let x=0; x<5; x++){
    if(x==2)
        continue;
    console.log(x);
}

let a = 10;
a = a + 5;
a += 5;

let x = 10;
x **= 5;
console.log(x);

// Tipo fecha 
const fecha = new Date();
console.log(fecha);

function myFunction(p1=1, p2=1) {
    return p1 * p2;
}

console.log(myFunction());
console.log(myFunction(5, 5));
console.log(myFunction(5));
console.log(myFunction);

let otraFuncion = (a,b ) => a + b

console.log(otraFuncion(5,10))

let otraFuncion2 = (a,b) => {
    return a * b;    
}

console.log(otraFuncion2(5,10));


//fuction autoejecutable
// function anonima

(() => console.log('Esta es una función anónima autoejecutable'))();

let alumno = {
    nombre: 'Juan',
    apellido: 'Perez', 
    matricula: '12345',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(alumno.nombreCompleto());





