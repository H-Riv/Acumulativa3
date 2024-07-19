import Notes from './Notes';
import {v4 as uuid} from "uuid";
import {useState, useRef} from "react";


 export const PostIt = () => {
        const[notas, setNotas] = useState([
        ]);
    
        const tituloRef = useRef();
        const descripcionRef = useRef();
        const importanteRef = useRef();
        
        const [mensaje, setMensaje] = useState('')
    
        const agregarNota = () => {
            const titulo = tituloRef.current.value;
            const descripcion = descripcionRef.current.value;
            const importante = importanteRef.current.checked;
            if (descripcion === ''){
                setMensaje('Descripcion obligatoria.')
                setTimeout(() =>{
                    setMensaje('')
                },2000)
                return
            }
    
            const nota = {
                id: uuid(),
                titulo: titulo,
                descripcion: descripcion,
                importante: importante
            }
    
            const nuevasNotas = [...notas,nota];
            setNotas(nuevasNotas)
            
        }

        const eliminarNota = (id) => {

            const nuevasNotas = notas.filter((nota) => nota.id !== id);
            setNotas(nuevasNotas)
        }

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Título"
                    ref={tituloRef}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    ref={descripcionRef}
                />
                <label>
                    <input
                        type="checkbox"
                        ref={importanteRef}
                    />
                    Importante
                </label>
                <button type='button' onClick={agregarNota}>Agregar</button>
                <div>
                    {mensaje}
                </div>
            </div>
            <div className="notes-container">
                {
                    notas.map((nota) => <Notes key={nota.id} eliminarNota={eliminarNota} nota={nota}/>)
                }
            </div>
        </div>
    );
};

export default PostIt;