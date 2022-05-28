import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/Slides/img-1.jpg";
import image2 from "../../assets/images/Slides/img-2.jpeg";
import image3 from "../../assets/images/Slides/img-3.jpg";
import image4 from "../../assets/images/Slides/img-4.jpg";
import image5 from "../../assets/images/Slides/img-5.jpg";
import Slider from "react-slick";
import { Box, Image, Text } from "../../components/core";

export const Slides = () => {
  const sliderImg = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box className="slider">
        <Slider {...settings}>
          {sliderImg.map((item) => {
            return (
              <Box className="w-100">
                <Image
                  src={item.img}
                  className="w-100 slider-img"
                  height="650"
                  variant="cover"
                />
                <Box className="slider-img-text">
                  <Text typeface="semiBold" variant="h1">
                    Hello,
                  </Text>
                  <Text typeface="semiBold" variant="h3" className="mt-3">
                    Welcome To The Team. We're glad to have you here.
                  </Text>
                  <button
                    className="btn btn-primary mt-4"
                    style={{ borderRadius: "16px" }}
                  >
                    Read More
                  </button>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </>
  );
};
