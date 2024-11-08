let palabras: string[] = ["hola", "TypeScript", "código", "array", "programación"];
function cadena(arr:string[]):string[] {
    let arr1:string[]=arr.filter((ar)=>ar.length>5);
    return arr1
}
console.log(cadena(palabras));