import React from "react";

export default function TicketItem({ticket, dispatch}){
    const {id, title, description, priority} = ticket;

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high"
    }

    const deleteTicket = ()=>{
        dispatch({
            type: 'DELETE_TICKET',
            payload: {id}
        })
    }

    const editTicket = () =>{
        dispatch({
            type: "SET_EDITING_TICKET", payload: ticket
        })
    }
    return(
        <div className="ticket-item">
            <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="button" onClick={deleteTicket}>Delete post</button>
            <button className="button" onClick={editTicket}>Edit post</button>
        </div>
    )
}