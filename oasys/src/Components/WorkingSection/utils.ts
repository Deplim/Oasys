import axios, { AxiosResponse } from 'axios';
import { ACTION, BoxObject, MouseMode, WorkState } from './types';

function reducer(state: WorkState, action: ACTION): WorkState {
  switch (action.type) {
    case 'CHANGE_MOUSEMODE':
      return { ...state, mouseMode: action.nextMode };
    case 'INIT_STATE':
      return { ...state, ...action.initState };
    case 'ADD_OBJECT':
      const nextLength = state.objectListLength + 1;
      const new_object: BoxObject = {
        ObjectId: nextLength,
        ClassName: [],
        Bbox: action.newPoint,
        Extra: [
          {
            text: '',
          },
        ],
      };
      return {
        ...state,
        objectListLength: nextLength,
        objectList: [...state.objectList, new_object],
      };
    default:
      throw new Error('undefined action type: WorkingSection/reducer.js');
  }
}

const serverURL = `http://35.197.111.137:5000`;
// const proxyURL = '';

function getImageInfo(imageID: number): Promise<WorkState> {
  const imageURL404 = 'img/test_image.jpg';
  const imageURL = `${serverURL}/image_info/${imageID}`;
  const mouseMode: MouseMode = 'MOVE';
  console.log(imageURL);
  const imagePromise = axios
    .get(imageURL)
    .then((response: AxiosResponse) => {
      const { statusText } = response;
      const { imageURL, imageName, annotation } = response.data;
      const { ObjectList, ClassList, TagList } = annotation;
      const objectListLength = ObjectList.length;
      return {
        mouseMode,
        statusText,
        imageURL,
        imageName,
        objectListLength,
        objectList: ObjectList,
        classList: ClassList,
        tagList: TagList,
      };
    })
    .catch((error) => {
      return {
        mouseMode,
        statusText: error.response.statusText,
        imageURL: imageURL404,
        imageName: 'File Not Found',
        objectListLength: 0,
        objectList: [],
        classList: [],
        tagList: [],
      };
    });
  return imagePromise;
}

export function dummyFetchFileInfo() {
  // http://35.197.111.137:5000/image_info/<id>
  return getImageInfo(1);
}

export default reducer;