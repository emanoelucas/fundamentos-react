import React from "react";
import produtos from "../../data/produtos";

import './TabelaProdutos.css'

export default function TabelaProdutos (props) {
    
    const tableHead =  (
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
        </thead>
    )

    const tabelaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={ i % 2 === 0 ? 'Par' : 'Impar'}>
                <th>{ produto.id }</th>
                <th>{ produto.nome }</th>
                <th>R$ { produto.preco.toFixed(2) }</th>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table border={1}>
            { tableHead }
            <tbody>
            { tabelaProdutos }
            </tbody>
            </table>
        </div>
    )
}