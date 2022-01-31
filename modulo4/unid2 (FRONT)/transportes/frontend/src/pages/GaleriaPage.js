import '../styles/components/pages/GaleriaPage.css'
import Carousel from 'react-bootstrap/Carousel';

const Galeria = (props) => {
    return (
        <div className="mainDiv centerText">
            <h1>Galeria</h1>
            <Carousel className="carouselMain">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG4.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG5.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/ImagenG6.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Galeria;