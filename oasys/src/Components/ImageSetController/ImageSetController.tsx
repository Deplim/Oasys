import React from 'react';
import { DatasetInfo } from '../../Pages/ListImageSet';

export type ImageSetControllerProps = {
  id: number;
  data: DatasetInfo;
};

function ImageSetController({ id }: ImageSetControllerProps) {
  return (
    <>
      <div>ImageSetController</div>
    </>
  );
}

export default ImageSetController;