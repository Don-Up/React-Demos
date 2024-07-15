import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export const ErrorBoundaryPage: React.FC = () => {

    const ErrorThrowingComponent = () => {
        throw new Error('This is a deliberate error.');
    };

    return (<ErrorBoundary>
        <div>
            <ErrorThrowingComponent/>
        </div>
    </ErrorBoundary>)
}