import { machineData } from "@/data/data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  HStack,
  Tag,
  VStack,
  Grid,
  Divider,
  Flex,
} from "@chakra-ui/react";

interface EquipoProps {
  machineData: any;
}

const Equipo: React.FC<EquipoProps> = ({ machineData }) => {
  {
    return (
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mt="6"
      >
        <Image
          objectFit="contain"
          maxW={{ base: "100%", sm: "200px" }}
          src={machineData.machine.photo}
          alt={machineData.machine.technichalLocation}
        />

        <Stack>
          <CardBody>
            <Box>
              <HStack display={"flex"} flexDir={"row"} align={"center"}>
                <Heading size="md">
                  {machineData.machine.technicalLocation}
                </Heading>
                {machineData.machine.criticality === "NonCritical" ? (
                  <Tag>No crítico</Tag>
                ) : (
                  <Tag>Crítico</Tag>
                )}
              </HStack>
              <Text fontSize={"0.8rem"}>{machineData.machine.sector}</Text>
            </Box>
            <Flex alignContent={"center"} gap={"3rem"}>
              <VStack>
                <Heading fontSize={"1rem"} textAlign={"start"}>
                  Equipo
                </Heading>
                <Grid
                  gridTemplateColumns={"2"}
                  gridTemplateRows={"1"}
                  gridColumnGap={"2rem"}
                >
                  <Box gridColumn={"1"}>
                    <Text>Tipo de equipo</Text>
                    {machineData.machine.machineTypeName === null ? (
                      <Text>-</Text>
                    ) : (
                      <Text>{machineData.machine.machineTypeName}</Text>
                    )}
                  </Box>
                  <Box gridColumn={"1"}>
                    <Text>Descripción</Text>
                    {machineData.machine.description === null ? (
                      <Text>-</Text>
                    ) : (
                      <Text>{machineData.machine.description}</Text>
                    )}
                  </Box>
                  <Box gridColumn={"1"}>
                    <Text>Numero de serie</Text>
                    <Text>{machineData.machine.serialNumber}</Text>
                  </Box>
                  <Box gridColumn={"2"} gridRow={"1"}>
                    <Text>Fabricante</Text>
                    <Text>{machineData.machine.brandName}</Text>
                  </Box>
                  <Box gridColumn={"2"}>
                    <Text>Modelo</Text>
                    <Text>{machineData.machine.model}</Text>
                  </Box>
                </Grid>
              </VStack>
              <Divider orientation="vertical" />
              <VStack>
                <Heading fontSize={"1rem"}>Componente</Heading>
                <Grid
                  gridTemplateColumns={"2"}
                  gridTemplateRows={"1"}
                  gridColumnGap={"2rem"}
                >
                  <Box gridColumn={"1"}>
                    <Text>Parte del equipo</Text>
                    <Text>{machineData.component.part}</Text>
                  </Box>
                  <Box gridColumn={""}>
                    <Text>Tipo del componente</Text>
                    <Text>{machineData.component.componentType}</Text>
                  </Box>
                  <Box gridColumn={"1"}>
                    <Text>Descripcion</Text>
                    <Text>{machineData.component.description}</Text>
                  </Box>
                  <Box gridColumn={"2"} gridRow={"1"}>
                    <Text>Fabricante</Text>
                    <Text>{machineData.component.brandName}</Text>
                  </Box>
                  <Box gridColumn={"2"} gridRow={"2"}>
                    <Text>Modelo</Text>
                    <Text>{machineData.component.model}</Text>
                  </Box>
                  <Box gridColumn={"2"}>
                    <Text>Numero de serie</Text>
                    <Text>{machineData.component.serialNumber}</Text>
                  </Box>
                </Grid>
              </VStack>
              <Divider orientation="vertical" />
              <VStack>
                <Heading fontSize={"1rem"}>Punto</Heading>
                <Grid
                  gridTemplateColumns={"2"}
                  gridTemplateRows={"1"}
                  gridColumnGap={"2rem"}
                >
                  <Box>
                    <Text>Punto</Text>
                    <Text>{machineData.point.id}</Text>
                  </Box>
                  <Box>
                    <Text>Descripción</Text>
                    <Text>{machineData.point.description}</Text>
                  </Box>
                </Grid>
              </VStack>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    );
  }
};

export default Equipo;
