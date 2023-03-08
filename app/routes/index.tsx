import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container>
      <Box bg="blue" w="100%" p={4} color="white">
        Hello World Roni!
      </Box>
      <Heading my="30px" p="10px">
        UI Comp
      </Heading>
      <Text ml="-1.5" color="blackAlpha.600">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, omnis
        alias corrupti iste non minus nemo quam sed iure fugiat expedita itaque
        vitae delectus. Error ipsum qui dolor fugit accusamus.
      </Text>
    </Container>
  );
};

export default Index;
