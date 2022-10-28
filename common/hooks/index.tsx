import {
  useState,
  useEffect,
  MutableRefObject,
  useRef,
  useCallback,
  RefObject,
} from 'react';
import { BufferGeometry } from 'three';
import ObjectLoader from '@speckle/objectloader';
import Converter from '@/lib/converter/Converter';

import { useRouter } from 'next/router';

export type Geometries = {
  bufferGeometry: BufferGeometry;
  extras?: any;
  geometryType: string;
  meta: any;
};

export function useConvertToBuffer(obj: any, loader?: any) {
  const [buffer, setBuffer] = useState<any>(null);
  const converter = new Converter(loader);

  useEffect(() => {
    if (obj) {
      const type = getSpeckleType(obj);
      const scale = 1;

      const convert = async () => {
        // @ts-ignore
        if (converter[`${type}ToBufferGeometry`]) {
          try {
            // @ts-ignore
            const object: Geometries = await converter[
              `${type}ToBufferGeometry`
            ](obj, scale);
            setBuffer(object);
          } catch (e) {
            // console.warn(`Failed to convert ${type} with id: ${l.id}`, e);
          }
        }
      };

      convert();
    }
  }, [obj]);
  return buffer ? buffer : null;
}

function getSpeckleType(obj: any) {
  let type = 'Base';
  if (obj?.data)
    type = obj?.data?.speckle_type
      ? obj?.data?.speckle_type.split('.').reverse()[0]
      : type;
  else
    type = obj?.speckle_type ? obj?.speckle_type.split('.').reverse()[0] : type;
  return type;
}

export function useLoadObject(objectUrl: string) {
  const [objects, setObjects] = useState<any>();
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (objectUrl) {
      const url = new URL(objectUrl);
      const segments = url.pathname.split('/');
      if (
        segments.length < 5 ||
        url.pathname.indexOf('streams') === -1 ||
        url.pathname.indexOf('objects') === -1
      ) {
        throw new Error('Unexpected object url format.');
      }

      const serverUrl = url.origin;
      const streamId = segments[2];
      const objectId = segments[4];

      const loader = new ObjectLoader({
        serverUrl,
        streamId,
        objectId,
        options: { enableCaching: true },
      });
      const converter = new Converter(loader);

      (async () => {
        let first = true;
        let current = 0;
        let total = 0;
        let viewerLoads = 0;
        let firstObjectPromise = null;
        setObjects(undefined);
        for await (const obj of loader.getObjectIterator()) {
          if (first) {
            firstObjectPromise = converter.traverseAndConvert(
              obj,
              async (objectWrapper: any) => {
                objectWrapper.meta._importedUrl = objectUrl;
                viewerLoads++;
              },
            );
            first = false;
            total = obj.totalChildrenCount;
          }
          setObjects((prev: any) => {
            if (prev) {
              return [...prev, obj];
            }
            return [obj];
          });
        }
      })();
      setLoader(loader);
    }
  }, [objectUrl]);

  return [objects ? objects : [], loader];
}

export default useLoadObject;
