import './ListItem.css';

export default function ListItem({text, index, checkStatus, deleteHandler, dateView}) {



    return (
    <ul className='ul-list'>
        <li><input type="checkbox" checked={checkStatus} onChange={deleteHandler.bind(null, index)}/><div className='textItem'><p>{text}</p> <p className='timeStamp'> {dateView}</p></div></li>
        </ul>
      
    )
}
