import React from "react";

const Light = ({ color, selected, handleClick}) => {

    return(
        <div
            className={`light ${color} ${selected === color ? "glow-" + color : ""}`}
            onClick={()=>handleClick(color)}
        ></div>
    );
};

export default Light;