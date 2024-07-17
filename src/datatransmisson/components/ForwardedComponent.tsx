// src/components/ForwardedComponent.tsx
import React from 'react';

interface ForwardedComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const ForwardedComponent = React.forwardRef<HTMLDivElement, ForwardedComponentProps>(
    ({ className = '', ...props }, ref) => {
        return <div ref={ref} className={`p-4 border rounded ${className}`} {...props} />;
    }
);

export default ForwardedComponent;
