import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ErrorBoundaryPage} from "./errorboundary/ErrorBoundaryPage";
import HOCLoadingPage from "./hoc/HOCPage";
import {ContextPage} from "./context/ContextPage";
import {ReducerPage} from "./reducer/ReducerPage";
import {StatePage} from "./state/StatePage";
import {EffectPage} from "./effect/EffectPage";
import {StyledComponentPage} from "./styledcomponent/StyledComponentPage";

function App() {
  return (
    <div className="App">
      <StyledComponentPage/>
    </div>
  );
}

export default App;
