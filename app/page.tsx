import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsCheck2Square } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { PiFactory } from "react-icons/pi";
import { SlChemistry } from "react-icons/sl";
import data from "../data/MOCK_DATA.json";

export default function Home() {
  const getClient = (id: number) => {
    return data.clients.find((user) => user.id === id);
  };

  const client = getClient(1);

  if (!client) {
    return null;
  }

  const getEquipos = (id: number) => {
    return data.equipos.find((equipo) => equipo.id === id);
  };

  const equipo = getEquipos(4);

  if (!equipo) {
    return null;
  }

  return (
    <main className="m-6 bg-neutral-100 rounded-lg">
      <Box className="flex flex-col gap-8 p-8">
        <div>
          <h1 className="mb-2">
            {client.nombre} /
            <span className="font-semibold"> {client?.sucursal}</span>
          </h1>
          <Divider />
        </div>
        <div className="grid grid-cols-4 gap-12 justify-center">
          <Box className="bg-gradient-to-r from-red-200/50 to-neutral-200  border border-rose-200 text-red-700 w-full p-6 rounded-lg drop-shadow-xl">
            <Box className="flex flex-col ">
              <h2 className="text-xl text-end text-neutral-800 font-semibold mb-2">
                Incidentes
              </h2>
              <Box className="flex justify-between gap-16">
                <AiOutlineExclamationCircle className="text-5xl" />
                <Box className="flex gap-2">
                  <Box className="flex flex-col text-end bg-red-200/50 w-28 p-2 rounded-lg text-sm">
                    <h3>{client.incidentes_abiertos}</h3>
                    <p>Abiertos</p>
                  </Box>
                  <h3 className="text-6xl font-regular">{client.incidentes}</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-gradient-to-r from-yellow-200/50 to-neutral-200  border border-yellow-200 text-yellow-700 w-full p-6 rounded-lg drop-shadow-xl">
            <Box className="flex flex-col ">
              <h2 className="text-xl text-end text-neutral-800 font-semibold mb-2">
                Tareas
              </h2>
              <Box className="flex justify-between gap-16">
                <BsCheck2Square className="text-5xl" />
                <Box className="flex gap-2">
                  <Box className="flex flex-col text-end bg-yellow-200/50 w-28 p-2 rounded-lg text-sm">
                    <h3>{client.tareas_vencidas}</h3>
                    <p>Vencidas</p>
                  </Box>
                  <h3 className="text-6xl font-regular">{client.tareas}</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-gradient-to-r from-green-200/50 to-neutral-200   border border-green-200 text-green-700 w-full p-6 rounded-lg drop-shadow-xl">
            <Box className="flex flex-col ">
              <h2 className="text-xl text-end text-neutral-800 font-semibold mb-2">
                Análisis de aceite
              </h2>
              <Box className="flex justify-between gap-16">
                <SlChemistry className="text-5xl" />
                <Box className="flex gap-2">
                  <Box
                    className="flex flex-col text-end bg-green-200/50 w-28 p-2 rounded-lg text-sm"
                    text-sm
                  >
                    <h3>{client.analisis_progreso}</h3>
                    <p>En progreso</p>
                  </Box>
                  <h3 className="text-6xl font-regular">{client.analisis}</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bg-gradient-to-r from-blue-200/50 to-neutral-200 border border-blue-200 text-blue-700 w-full p-6 rounded-lg drop-shadow-xl">
            <Box className="flex flex-col ">
              <h2 className="text-xl text-end text-neutral-800 font-semibold mb-2">
                Equipos
              </h2>
              <Box className="flex justify-between gap-16">
                <PiFactory className="text-5xl" />
                <Box className="flex gap-2">
                  <Box className="flex flex-col text-end bg-blue-200/50 w-28 p-2 rounded-lg text-sm">
                    <h3>{client.equipos_componentes}</h3>
                    <p>Componentes</p>
                  </Box>
                  <h3 className="text-6xl font-regular">{client.equipos}</h3>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
      <Box className="flex flex-col gap-8 mt-6   p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-black/70">Sectores</h2>
          <Button colorScheme="blue">Explorar secotres</Button>
        </div>
        <HStack className="p-6 border-solid border bg-white border-neutral-600/20 rounded-lg">
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <h3>Línea 4</h3>
            <div className="flex gap-2 text-black/50">
              <Box className="flex items-center">
                <AiOutlineExclamationCircle />
                <p>{client.incidentes}</p>
              </Box>
              <Box className="flex items-center">
                <BsCheck2Square />
                <p>{client.tareas}</p>
              </Box>
              <Box className="flex items-center">
                <SlChemistry />
                <p>{client.analisis}</p>
              </Box>
            </div>
          </Box>
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <h3>Línea 1</h3>
            <div className="flex gap-2 text-black/50">
              <Box className="flex items-center">
                <AiOutlineExclamationCircle />
                <p>31</p>
              </Box>
              <Box className="flex items-center">
                <BsCheck2Square />
                <p>44</p>
              </Box>
              <Box className="flex items-center">
                <SlChemistry />
                <p>0</p>
              </Box>
            </div>
          </Box>
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <h3>Línea 2</h3>
            <div className="flex gap-2 text-black/50">
              <Box className="flex items-center">
                <AiOutlineExclamationCircle />
                <p>31</p>
              </Box>
              <Box className="flex items-center">
                <BsCheck2Square />
                <p>44</p>
              </Box>
              <Box className="flex items-center">
                <SlChemistry />
                <p>0</p>
              </Box>
            </div>
          </Box>
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <h3>Línea 3</h3>
            <div className="flex gap-2 text-black/50">
              <Box className="flex items-center">
                <AiOutlineExclamationCircle />
                <p>31</p>
              </Box>
              <Box className="flex items-center">
                <BsCheck2Square />
                <p>44</p>
              </Box>
              <Box className="flex items-center">
                <SlChemistry />
                <p>0</p>
              </Box>
            </div>
          </Box>
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <h3>Línea 5</h3>
            <div className="flex gap-2 text-black/50">
              <Box className="flex items-center">
                <AiOutlineExclamationCircle />
                <p>31</p>
              </Box>
              <Box className="flex items-center">
                <BsCheck2Square />
                <p>44</p>
              </Box>
              <Box className="flex items-center">
                <SlChemistry />
                <p>0</p>
              </Box>
            </div>
          </Box>
        </HStack>
      </Box>
      <Box className="flex flex-col gap-8 mt-6 bg-neutral-white  p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-black/70">Info</h2>
        </div>
        <Box className="flex gap-4  p-6 border-solid border bg-white border-neutral-600/20 rounded-lg">
          <Box className="col-span-1 w-full bg-gradient-to-r from-neutral-100 to-white rounded-lg border border-black/20 p-8 drop-shadow-xl">
            <div className="flex items-center gap-1 text-black/50 text-sm">
              <HiOutlineNewspaper />
              <h3>Description</h3>
            </div>
            <p>{client.descripcion}</p>
          </Box>
        </Box>
      </Box>
      <Center as="section" p={"2%"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          className="w-fit"
        >
          <Image
            objectFit="contain"
            maxW={{ base: "100%", sm: "500px" }}
            src={equipo.imagen}
            alt={equipo.modelo}
            className="bg-neutral-200"
          />
          <Stack className="py-6 px-16">
            <CardBody>
              <Heading
                size="md"
                className="flex gap-4 items-center justify-between mb-4"
              >
                <Box>
                  <Box className="flex gap-4 items-center">
                    <PiFactory className="text-2xl" />
                    <h2 className="font-semibold text-2xl">{equipo.serial}</h2>
                    <Box className="bg-neutral-200 w-fit rounded-full px-2 py-1 text-sm font-light">
                      {equipo.estado}
                    </Box>
                  </Box>
                  <p className="font-light text-md opacity-75 mt-2">
                    {equipo.area}
                  </p>
                </Box>
                <button>
                  <GoLinkExternal />
                </button>
              </Heading>

              <Text py="2">
                <h2 className="mb-8 font-bold">Equipo</h2>
                <Box className="grid grid-cols-2 grid-rows-1 gap-72">
                  <Box className="flex flex-col gap-4">
                    <Box>
                      <h3 className="text-sm font-thin ">Tipo de equipo</h3>
                      <p>{equipo.tipo_equipo}</p>
                    </Box>
                    <Box>
                      <h3 className="text-sm font-thin ">Descripción</h3>
                      <p>{equipo.descripcion}</p>
                    </Box>
                    <Box>
                      <h3 className="text-sm font-thin ">Numero de serie</h3>
                      <p>{equipo.numero_serie}</p>
                    </Box>
                  </Box>
                  <Box className="flex flex-col gap-4">
                    <Box>
                      <h3 className="text-sm font-thin ">Fabricante</h3>
                      <p>{equipo.fabricante}</p>
                    </Box>
                    <Box>
                      <h3 className="text-sm font-thin ">Modelo</h3>
                      <p>{equipo.modelo}</p>
                    </Box>
                  </Box>
                </Box>
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Stack>
        </Card>
      </Center>
    </main>
  );
}
