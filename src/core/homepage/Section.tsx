import { Box, Text } from "../../components/core";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";

export const Section = () => {
  const sectionData = [
    {
      icon: <AiOutlineMail />,
    },
    {
      icon: <BsTelephonePlus />,
    },
    {
      icon: <AiOutlineUser />,
    },
    {
      icon: <GiPositionMarker />,
    },
  ];
  return (
    <>
      <Text variant="h3" typeface="medium">
        Section Card
      </Text>
      <Box className="mt-4 text-center section-card">
        {sectionData.map((item) => {
          return (
            <Box className="section-boxshadow ">
              <Box className="rounded-circle roundedDiv ml-auto mr-auto">
                <i>{item.icon}</i>
              </Box>
              <Text variant="h6" className="mt-4">
                Consectetur culpa nostrud nostrud fugiat reprehenderit enim est
                ea do aliquip in laboris. Consectetur culpary lorem ipsum
              </Text>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
