import { Link } from "react-router-dom";

export const AboutPedro = () => {
    return (
        <div>
            Página sobre Pedro.
            <p><Link to="/sobre">voltar</Link></p>
        </div>
    );
}