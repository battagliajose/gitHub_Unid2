import '../../styles/components/layout/header.css';

const Header = (props) => {
    
    return (
        <div className="mainHeaderDiv">
            <div className="headerDiv holder">
                <img className="homeimg" src="img/lasmoras.jpg" alt="Logo"/>
                <h1><span className="lasMoras">Las Moras</span> - Alquileres Turísticos</h1>
            </div>
        </div>
    );
}

export default Header;