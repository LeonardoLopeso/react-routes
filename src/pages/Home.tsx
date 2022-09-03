import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h2>Página Home - <Link to="/sobre">Ir para a SOBRE</Link></h2>
        </div>
    );
}