import { Box, FlexBox, Image, Text } from "../../components/core";
import img from "../../assets/images/user.jpg";

export const Testomonials = () => {
  return (
    <>
      <Box className="testomonials">
        <Text variant="h3" typeface="medium">
          Grid
        </Text>
        <Box className="mt-4 testomonials-box">
          <Box className="testomonials-card">
            <FlexBox className="justify-content-center align-items-center h-100">
              <Image
                src={img}
                className="rounded-circle mr-3"
                width={"32"}
                height={"32"}
              />
              <Box>
                <Text variant="display1">Ram Bahadur Shrestha</Text>
                <Text variant="display3" typeface="semiBold" color="#286BCD">
                  CEO
                </Text>
              </Box>
            </FlexBox>
          </Box>
          <Box className="testomonials-card testomonials-2">
            <Text variant="h6" typeface="semiBold" color="black">
              Pariatur ea exercitation laborum aliquip occaecat mollit voluptate
              in enim
            </Text>
            <Text
              variant="display1"
              typeface="regular"
              className="mt-3"
              color="grey"
            >
              Magna nisi voluptate tempor eiusmod ad labore ea ad laboris
              labore. In magna cupidatat mollit ex deserunt duis magna est. Sit
              ea sunt cillum adipisicing Lorem labore proident eiusmod do
              laborum enim consectetur.
            </Text>
            <Text
              variant="display2"
              typeface="regular"
              className="text-end mt-4"
              color="#666666"
            >
              08/07/2021
            </Text>
          </Box>
          <Box className="testomonials-card">
            <FlexBox
              direction="column"
              justify="space-between"
              className="h-100"
            >
              <Text variant="display2" typeface="medium">
                29/12/2021
              </Text>
              <Text
                variant="display2"
                typeface="bold"
                className="w-100 text-end"
              >
                01:30pm
              </Text>
            </FlexBox>
          </Box>
          <FlexBox></FlexBox>
        </Box>
      </Box>
    </>
  );
};
