import React from "react";
import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParouImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default function App (props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                
                <Card titulo="#13 Desafio Mega Sena" color="#926aa6">
                    <Mega quantidade={6}/>
                </Card>

                <Card titulo="#12 Contador" color="#a1bdc7">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="#11 Componente Controlado" color="#800000">
                    <Input></Input>
                </Card>

                <Card titulo="#10 Comunicação indireta" color="#163832">
                    <IndiretaPai></IndiretaPai>
                </Card>
                
                <Card titulo="#9 Comunicação direta" color="#ff4760">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#8 Renderização Condicional" color="#b9b3fc">
                    <ParOuImpar numero={20}/>
                    <UsuarioInfo usuario={{nome: 'Joao'}}/>
                    <UsuarioInfo usuario={{email: 'Joao'}}/>
                </Card>
                <Card titulo="#7 Desafio Repetição" color="#808000">
                    <TabelaProdutos/>
                </Card>
                <Card titulo="#6 Repetição" color="#f2d6dd">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#5 Componente com filos" color="#f2d6dd">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>

                <Card titulo="#4 Desafio Aleatório" color="#080">
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo="#3 Fragmento" color="#FA6900">
                    <Fragmento />    
                </Card>

                <Card titulo="#2 Com parâmetros" color="#E94C6F">
                    <ComParametro titulo="segundo componentes" subtitulo="legal" />
                </Card>

                <Card titulo="#1 Primeiro" color="#E8B71A">
                    <Primeiro/>
                </Card>
            </div>
        </div>
    )
}