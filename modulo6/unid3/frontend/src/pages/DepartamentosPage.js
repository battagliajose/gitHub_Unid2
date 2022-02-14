import '../styles/components/pages/DepartamentosPage.css'
import { Accordion } from "react-bootstrap"

const Departamentos = (props) => {
    return (
        <div className="mainDiv">
            {/* <h1 className="tituloDepartamentos">Departamentos.</h1> */}
            <div className="departamentosContainer">
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>Dptos para 2 y 3 personas</h2></Accordion.Header>
                        <Accordion.Body>
                            <div className="departamentos">
                                <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>Dptos para 4 y 5 personas</h2></Accordion.Header>
                        <Accordion.Body>
                            <div className="departamentos">
                                <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h2>Dptos para 6 personas</h2></Accordion.Header>
                        <Accordion.Body>
                            <div className="departamentos">
                                <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image3S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image1S.jpg" alt=""/>
                                <img className="imgDepartamentos" src="img/image2S.jpg" alt=""/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Departamentos;