import React from "react";
import "../Slider/index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from "../../image/SliderImage1.png";
import SliderImage2 from "../../image/SliderImage2.png";
import SliderImage3 from "../../image/SliderImage3.png";
import SliderImage4 from "../../image/SliderImage4.png";
import SliderImage5 from "../../image/SliderImage5.png";

const Sliders = () => {

    var settings = {
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
    };

    return (
        <>
            <div className="mt-10 xl:mt-36 md:mt-20">
                <Slider {...settings} className= "mx-auto md:w-9/12">
                    <div className="">
                        <img src={SliderImage2} className="px-2" alt="" />
                    </div>
                    <div className="">
                        <img src={SliderImage1} className="px-2" alt="" />
                    </div>
                    <div className="">
                        <img src={SliderImage3} className="px-2" alt="" />
                    </div>
                    <div className="">
                        <img src={SliderImage4} className="px-2" alt="" />
                    </div>
                    <div className="">
                        <img src={SliderImage5} className="px-2" alt="" />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Sliders;
