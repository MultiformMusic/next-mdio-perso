import { useState, useContext, useMemo } from "react";
import { SiteConfiguration, SiteContext } from 'context/SiteContext';

const SiteProvider = ({children}) => {

    const [language, setLanguage] = useState(SiteConfiguration.language);
    const {projectId} = SiteConfiguration;

    const changeLanguage = language => {
        setLanguage(language);
    }

    const siteConfigurationApi = useMemo(() => {
        return {
            language,
            changeLanguage,
            projectId
        }
    }, [language, projectId]);

    return (
        <SiteContext.Provider value={siteConfigurationApi}>
            {children}
        </SiteContext.Provider>
    )
    
}


export const useConfiguration = () => useContext(SiteContext);

export default SiteProvider;