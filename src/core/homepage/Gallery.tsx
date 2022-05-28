import { Box, FlexBox, Image, Text } from "../../components/core";
import image1 from "../../assets/images/gallery/img-1.jpeg";
import image2 from "../../assets/images/gallery/img-2.jpg";
import image3 from "../../assets/images/gallery/img-3.jpg";
import image4 from "../../assets/images/gallery/img-4.jpg";
import image5 from "../../assets/images/gallery/img-5.jpg";
import image6 from "../../assets/images/gallery/img-6.jpg";
import image7 from "../../assets/images/gallery/img-7.png";
import image8 from "../../assets/images/gallery/img-8.jpg";

export const Gallery = () => {
  const imageGallery = [
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
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
  ];
  return (
    <>
      <FlexBox justify="space-between">
        <Text variant="h3" typeface="medium">
          Gallery
        </Text>
        <Text variant="display1">2078/05/20</Text>
      </FlexBox>
      <Box className="mt-4 gallery">
        {imageGallery.map((item) => {
          return (
            <Image src={item.img} height="200" width="100%" variant="cover" />
          );
        })}
      </Box>
    </>
  );
};
