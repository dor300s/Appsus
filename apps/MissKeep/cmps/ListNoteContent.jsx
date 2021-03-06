import utilService from '../services/utilService.js'
export default function ListNoteContent(props) {
    const { note } = props


    return (
        <div className="MK-todos-items-container">
            <h2>#{note.title}</h2>
            {Object.keys(note.todosList).map(key => {
                let rndId = utilService.getId()
                return(
                <div  className="todo-note-item-wraper flex space-between">
                    <div className="MK-checkbox flex">
                        <input type="checkbox" onClick={() => props.onCheckItem(rndId)} />
                        <h3 id={rndId} className='' value={key} contentEditable="true" suppressContentEditableWarning="true" spellCheck="false"
                            onKeyUp={() => props.contentChange(note, key, event)} >{note.todosList[key]}</h3>
                    </div>
                    <h4>{moment().format('MMMM Do')}</h4>
                </div>
                )}

            )}
        </div>
    )
}