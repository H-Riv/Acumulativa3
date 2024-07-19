import Notes from './Notes';
import {v4 as uuid} from "uuid";
import {useState, useRef} from "react";


 export const PostIt = () => {
        const[notas, setNotas] = useState([
            {id: uuid(),titulo: 'titulo 1', descripcion: 'descripcion 1', importante: true},
            {id: uuid(),titulo: 'titulo 2', descripcion: 'descripcion 4', importante: true},
            {id: uuid(),titulo: 'titulo 3', descripcion: 'descripcion 3', importante: true},
            {id: uuid(),titulo: 'titulo 4', descripcion: 'descripcion 2', importante: true}
        ]);
    
        const tituloRef = useRef();
        const descripcionRef = useRef();
        const importanteRef = useRef();
    
        const agregarNota = () => {
            const titulo = tituloRef.current.value;
            const descripcion = descripcionRef.current.value;
            const importante = importanteRef.current.checked;
    
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