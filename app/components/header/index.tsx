import { Box, Text, Button, Flex, VStack } from "@chakra-ui/react";
import { SlChemistry } from "react-icons/sl";

function Header() {
  return (
    <VStack display={"flex"} alignItems={"left"}>
      <Flex dir="row" alignItems={"center"} gap={"1rem"} mt={"2%"}>
        <SlChemistry className="text-5xl" />
        <Text fontSize={"2rem"}>Detalle de análisis de aceite</Text>
      </Flex>
      <Button w={"5%"} colorScheme="blue" mt={"1rem"}>
        Volver
      </Button>
    </VStack>
  );
}

export default Header;
