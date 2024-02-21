import React from "react";

export default function IndiretaFilho (props) {
    const gerarIdadeAleatoria = () => {
        const min = 50
        const max = 70
        return parseInt((Math.random() * (max-min)) + min)
    }
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                _ => props.quandoClicar('Joao', gerarIdadeAleatoria(), true)
            }>
                Fornecer Informações
            </button>
        </div>
    )    
}