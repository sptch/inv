'use client';

import styled from 'styled-components';
import { Suspense, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  TransformControls,
  ContactShadows,
  useGLTF,
  useCursor,
  Stage,
  Bounds,
} from '@react-three/drei';
import { SpeckleObjects } from './canvas/SpeckleObjects';
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
} from 'recoil';
// import VieportToolbar from 'containers/VieportToolbar';
import { ViewOption } from 'common';
import { modes, Mode, models } from 'common';
import { SpeckleObject } from 'common';

type ViewerProps = {
  speckleObjects?: SpeckleObject[];
};

function Viewer({ speckleObjects }: ViewerProps) {
  // const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas dpr={[1, 2]} camera={{ position: [-40, 20, 40], fov: 50 }}>
        {/* <RecoilBridge> */}
        {/* Fill */}
        <ambientLight intensity={0.1} />
        {/* Main */}
        <directionalLight
          position={[1, 10, -2]}
          intensity={1}
          shadow-camera-far={70}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        {/* Strip */}
        <directionalLight position={[-10, -10, 2]} intensity={3} />
        {/* Ground */}
        <Suspense fallback={null}>
          <Bounds observe margin={2}>
            {speckleObjects?.map((object) => (
              <SpeckleObjects
                key={object?.objectId}
                objectUrl={`${object?.server}/streams/${object?.streamId}/objects/${object?.objectId}`}
              />
            ))}
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault />
        {/* </RecoilBridge> */}
      </Canvas>
    </Suspense>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #a3a3a3;
`;

export default function PageViewer() {
  // const [modelMode, setModelMode] = useRecoilState(atoms.modelMode);
  // const [speckleObjects, setSpeckleObjects] = useState<SpeckleObject[]>([]);

  const speckleObjects = [
    {
      objectId: '6460234e18f90d28d3f05056991bbeb6',
      streamId: '6c18eaf66a',
      server: 'https://speckle.xyz',
    },
  ];

  // useEffect(() => {
  //   const speckleObjects: SpeckleObject[] = [];
  //   const mode = filterMode(modelMode, modes);

  //   if (mode) {
  //     mode.default_models?.forEach((model) => {
  //       const m = models.find((m) => m.id === model);
  //       if (
  //         m &&
  //         m.source.type == 'speckle' &&
  //         m.source.speckle &&
  //         m.source.speckle.objectId
  //       ) {
  //         speckleObjects.push(m.source.speckle);
  //       }
  //     });
  //     mode.background_models?.forEach((model) => {
  //       const m = models.find((m) => m.id === model);
  //       if (
  //         m &&
  //         m.source.type == 'speckle' &&
  //         m.source.speckle &&
  //         m.source.speckle.objectId
  //       ) {
  //         speckleObjects.push(m.source.speckle);
  //       }
  //     });
  //     setSpeckleObjects(speckleObjects);
  //   }
  // }, [modelMode, setModelMode]);

  return (
    <Wrapper>
      <Viewer speckleObjects={speckleObjects} />
    </Wrapper>
  );
}

function filterMode(modeId: ViewOption, modes: Mode[]) {
  return modes.filter((mode) => mode.id === modeId)[0];
}
