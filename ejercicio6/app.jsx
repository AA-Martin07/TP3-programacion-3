const { useState } = React;

function CalcularImc() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setResultado(Number(peso / (altura * altura)).toFixed(2));

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Escriba su peso en (kg) ej. 70"
                ></input>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="escriba su altura en (m) ej. 1.75"
                ></input>
                <button
                    type="submit"
                    disabled={!peso || !altura}
                >
                    Calcular
                </button>
            </form>
            <Mensaje result = {resultado}/>
        </>
    );
}

function Mensaje(props){
    if (!props.result)return null;
  return(
    <>
    {props.result < 18.5 &&  <p className='bajo'>Su IMC es: {props.result} indice de riesgo Bajo</p>}
    {props.result >= 18.5 && props.result <=24.9 && <p className='normal'>Su IMC es: {props.result} indice de riesgo Normal</p>}
    {props.result >= 25 && props.result <=29.9 && <p className='sobrepeso'>Su IMC es: {props.result} indice de riesgo Sobrepeso</p>}
    {props.result >= 30 && <p className='obesidad'>Su IMC es: {props.result} indice de riesgo Obesidad</p>}

    </>
  )
}

function App() {
    return (
        <>
            <CalcularImc/>
        </>
    );
}