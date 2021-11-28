const Galeria = (props) => {
    return (
        <div>
            <h1 style="text-align: center;">Galeria</h1>
            <div id="carouselExampleSlidesOnly" class="carousel slide carruselLeft" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/ImagenG7.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG8.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG9.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG10.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG11.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG12.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG13.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div id="carouselExampleSlidesOnly" class="carousel slide carruselRight" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/ImagenG1.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG3.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG4.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG5.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="img/ImagenG6.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeria;