import { Link } from 'react-router-dom';

import CustomButton from '../../core/components/CustomButton';
import './styles.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="text-title">Desafio do Capítulo 3,<br />Bootcamp DevSuperior</h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            </p>
            <p className="text-subtitle">
                Favor observar as instuções passadas no capítulo sobre a<br />elaboração deste projeto.
            </p>
            <p className="text-subtitle">
                Este design foi adaptado a partir de Ant Design Sistem for Figma, de<br /> Mateus Wierzbicki: antforfigma@gmail.com
            </p>
            <Link to="/search">
                <CustomButton text="Começar" />
            </Link>

        </div>
    );
};

export default Home;