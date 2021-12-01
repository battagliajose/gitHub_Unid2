import '../../styles/components/layout/header.css';

const Header = (props) => {
    
    return (
        <div className="mainHeaderDiv">
            <div className="headerDiv holder">
                <img className="homeimg" src="img/lasmoras.jpg" alt="Logo"/>
                <h1>Alquileres Turísticos - <span className="lasMoras">Las Moras</span></h1>
            </div>
        </div>
    );
}

export default Header;