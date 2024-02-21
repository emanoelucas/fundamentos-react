import React, { useState } from "react";
import './Input.css'
export default function Input (props) {
    const [valor, setValor] = useState('Inicial')
    
    function quandoMudar (e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={valor} onChange={quandoMudar} /> {/* componente controlado */}
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} /> {/* componente não controlado */}
            </div>
        </div>
    )
}