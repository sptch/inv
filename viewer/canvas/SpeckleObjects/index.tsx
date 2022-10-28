import { useLoadObject } from 'common/hooks';
import SpeckleObject from '@/viewer/canvas/SpeckleObject';
import { useEffect, useState } from 'react';

type ObjectsProps = {
  objectUrl: string;
};

export function SpeckleObjects({ objectUrl }: ObjectsProps) {
  const [objects, loader] = useLoadObject(objectUrl);
  const [elements, setElements] = useState<any>();

  useEffect(() => {
    if (objects) {
      const elements = filterObjects(objects);
      setElements(elements);
    }
  }, [objects]);

  return (
    <group position={[0, 0, 0]}>
      {elements?.map((object: any) => (
        <SpeckleObject key={object.id} object={object} loader={loader} />
      ))}
    </group>
  );
}

// filter objects if property displayValue exists
function filterObjects(objects: any[]) {
  const speckle_objects = objects?.filter((object) => object.displayValue);
  // for each speckle_object, attach object from objects to DisplayObjects proprty, which ids match displayValue
  speckle_objects.forEach((object) => {
    object.displayObjects = objects.filter((obj) =>
      object.displayValue.some((value: any) => value.referencedId === obj.id),
    );
  });
  return speckle_objects;
}
