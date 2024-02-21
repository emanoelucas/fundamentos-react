import React, { useState } from "react";
import './Mega.css'

export default function Mega (props) {    
    function gerarNumeros(quantidade) {
        const [min, max] = [1, 60]
        const numeros = []
        let i = 0
        while (i < quantidade) {
            let sorteado = gerarAleatorio(min, max)
            if (!numeros.includes(sorteado)) {
                numeros.push(sorteado)
                i++
            }
        }
        const numerosOrdenados = numeros.sort((a, b) => a - b)
        return numerosOrdenados.map((numero, i) => {
            return (
                <span key={i}>{numero}</span>
            )
        })

    }

    const gerarAleatorio = (min, max) => parseInt((Math.random() * (max - min)) + min)   
    
    const [quantidade, setQuantidade] = useState(props.quantidade || 6)
    const [numeros, setNumeros] = useState(gerarNumeros(quantidade))

    return (
        <div className="Mega">
            <h2>Mega Sena</h2>
            <div className="MegaNumero">
                {numeros}
            </div>
            <div>
                <label>Quantidade de Números</label>
                <input type="number" min='6' value={quantidade} onChange={e => setQuantidade(+e.target.value)} />
            </div>
            <button onClick={e => setNumeros(gerarNumeros(quantidade))}>Gerar Números</button>
            
        </div>
    ) 
}