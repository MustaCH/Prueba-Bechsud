// INFORMACIÓN DEL EQUIPO

interface Machine {
  id: number;
  technicalLocation: string;
  description: string | null;
  model: string;
  serialNumber: string;
  machineTypeName: string;
  brandName: string;
  criticality: string;
  sector: string;
  photo: string;
}

interface ComponentType {
  es: string;
  en: string;
  pt: string;
}

interface Component {
  id: number;
  part: string;
  componentType: string;
  brandName: string | null;
  model: string | null;
  description: string | null;
  serialNumber: string | null;
}

interface Point {
  id: number;
  identifier: string;
  description: string;
}

interface MachineData {
  machine: Machine;
  component: Component;
  point: Point;
}

export const machineData: MachineData = {
  machine: {
    id: 74,
    technicalLocation: "Compresor K53100",
    description: null,
    model: "WRV321 132",
    serialNumber: "K53100",
    machineTypeName: "Compresor",
    brandName: "Howden",
    criticality: "NonCritical",
    sector: "Capex",
    photo:
      "https://www.laindustrialeventos.com/wp-content/uploads/Clasificacion-de-Equipos-Industriales.jpg",
  },
  component: {
    id: 85,
    part: "Compresor K53100",
    componentType: "Compresor de Gas",
    brandName: null,
    model: null,
    description: null,
    serialNumber: null,
  },
  point: {
    id: 90,
    identifier: "1",
    description: "AF - Toma muestra Analisis Aceite",
  },
};

// INFORMACIÓN DEL ANÁLISIS DE Aceite

interface ResultProperties {
  key: string;
  value: Array<string | number | null>;
  label: string;
  dataType: string;
}

interface Result {
  physicalProperties: ResultProperties[];
  wearMetals: ResultProperties[];
  contaminants: ResultProperties[];
  diagnosis: ResultProperties[];
}

interface TestSample {
  id: number;
  sampleDate: string;
  hoursOnFluid: number;
  hoursOnMachine: number;
  product: string;
  status: string;
  semaphore: string;
  diagnostic: string;
  result: Result;
  observation: string | null;
  trackingNumber: number;
  laboratory: string;
  bottleIdentifier: string;
}

