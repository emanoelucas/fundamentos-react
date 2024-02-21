import React from "react";
import DiretaFilho from "./DiretaFilho";


export default function DiretaPai (props) {
    return (
        <div>
            <DiretaFilho nome="filho 1" idade={20} nerd={true} />
            <DiretaFilho nome="filho 2" idade={10} nerd={false} />
        </div>
    )    
}