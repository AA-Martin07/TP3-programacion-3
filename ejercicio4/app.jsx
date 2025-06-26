const { useState } = React;

function App() {
    const [active, setActive] = useState(true);

    return (
        <div className="contenedor">
            <button
                onClick={() => setActive(false)}
                disabled={active !== true}
            >
                Izquierdo
            </button>
            <button
                onClick={() => setActive(true)}
                disabled={active !== false}
            >
                Derecho
            </button>
        </div>
    );
}