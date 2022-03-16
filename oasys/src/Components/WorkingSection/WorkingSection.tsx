import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { ACTION, WorkState } from './types';
import { getImageInfo, reducer } from './utils';
import { LeftControlPanel } from './LeftControlPanel';
import { MainViewPanel } from './MainViewPanel';
import { RightControlPanel } from './RightControlPanel';

const StyledWorkingSection = styled.article`
  /* 색상 */
  background-color: #26293b;

  /* 정렬 */
  flex: 70 0 0;
  display: flex;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const preLoading: WorkState = {
  statusText: 'PRELOADING',
  mouseMode: 'MOVE',
  imageURL: '',
  imageName: '',
  imageSize: '340 453',
  box_object_list: [],
  selectedBoxList: new Set<number>(),
  category_list: [],
  tag_list: [],
};

export const WorkStore = React.createContext<
  [WorkState, React.Dispatch<ACTION>] | null
>(null);

type WorkingSectionProps = {
  id: number;
};

function WorkingSection({ id }: WorkingSectionProps) {
  const [workState, workDispatch] = useReducer(reducer, preLoading);

  useEffect(() => {
    async function fetchInitStateFromAPI() {
      const initState = await getImageInfo(id);
      workDispatch({
        type: 'INIT_STATE',
        initState: initState,
      });
    }

    fetchInitStateFromAPI();
  }, [id]);

  return (
    <WorkStore.Provider value={[workState, workDispatch]}>
      <StyledWorkingSection>
        <LeftControlPanel />
        <MainViewPanel areaPercent={80} />
        <RightControlPanel areaPercent={20} />
      </StyledWorkingSection>
    </WorkStore.Provider>
  );
}

export default WorkingSection;
