import { Mode, Model } from "common";

export const models: Model[] = [
  {
    id: "structure",
    name: "Structural Model",
    type: "elements",
    description:
      "The structural model is a 3D model of the building, based on the architectural drawings. It is a representation of the building’s structure, including the walls, floors, and ceilings. The structural model is the basis for the 3D model of the building.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "str",
        objectId: "6460234e18f90d28d3f05056991bbeb6",
      },
    },
  },
  {
    id: "structure_analytical",
    name: "Analytical Structural Model",
    type: "elements",
    description:
      "The structural model is a 3D model of the building, based on the architectural drawings. It is a representation of the building’s structure, including the walls, floors, and ceilings. The structural model is the basis for the 3D model of the building.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "str/analytical",
      },
    },
  },
  {
    id: "facade",
    name: "Facade Model",
    type: "elements",
    description: "The facade model is a 3D model of the building’s facade.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "arch/facade",
        objectId: "2b610babaa896b3a730f0699ca0c94d2",
      },
    },
  },
  {
    id: "context_buildings",
    name: "Context Model",
    type: "buildings",
    description: "The context model is a 3D model of the building’s context.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "context/buildings",
      },
    },
  },
  {
    id: "context_trees",
    name: "Context Model",
    type: "trees",
    description: "The context model is a 3D model of the building’s context.",
    source: {
      type: "file",
      url: "@assets/models/context_trees.glb",
    },
  },
  {
    id: "context_terrain",
    name: "Context Model",
    type: "terrain",
    description: "The context model is a 3D model of the building’s context.",
    source: {
      type: "file",
      url: "@assets/models/context_terrain.glb",
    },
  },
  {
    id: "spaces_volume",
    name: "Spaces Model",
    type: "elements",
    description:
      "The spaces model is a 3D model of the building, based on the architectural drawings. It is a representation of the building’s spaces, including the rooms, corridors, and staircases. The spaces model is the basis for the 3D model of the building.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "spaces/volume",
        objectId: "4d1806687d95911a89ca04bd32c3c6c1",
      },
    },
  },
  {
    id: "spaces_footprint",
    name: "Spaces Footprint",
    type: "elements",
    description:
      "The spaces model is a 3D model of the building, based on the architectural drawings. It is a representation of the building’s spaces, including the rooms, corridors, and staircases. The spaces model is the basis for the 3D model of the building.",
    source: {
      type: "speckle",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "spaces/footprint",
        objectId: "b8a41ed8daff3a3799ed97bb2e759ef0",
      },
    },
  },
  {
    id: "pointcloud_220401",
    name: "Theater after explosion",
    type: "pointcloud",
    period: "aftermath",
    description: "The point cloud of the building, after the explosion.",
    source: {
      type: "3dtiles",
      url: "https://url/tileset.json",
    },
  },
  {
    id: "pointcloud_220601",
    name: "Theater ander russian control",
    type: "pointcloud",
    period: "occupation",
    description: "The point cloud of the building, ander russian control.",
    source: {
      type: "3dtiles",
      url: "https://url/tileset.json",
    },
  },
  {
    id: "pointcloud_220000",
    name: "Theater before explosion",
    type: "pointcloud",
    period: "before",
    description: "The point cloud of the building, before explosion.",
    source: {
      type: "3dtiles",
      url: "https://url/tileset.json",
    },
  },
  {
    id: "situated_testimonies",
    name: "Situated Testimonies Models",
    type: "models_sets",
    description: "3D models of spaces, based on the situated testimonies.",
    source: {
      type: "speckle_branches",
      speckle: {
        server: "https://speckle.xyz",
        streamId: "6c18eaf66a",
        branchName: "st",
      },
    },
  },
];

export const modes: Mode[] = [
  {
    id: "overview",
    name: "Overview",
    description: "Overview of the building and its context",
    default_models: [
      "structure",
      "facade",
      "context_buildings",
      "context_trees",
      "context_terrain",
    ],
  },
  {
    id: "spaces",
    name: "Spaces",
    description: "Spaces of the building",
    default_models: ["spaces_volume", "spaces_footprint"],
    background_models: ["structure"],
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      up: [0, 0, 0],
    },
  },
  {
    id: "structural",
    name: "Structural",
    description: "Structural model of the building",
    default_models: ["structure_analytical", "structure"],
    background_models: ["facade"],
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      up: [0, 0, 0],
    },
  },
];

