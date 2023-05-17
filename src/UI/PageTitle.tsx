import React from 'react';

export const PageTitle: React.FC<{children: React.ReactElement}> = ({children}) => {
    return (
        <h2 className="font-bold text-3xl text-violet-100 text-left mt-4 mb-10">
            {children}
        </h2>
    );
}