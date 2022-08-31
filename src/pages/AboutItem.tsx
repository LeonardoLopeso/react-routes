import { useParams, Link } from "react-router-dom";

export const AboutItem = () => {
    const params = useParams();

    return (
        <div>
            Página sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras).
            <p><Link to="/sobre">voltar</Link></p>
        </div>
    );
}