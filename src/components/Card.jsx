import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const products = [
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
    ];

    return (
        <div className="slider-container">
            <Slider className="slider" {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="card">
                        <h5></h5>
                        <p className="card-description">{product}</p>
                        <h4 className="card-price">6 999 999 uzs</h4>
                        <h3 className="card-installment">6 oy / 1 200 000 uzs</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Card;
