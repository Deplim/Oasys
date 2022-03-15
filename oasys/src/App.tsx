import { ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appTheme } from './colorTheme';
import NavBar from './Components/NavBar/NavBar';
import { Annotation, Home, ListDataset, ListImageSet } from './Pages';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  color: black;
`;

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <StyledApp>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="home" element={<Home />} />
            <Route path="dataset" element={<ListDataset />} />
            <Route path="imageSet/:id" element={<ListImageSet />} />
          </Route>
          <Route path="/annotation/:id" element={<Annotation />} />
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
