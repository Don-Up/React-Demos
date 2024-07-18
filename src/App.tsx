import React from 'react';
import './App.css';
import {ErrorBoundaryPage} from "./errorboundary/ErrorBoundaryPage";
import HOCLoadingPage from "./hoc/HOCPage";
import {ContextPage} from "./context/ContextPage";
import {ReducerPage} from "./reducer/ReducerPage";
import {StatePage} from "./state/StatePage";
import {EffectPage} from "./effect/EffectPage";
import {StyledComponentPage} from "./styledcomponent/StyledComponentPage";
import {UseMemoPage} from "./memo/UseMemoPage";
import {ReactMemoPage} from "./memo/ReactMemoPage";
import {CSSPage} from "./css/CSSPage";
import {TransitionPage} from "./animation/TransitionPage";
import {AnimationPage} from "./animation/AnimationPage";
import {AnimateCSSPage} from "./animation/AnimateCSSPage";
import {JSAnimPage} from "./animation/JSAnimPage";
import {I18nPage} from "./i18n/I18nPage";
import {RefPage} from "./ref/RefPage";
import {ForwardRefPage} from "./ref/ForwardRefPage";
import {ForwardRefPage1} from "./ref/ForwardRefPage1";
import {data} from "autoprefixer";
import {FormPage} from "./form/FormPage";
import {DataTransPage} from "./datatransmisson/DataTransPage";
import {ReduxPage} from "./redux/ReduxPage";
import {Provider} from "react-redux";
import store from "./redux/js/store";
import {FlexPage} from "./tailwind/FlexPage";
import {TextPage} from "./tailwind/TextPage";
import {SizePage} from "./tailwind/SizePage";
import {RouterPage} from "./router/RouterPage";
import {RTGPage} from "./animation/RTGPage";

function App() {
  return (
    <div className="App">
        <RTGPage/>
    </div>
  );
}

export default App;
