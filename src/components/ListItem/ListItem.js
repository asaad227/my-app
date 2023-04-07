import './ListItem.css';

export default function ListItem({text, index, checkStatus, deleteHandler, dateView}) {
function dateAndTime(){
    //this will checked if user has provided date and time or not
    if(dateView === ""){
        return null
    }else{
        return `Due by: ${dateView}`;
    }
}


    return (
    <ul className='ul-list'>
        <li><input type="checkbox" checked={checkStatus} onChange={deleteHandler.bind(null, index)} placeholder='checkbox'/><div className='textItem'><p>{text}</p> <p className='timeStamp'> {dateAndTime()}</p></div></li>
        </ul>
      
    )
}
