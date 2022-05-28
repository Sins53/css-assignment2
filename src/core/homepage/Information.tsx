import { Box, Image, Text } from "../../components/core";
import img from "../../assets/images/image1.jpg";

export const Information = () => {
  return (
    <Box className="container-fluid information row gy-5">
      <Box className="col-1"></Box>
      <Box className="col-md-5 col-sm-11 information-text">
        <Text variant="h3" typeface="bold">
          Lorem ipsum dolor sit amet
        </Text>
        <Text variant="display1" className="mt-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </Text>
      </Box>
      <Box className="col-1"></Box>
      <Box className="col-md-5 col-sm-11">
        <Image src={img} width="100%" height="305" variant="cover" />
      </Box>
    </Box>
  );
};
