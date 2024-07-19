export const Notes = ({nota}) => {
    const {id,titulo,descripcion,importante} = nota
    if (importante){
        return (
            <div className="important">
                <span className="close-btn">x</span>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        )
    }
        else {
            return (
                <div className="no-important">
                    <span className="close-btn">x</span>
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
            )
        }
}

export default Notes;
