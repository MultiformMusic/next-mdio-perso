import { useState, useContext, useMemo } from "react";
import { SiteConfiguration, SiteContext } from 'context/SiteContext';

const SiteProvider = ({children}) => {

    const [language, setLanguage] = useState(SiteConfiguration.language);
    console.log('Site Provider language = ', language);

    const siteConfigurationApi = useMemo(() => {
        return {
            language
        }
    }, [language]);

    return (
        <SiteContext.Provider value={siteConfigurationApi}>
            {children}
        </SiteContext.Provider>
    )
    
}


export const useConfiguration = () => useContext(SiteContext);

export default SiteProvider;