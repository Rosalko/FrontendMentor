import {MouseEventHandler} from "react";
import dice from "/icon-dice.svg"

const RefreshButton = ({onClick}: { onClick: MouseEventHandler }) => {
    return <div className="button-container">
        <button className="refresh-button" onClick={onClick}>
            <img className="refresh-button--icon" src={dice} alt="dice"/>
        </button>
    </div>
}

export default RefreshButton