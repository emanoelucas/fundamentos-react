import React from "react"

export default function Aleatorio (props) {
    const aleatorio = parseInt((Math.random() * (props.max - props.min))) + props.min
    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p><strong>Valor minimo: {props.min}</strong></p>
            <p><strong>Valor máximo: {props.max}</strong></p>
            <p><strong>Valor aleatorio: {aleatorio}</strong></p>
        </div>
    )
}