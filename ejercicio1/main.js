const formulario = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')
const operacion = formulario.elements.operacion
const boton = formulario.elements.calcular
const num1input = formulario.elements.num1
const num2input = formulario.elements.num2

function controlarBoton() {
    const operacionSeleccionada = operacion.value;
    if (operacionSeleccionada === 'division') {
        boton.disabled = true;
    }else {
        boton.disabled = false;
    }
}

operacion.addEventListener('change', controlarBoton)
formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const num1 = Number(num1input.value);
    const num2 = Number(num2input.value);

    let op;
    
    switch (operacion.value) {
        case 'suma':
            op = num1 + num2
            break;
        case 'resta':
            op =num1 - num2
            break;

        case 'multiplicacion':
            op =num1 * num2
            break;
    }

    resultado.textContent = `El resultado es: ${op} (${operacion.value})`
    controlarBoton();
})