/* eslint-disable no-undef */
import React, { useEffect, useState} from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import db from "./firebase"; //imported from the local firebase.js file



import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {

       const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                
                )
    );

                return () => {
                    unsubscribe();
                }
    }, []);
    //connection betewwn the filebase and the sidebarchat

    return ( 
    <div className = "sidebar">
       <div className= "sidebar__header">
        <Avatar />
        <div className= "sidebar__headerRight">
        <IconButton>
            <DonutLargeIcon />
        </IconButton>
        <IconButton>
            <ChatIcon />
        </IconButton>
        <IconButton>
            <MoreVertIcon />
        </IconButton>
        </div>
       </div>
       <div className= "sidebar__search">
            <div className="sidebar__searchContainer">
            <SearchIcon />
            <input placeholder="Search or start new chat" type="text" />
            </div>
       </div>
       <div className= "sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
            <SidebarChat key={room.id} id={room.id}
            name={room.data.name} /> //connection between the sidebarchat rooms

        ))}
       </div>
    </div>
    )
}

export default Sidebar;