export const periods = [
  {
    id: "before",
    name: "Before",
    description: "Before the explosion.",
    default_models: ["pointcloud_220000"],
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      up: [0, 0, 0],
    },
  },
  {
    id: "aftermath",
    name: "Explosion aftermath",
    description: "Explosion aftermath.",
    default_models: ["pointcloud_220401"],
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      up: [0, 0, 0],
    },
  },
  {
    id: "occupation",
    name: "Russian Occupation",
    description: "Russian Occupation.",
    default_models: ["pointcloud_220601"],
    camera: {
      position: [0, 0, 0],
      target: [0, 0, 0],
      up: [0, 0, 0],
    },
  },
];

const spaceModeFilters = [
  {
    id: 1,
    name: "Filter Spaces",
    type: "radio",
    items: [
      { id: "all", name: "Show All" },
      { id: "explosion", name: "Explosion witness" },
      { id: "witness", name: "Mentioned by the witness" },
    ],
  },
  {
    id: 1,
    name: "Floor",
    type: "radio",
    items: [
      { id: "LB0", name: "Underground floor" },
      { id: "L00", name: "Ground floor" },
      { id: "L01", name: "First floor" },
      { id: "L02", name: "Second floor" },
      { id: "L03", name: "Third floor" },
      { id: "L04", name: "Fourth floor" },
    ],
  },
  {
    id: 2,
    name: "Wing",
    type: "checkbox",
    items: [
      { id: "left", name: "Left" },
      { id: "right", name: "Right" },
    ],
  },
  {
    id: 3,
    name: "Part",
    type: "checkbox",
    items: [
      { id: "front", name: "Front" },
      { id: "rear", name: "Rear" },
      { id: "center", name: "Center" },
    ],
  },
];

const structureModeFilters = [
  {
    id: 1,
    name: "Systems",
    type: "checkbox",
    items: [
      { id: "basement", name: "Basement" },
      { id: "wall-core", name: "Wall Core" },
      { id: "wall-external", name: "Wall External" },
      { id: "wall-internal", name: "Wall Internal" },
      { id: "wall-lagrespan", name: "Wall Lagrespan" },
      { id: "beam", name: "Beam" },
      { id: "truss", name: "Truss" },
      { id: "truss-stage", name: "Truss Stage" },
      { id: "roof-coveting", name: "Roof Covering" },
      { id: "floor-slab", name: "Floor Slab" },
      { id: "floor-monolith", name: "Floor Monolith" },
      { id: "floor-beam-blocks", name: "Floor Beam Blocks" },
      { id: "trees", name: "Trees" },
    ],
  },
  {
    id: 2,
    name: "Bearing",
    type: "checkbox",
    items: [
      { id: "bearing", name: "Bearing" },
      { id: "non-bearing", name: "Non Bearing" },
    ],
  },
  {
    id: 3,
    name: "Explosion Damage",
    //slider for explosion damage range from 0 to 100%
    type: "slider",
    range: true,
  },
  {
    id: 4,
    name: "Fire Damage",
    //slider for fire damage range from 0 to 100%
    type: "slider",
    range: true,
  },
];

// Filter groups for PERIOD MODE
const overviewModeFilters = [
  {
    id: 1,
    name: "Periods",
    type: "radio",
    items: [
      { id: "before-invasion", name: "Before Invasion" },
      { id: "explosion", name: "Explosion" },
      { id: "debris-removal", name: "Debris Removal" },
      { id: "occupation", name: "Occupation" },
    ],
  },
];

export const getSidepanelFilters = () => [
  {
    id: "spaces",
    items: spaceModeFilters,
  },
  {
    id: "structural",
    items: structureModeFilters,
  },
  {
    id: "overview",
    items: overviewModeFilters,
  },
];

export async function fetchFiltersByModeId(id: string | undefined) {
  // Assuming it always return expected categories
  return getSidepanelFilters().find((category) => category.id === id);
}
