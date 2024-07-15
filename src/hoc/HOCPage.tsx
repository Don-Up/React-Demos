import React from "react";
import withLoading from "./withLoading";

const HOCPage: React.FC = () => {
    return (<div><h1>HOCPage</h1></div>)
}

const HOCLoadingPage = withLoading(HOCPage)

export default HOCLoadingPage