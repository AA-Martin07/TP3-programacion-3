const { useState } = React;

function Calculadora() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [operacion, setOperacion] = useState('suma');
    const [resultado, setResultado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num1 = Number(numero1);
        const num2 = Number(numero2);

        let op 

        switch (operacion) {
            case 'suma':
                op = num1 + num2;
                break;
            case 'resta':
                op = num1 - num2;
                break;
            case 'multiplicacion':
                op = num1 * num2;
                break;
        }
        setResultado(`El resultado es: ${op} (${operacion})`);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    disabled={operacion === 'division'}
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                    placeholder="Escribe un numero"
                ></input>
                <input
                    type="number"
                    disabled={operacion === 'division'}
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                    placeholder="Escribe un numero"
                ></input>
                <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="multiplicacion">Multiplicación</option>
                    <option value="division">División</option>
                </select>
                <button
                    type="submit"

                    disabled={operacion === 'division' || !numero1 || !numero2}
                >
                    Calcular
                </button>
            </form>
            <p id="resultado">
                {resultado}
            </p>
        </>
    );
}

function App() {
    return (
        <>
            <Calculadora/>
        </>
    );
}