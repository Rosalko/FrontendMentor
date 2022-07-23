import {useEffect, useState} from "react";
import {Advice} from "../Models/Advice";
import LoadingSpinner from "./LoadingSpinner";
import RefreshButton from "./RefreshButton";
import dividerDesktop from "/pattern-divider-desktop.svg";
import dividerMobile from "/pattern-divider-mobile.svg";

const AdviceCard = () => {
    const [advice, setAdvice] = useState<Advice>();
    const [isLoading, setIsLoading] = useState(true);
    const api = import.meta.env.VITE_ADVICE_API;

    const fetchAdvice = () => {
        setIsLoading(true);
        fetch(api).then(res => res.json()).then(res => setAdvice(res)).then(() => setIsLoading(false))
    }

    useEffect(() => fetchAdvice(), [])

    return (<div className='container'>

        <p className="advice-id">Advice number #{advice?.slip.id}</p>
        <p className="advice-quote">"{advice?.slip.advice}"</p>
        <img className="divisor_desktop" src={dividerDesktop} alt="divisor"/>
        <img className="divisor_mobile" src={dividerMobile} alt="divisor"/>
        <RefreshButton onClick={fetchAdvice}/>
    </div>)
}

export default AdviceCard