import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

useEffect ( () => {
    if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
}, [roomId])

useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

}, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>>", input);
        setInput("");
    };

    return (
        <div className= "chat">
            
            <div className="chat__header">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerinfo">
                    <h3>{roomName}</h3>
                    <p> Last Seen at...</p>
                </div>

                <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>

                </div>

            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                <span className="chat__name">
                    Rahul Mashal
                </span>
                 Hi Rahul 
                 <span className="chat__timestamp">
                    3:52pm
                </span>
            
                </p>
                
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="typr a message" type="text" />
                    <button onClick={sendMessage} >Send a message</button>
                </form>
                <MicIcon />
            </div>


        </div>
    )
}

export default Chat;
