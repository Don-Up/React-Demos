import React, { useState, useEffect } from 'react';

function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }, []);

        if (isLoading) {
            return <div>Loading...</div>;
        }

        // @ts-ignore
        return <WrappedComponent {...props} />;
    };
}

export default withLoading;