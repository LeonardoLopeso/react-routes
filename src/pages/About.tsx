import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            Página Sobre:
            <ul>
                <li><Link to="/sobre/leonardo">Leonardo</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>
            </ul>
        </div>
    );
}