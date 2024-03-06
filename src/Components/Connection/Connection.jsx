import React from "react";
import './Connection.scss'

export const Connection = () => {
    return (
        <section className="connection">
            <div className="container">
                <div className="connection-wrapper">
                <div className="connection-offer">
                    <h2>What can us do for you?</h2>
                    <div className="connection-text">
                        We are ready to work on a project of any complexity, whether it’s commercial or residential.
                    </div>
                </div>
                <form action="">
                    <div className="connection-input-wrapper">
                        <input className="connection-input" type="name" placeholder="Name*"/>
                        <input className="connection-input" type="mail" placeholder="Email*"/>
                        <input className="connection-input" type="text" placeholder="Reason for Contacting*"/>
                        <input className="connection-input" type="phone" placeholder="Phone"/>
                        <input className="connection-input message" type="message" placeholder="Message"/>
                    </div>
                    <div>* indicates a required field</div>
                    <div>
                        <button className="connection-btn">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}