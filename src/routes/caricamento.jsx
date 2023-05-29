import { Link } from "react-router-dom";

function Caricamento(){
    return(
        <div className="content">
            <input type="text" className="inputCarica" name="intervento" placeholder="Nome Intervento"/>
            <input type="text" className="inputCarica" placeholder="Nome Sezione"/>
            <Link to={{pathname:'/badge'}} className="link">carica</Link>
        </div>
    );
};

export default Caricamento;