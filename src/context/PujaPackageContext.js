import { createContext, useContext, useState } from 'react';
import PujaPackageData from '../constants/PujaPackageData.js';

const PujaPackageContext = createContext();

export const usePujaPackageContext = () => useContext(PujaPackageContext);

const PujaPackageProvider = ({ children }) => {
    const [packages, setPackages] = useState(PujaPackageData);

    return (
        <PujaPackageContext.Provider value={{ packages }}>
            {children}
        </PujaPackageContext.Provider>
    )
}

export default PujaPackageProvider;
