import React, {Component, ErrorInfo, ReactNode} from "react";

interface ErrorBoundaryState {
    hasError: boolean
    error: Error|null
    errorInfo: ErrorInfo|null
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {

    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {hasError: true, error, errorInfo: null}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({error, errorInfo})
    }

    render() {
        if(this.state.hasError){
            return (<div>Something went wrong</div>)
        }
        return this.props.children
    }

}

export default ErrorBoundary