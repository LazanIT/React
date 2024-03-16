import { Component } from "react";
import { Link } from "react-router-dom";


class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true }
        
    }

    componentDidCatch(error, info) {
        // Ovako nesto se obicno povezuje na TrackJS ili NewRelic
        console.error("ErrorBoundary component caught an error", error, info);
    }

    render(){
        if (this.state.hasError) {
            return(
                <h2>
                    <Link>Back to the starter page</Link>
                </h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;