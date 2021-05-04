import { useState } from "react";

function Pochvala(){
    
    const [klik, setKlik] = useState(1);
    //const klik = 0;
    const [hlaska, setHlaska] = useState("");
    
    function Pochvalit(){
         setKlik(klik + 1)
         //klik = klik + 1;
         setHlaska("Tak tohle se opravdu " + klik +"x povedlo")
         return(hlaska)
    }
    
    return (
        <div>
            
            <p>Nezapomen se pochvalit</p>
            <p><input id="bt" type="button" value="Pochval se" onClick ={Pochvalit}/></p>
            <p>{hlaska}</p>
                            
        </div>

    )
}

export default Pochvala;