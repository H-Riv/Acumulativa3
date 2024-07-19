export const Notes = ({nota, eliminarNota}) => {
    const {id,titulo,descripcion,importante} = nota
    const eliminacionNota = () => eliminarNota(id)
    if (importante){
        return (
            <div className="important">
                <button onClick={eliminacionNota} className="close-btn">x</button>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        )
    }
        else {
            return (
                <div className="no-important">
                    <button onClick={eliminacionNota} className="close-btn">x</button>
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
            )
        }
}

export default Notes;
