const numeroUser = parseInt(prompt('Ingrese un numero del 1 al 20'))

if (numeroUser >= 1 && numeroUser <= 20) {
    const calculo = (numero) => {

        for (let i = 1; i <= numero; i++) {
            document.write(i + " x " + numero + " = " + i*numero + "<br>")
        }
        
        let f = 1;
        for(let i = 1; i<=numero; i++){
            f *= i;
            document.write("Factorial de " + i + " es: " + f  + "<br>")
        }
    }
    
    calculo(numeroUser);

}else {
    document.write("Numero fuera de rango")
}
