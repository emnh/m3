const UnitType = require('../UnitType.js').UnitType;

const baseRotation = new THREE.Vector3(-Math.PI / 2, 0, -Math.PI / 2);
const baseScale = 0.2;
const defaultSequence = "Walk";
const baseSpeed = 0.8;

const defaults = {
  rotation: baseRotation,
  scale: baseScale,
  sequence: defaultSequence,
  type: UnitType.Ground,
  moveSpeed: baseSpeed,
};

export const M3Models = [
  {
    name: "Drone",
    path: "assets/units/zerg/drone/drone.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Baneling",
    path: "assets/units/zerg/baneling/baneling.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Zergling",
    path: "assets/units/zerg/zergling/zergling.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Roach",
    path: "assets/units/zerg/roach/roach.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Hydralisk",
    path: "assets/units/zerg/hydralisk/hydralisk.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Ultralisk",
    path: "assets/units/zerg/ultralisk/ultralisk.m3",
    scale: baseScale * 0.6,
    materialHack: true,
    layers: [0]
  },
  {
    name: "SCV",
    path: "assets/units/terran/scv/scv.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Marine",
    path: "assets/units/terran/marine/marine.m3",
  },
  {
    name: "Marauder",
    path: "assets/units/terran/marauder/marauder.m3",
  },
  {
    name: "Thor",
    path: "assets/units/terran/thor/thor.m3",
    rotation: baseRotation,
    scale: baseScale * 0.4,
    moveSpeed: baseSpeed * 0.3,
    materialHack: true,
  },
  {
    name: "Zealot",
    path: "assets/units/protoss/zealot/zealot.m3",
    scale: baseScale * 0.8,
  },
  {
    name: "Stalker",
    path: "assets/units/protoss/stalker/stalker.m3",
    scale: baseScale * 0.6,
  },
  {
    name: "Immortal",
    path: "assets/units/protoss/immortal/immortal.m3",
    scale: baseScale * 0.6,
    moveSpeed: baseSpeed * 0.6,
  },
  {
    name: "Probe",
    path: "assets/units/protoss/probe/probe.m3",
  },
  {
    name: "VoidRay",
    path: "assets/units/protoss/voidray/voidray.m3",
    type: UnitType.Air,
    scale: baseScale * 0.8,
    layers: [1],
  },
//  {
//    name: "CommandCenter",
//    path: "assets/buildings/terran/commandcenter/commandcenter.m3",
//    type: UnitType.Ground,
//    scale: baseScale * 0.8,
//    sequence: "Morph A",
//    materialHack: true,
//  },
//  {
//    name: "SiegeTankMorph",
//    path: "assets/units/terran/siegetankmorph/siegetankmorph.m3",
//    sequence: "Morph End",
//  },
];

for (const model of M3Models) {
  for (const def in defaults) {
    if (model[def] === undefined) {
      model[def] = defaults[def];
    }
  }
}

const CORSPROXY = "http://crossorigin.me";
//const CORSPROXY = "http://alexis.lart.no:5179/";

export function mpqFile(path) {
    if (path === "ground.png" ||
        path === "sky.png" ||
        path === "water.png") {
      const newPath = CORSPROXY + "http://viewer.hiveworkshop.com/images/" + path;
      return newPath;
    }
    //  note that for a file to be available, its m3 model must have been
    //  opened at least once in hiveworkshop viewer, for example:
    //  http://viewer.hiveworkshop.com/?q=Assets/units/zerg/baneling/baneling.m3
    return CORSPROXY + "http://www.hiveworkshop.com/model_files/Liberty.SC2Mod/base.SC2Assets/" + path;
};

