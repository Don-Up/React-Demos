// src/components/DataProvider.tsx
import React from "react";

interface DataProviderProps {
    render: (data: string) => React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ render }) => {
    const data = "This is some data from DataProvider";

    return (
        <div>
            {render(data)}
        </div>
    );
};