import image from "../../assets/images/banner/img-1.jpg";
import { Box, Image, Text } from "../../components/core";

export const Banner = () => {
  return (
    <>
      <Box className="banner-img">
        <Image src={image} width="100%" height="400" variant="cover" />
        <Box className="container-fluid text-end banner-img-text">
          <Text variant="h3" color="red" typeface="semiBold">
            Welcome To The Team. We're glad to have you here.
          </Text>
          <button className="btn btn-primary"> Read More</button>
        </Box>
      </Box>
    </>
  );
};
