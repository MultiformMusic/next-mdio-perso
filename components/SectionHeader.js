import { getTranslation } from "context/Translate"

const SectionHeader = ({title, subtitle, numberItem, description, language}) => {

    return (
        <>
            <div style={{position: "relative", top: "-70px", visibility: "hidden"}} id={title} >
            </div>
            <div className="section-title">
                {getTranslation(title, language)} {'-----'} 
                <br/>
                <div className="section-title-number">
                    {numberItem} {' '} {getTranslation(subtitle, language)}
                </div>
            </div>
            <div className="section-description">
                {description} 
            </div>
        </>
    )
}

export default SectionHeader
