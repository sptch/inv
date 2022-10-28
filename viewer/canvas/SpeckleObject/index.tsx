import { useBounds, useCursor } from '@react-three/drei';
// import { atoms } from 'common/recoil';
import { SpeckleGeometry } from '@/viewer/canvas/SpeckleGeometry';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import THREE from 'three';

type ObjectProps = {
  object: any;
  loader?: any;
  moveToOrigin?: boolean;
};

export function SpeckleObject({ object, loader }: ObjectProps) {
  // const [preselected, setPreselected] = useState(false);

  const api = useBounds();

  return (
    <group key={object?.id}>
      {object?.displayObjects &&
        object?.displayObjects.map((displayObjects: any) => (
          <SpeckleGeometry
            key={displayObjects?.id}
            // hovered={hovered}
            // preselected={preselected}
            object={displayObjects}
            loader={loader}
          />
        ))}
    </group>
  );
}

export default SpeckleObject;
