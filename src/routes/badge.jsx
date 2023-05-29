import "./badge.css";
import { useState, useEffect } from "react";

const Badge=()=>{

    const [codice, setCodice] = useState("")
    const [nomeIntervento, setNomeIntervento] = useState("GDI 2k23")

    const codici = [
        "0000108571",
        "0000309053",
        "0000118285",
        "0000403281",
        "0000309053"
    ]

    function Controllo(codice){
        let i=0;
        for(i=0;i<codici.length; i++)
        {
            if(codici[i]==codice)
                return true
        }
        return false;
    }


    const getCodice = async () => {
        const response = window.location.href;
        setCodice(response.substring(35, response.length));
        if(codice.length>5)
        {
            if(Controllo(codice))
            {
                document.getElementById("correct").style.display="flex";
                document.getElementById("error").style.display="none";
            }
            else
            {
                console.log("true");
                document.getElementById("error").style.display="flex";
                document.getElementById("correct").style.display="none";
            }
        }
    }

    useEffect(()=>{
        getCodice()
    })

    return(
        <div className="content">

        <div className="badge">
            <div className="nomeIntervento">{nomeIntervento}</div>
            <div className="protezioneCivile">PROTEZIONE CIVILE DI COMO</div>

            <form action>
                <input name="codice" type="password" autoFocus/>
                <input type="submit" value="" style={{display: "none"}}/>
            </form>

            <div className="correct" id="correct" onClick={()=>{document.getElementById("correct").style.display="none"}}>Operazione Riuscita</div>
            <div className="error" id="error" onClick={()=>{document.getElementById("error").style.display="none"}}>Operazione Fallita</div>
        </div>
        </div>
    )
}

export default Badge;