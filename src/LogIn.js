import React from 'react';
import Modal from 'react-modal'
import {useEffect, useState, useRef} from 'react';
import './App.css'

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
export function PopLogIn(modalIsOpen ,userName, fetchUserName){
    
    const style = {
        overlay: {
            background: 'grey'
        },
        content: {
            color: 'orange'
        },
        

    };
    

    
    return (
        <div className='LogIn'> 
            <Modal className="MODAL" isOpen={modalIsOpen} style={style} className='modalLogIn'> 
            <center>
                <h2> Log In Page </h2>
                    <div class="container">
                        <input ref={userName} type="text" placeholder="Enter Username" required/>
                    </div>
                <button className="logInButton" onClick={fetchUserName}> Log In </button>
                </center>
            </Modal>
        </div>
    );
}
