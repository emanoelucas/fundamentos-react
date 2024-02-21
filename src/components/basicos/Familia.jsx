import React from "react";

export default function Familia (props) {
    return (
        <div>
            {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, props)
                })
            }
        </div>        
    )
    
}