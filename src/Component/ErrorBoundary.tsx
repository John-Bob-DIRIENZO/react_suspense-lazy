import React from "react";

interface ErrorBoundaryPropsInterface {
    fallback: JSX.Element
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryPropsInterface> {
    constructor(props: ErrorBoundaryPropsInterface) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: any) {
        return {hasError: true};
    }

    render() {
        // @ts-ignore, TS est un peu bête des fois
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