export const oilAnalysisData: TestSample = {
  id: 2002,
  sampleDate: "2023-10-09T00:00:00",
  hoursOnFluid: 984,
  hoursOnMachine: 39412,
  product: "Kluber Summit PGS 150",
  status: "Finalized",
  semaphore: "Green",
  diagnostic:
    "El fluido aparenta estar en buenas condiciones.\nRealizar nueva muestra en 3 meses.",
  result: {
    physicalProperties: [
      {
        key: "SampleDate",
        value: [
          "2019-05-21T00:00:00",
          "2019-07-11T00:00:00",
          "2019-09-17T00:00:00",
          "2019-11-19T00:00:00",
          "2020-01-06T00:00:00",
        ],
        label: "Fecha de muestra",
        dataType: "DateTime",
      },
      {
        key: "Product",
        value: [
          "CPI-1010-100",
          "CPI-1010-100",
          "CPI-1010-100",
          "CPI-1010-100",
          "CPI-1010-100",
        ],
        label: "Producto",
        dataType: "String",
      },
      {
        key: "HoursOnMachine",
        value: [null, 6655, 8174, 738, 10336],
        label: "Horas de Máquina",
        dataType: "Integer",
      },
      {
        key: "HoursOnFluid",
        value: [4864, 144, 1663, 9193, 1150],
        label: "Horas de Lubricante",
        dataType: "Integer",
      },
      {
        key: "WaterByKarlsFischer",
        value: [1430, 93, 123, 120, 58],
        label: "Agua por Karl Fischer",
        dataType: "Double",
      },
      {
        key: "Viscosity40cSt",
        value: [74, 84.2, 83.16, 66.23, 58.14],
        label: "Viscosidad 40°C (cSt)",
        dataType: "Double",
      },
      {
        key: "ParticleCount",
        value: [
          "24 / 23 / 19",
          "24 / 21 / 17",
          "23 / 20 / 14",
          "24 / 24 / 23",
          "21 / 18 / 15",
        ],
        label: "Conteo de Partículas (ISO)",
        dataType: "String",
      },
      {
        key: "TotalAcidNumber",
        value: [0.9, 0.962, 0.807, 0.784, 0.443],
        label: "TAN Acido Total",
        dataType: "Double",
      },
    ],
    wearMetals: [
      {
        key: "SilverPpm",
        value: [0, 0, 0, 0, 0],
        label: "Plata",
        dataType: "Integer",
      },
      {
        key: "AluminumPpm",
        value: [0, 0, 0, 0, 0],
        label: "Aluminio",
        dataType: "Integer",
      },
      {
        key: "ChromiumPpm",
        value: [0, 0, 0, 0, 0],
        label: "Cromo",
        dataType: "Integer",
      },
      {
        key: "CopperPpm",
        value: [0, 0, 0, 0, 0],
        label: "Cobre",
        dataType: "Integer",
      },
      {
        key: "IronPpm",
        value: [85, 15, 12, 21, 7],
        label: "Hierro",
        dataType: "Integer",
      },
      {
        key: "NickelPpm",
        value: [0, 0, 0, 0, 0],
        label: "Nickel",
        dataType: "Integer",
      },
      {
        key: "LeadPpm",
        value: [1, 0, 0, 0, 0],
        label: "Plomo",
        dataType: "Integer",
      },
      {
        key: "TinPpm",
        value: [0, 0, 0, 0, 0],
        label: "Estaño",
        dataType: "Integer",
      },
      {
        key: "TitaniumPpm",
        value: [1, 0, 0, 0, 0],
        label: "Titanio",
        dataType: "Integer",
      },
      {
        key: "ManganesePpm",
        value: [2, null, null, null, null],
        label: "Manganeso",
        dataType: "Integer",
      },
      {
        key: "VanadiumPpm",
        value: [0, 0, 0, 0, 0],
        label: "Vanadio",
        dataType: "Integer",
      },
    ],
    contaminants: [
      {
        key: "BariumPpm",
        value: [15, 1, 0, 0, 0],
        label: "Bario",
        dataType: "Integer",
      },
      {
        key: "CalciumPpm",
        value: [114, 39, 21, 12, 1],
        label: "Calcio",
        dataType: "Integer",
      },
      {
        key: "BoronPpm",
        value: [0, null, null, null, null],
        label: "Boro",
        dataType: "Integer",
      },
      {
        key: "PotassiumPpm",
        value: [21, null, null, null, null],
        label: "Potasio",
        dataType: "Integer",
      },
      {
        key: "MagnesiumPpm",
        value: [20, 3, 0, 0, 0],
        label: "Magnesio",
        dataType: "Integer",
      },
      {
        key: "MolybdenumPpm",
        value: [0, 0, 0, 0, 0],
        label: "Molibdeno",
        dataType: "Integer",
      },
      {
        key: "SodiumPpm",
        value: [0, 46, 24, 14, 0],
        label: "Sodio",
        dataType: "Integer",
      },
      {
        key: "PhosphorusPpm",
        value: [94, 170, 56, 14, 5],
        label: "Fósforo",
        dataType: "Integer",
      },
      {
        key: "SiliconPpm",
        value: [2, 0, 0, 0, 0],
        label: "Silicio",
        dataType: "Integer",
      },
      {
        key: "ZincPpm",
        value: [19, 9, 4, 7, 4],
        label: "Zinc",
        dataType: "Integer",
      },
    ],
    diagnosis: [
      {
        key: "Semaphore",
        value: ["Red", "Red", "Red", "Red", "Yellow"],
        label: "Diagnóstico",
        dataType: "Semaphore",
      },
    ],
  },
  observation: null,
  trackingNumber: 231023,
  laboratory: "ALS",
  bottleIdentifier: "2310011732",
};
