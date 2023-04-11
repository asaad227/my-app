import React from "react";
import Placeholder from "../Placeholder/Placeholder";
import ListItem from "../ListItem/ListItem";

export default function Checklist({list, removeFromList}) {
    if (list.length === 0) {
        return <Placeholder/>
    } else {
        return  list.map((item, index) => <ListItem checkStatus={item.checked} deleteHandler={removeFromList} index={index} key={index} text={item.text} dateView={item.date}></ListItem>)
    }
}