import { createContext, useState, useEffect } from "react";

const INITIAL_VALUES: boolean = true;

const LoadingContext = createContext(INITIAL_VALUES);

const LoadingProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(INITIAL_VALUES);

    const TIMEOUT_TIMER = 3000;

    useEffect(() => {
        
        setTimeout(() => {
            setLoading(prev => !prev);
        }, TIMEOUT_TIMER)

    }, []);

    return (
        <LoadingContext.Provider value={loading}>
            {children}
        </LoadingContext.Provider>
    )
    
};

export { LoadingContext, LoadingProvider };