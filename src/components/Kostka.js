import { useRef, useState } from "react";

function Kostka(){
    
    
    const pocet = useRef(null);
    const [hodil, setHodil] = useState(0);

    function Hazej(){
        setHodil(Math.ceil(Math.random()*pocet.current.value))
        return(hodil)
    }
    
    return (
        <div>
            <h1>Házej kostkou</h1>
            <form id="kostka">
                <p>Zadej počet stran kostky: <input ref={pocet} id="pocet" type="text" name="pocet" size="1"/></p>
                <p><input id="tlac" type="button" value="Házej" onClick ={Hazej}/></p>
                <p>Hodil jsi číslo <input type="text" name="hodil" value={hodil} size="1"/></p>
            </form>
        </div>

    )
}

export default Kostka;