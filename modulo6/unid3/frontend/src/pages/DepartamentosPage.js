import '../styles/components/pages/DepartamentosPage.css'
const Departamentos = (props) => {
    return (
        <div className="mainDiv">
                <h1 className="tituloDepartamentos">Departamentos.</h1>
            <div className="departamentosContainer">
                <h2>Dptos para 2 y 3 personas</h2>

                <div className="departamentos">
                    <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                </div>

                <h2>Dptos para 4 y 5 personas</h2>

                <div className="departamentos">
                    <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                </div>

                <h2>Dptos para 6 personas</h2>
                    
                <div className="departamentos">
                    <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                    <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Departamentos;