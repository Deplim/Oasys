import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { appTheme } from './appTheme';
import {
  Annotation,
  Home,
  ListDataset,
  ListImage,
  Login,
  Navigation,
} from './pages';
import { styled } from '@mui/material/styles';

const StyledApp = styled(Box)`
  display: flex;
  flex-flow: column;
  width: 100vw;
  color: black;
`;

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <StyledApp>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="dataset/:id" element={<ListDataset />} />
            <Route path="imageSet/:id" element={<ListImage />} />
          </Route>
          <Route path="/annotation/:id" element={<Annotation />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
