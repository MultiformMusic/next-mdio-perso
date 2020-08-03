import {useState } from 'react';
import { Button } from 'react-bootstrap';
import SectionHeader from '../SectionHeader';
import { getTranslation } from 'context/Translate';
import { Rotate } from 'react-awesome-reveal';

export const Contact = ({sectionDescription, language}) => {

    const [disabledButton, setDisabledButton] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const contactDescription = sectionDescription.filter(item => item.name === 'Contact')[0];

    const onSubmit = event => {

        event.preventDefault();

        const datas = {
            name,
            email,
            message
        };

        console.log(datas);
    }

    return (

    <section className="contact pb-2 mt-4" id="contact">
        <div className="container">
        <Rotate direction="bottom-left" fraction="0.1" triggerOnce>
            <SectionHeader 
                title="contact" 
                subtitle="" 
                description={contactDescription.description[language.toLowerCase()]} 
                language={language}
            />
            <h6 className="text-alert">{getTranslation('contactMandatory', language)}</h6>
            
            <form className="contact-form pb-5 mb-5">

                <div className="py-4">
                    <input type="text" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactName', language)}
                            name="name" 
                            value={name}
                            onChange={event => setName(event.target.value)}
                            maxLength="50" />
                    
                    <label className="label">{getTranslation('contactName', language)}</label>
                </div>
                <div className="py-4">
                    <input type="email" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactEmail', language)}
                            name="email" 
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            maxLength="50" />
                    
                    <label className="label">{getTranslation('contactEmail', language)}</label>
                </div>
                <div className="py-4 mb-3 mt-4">  
                    <textarea 
                            className="message"
                            id="message" rows="4" 
                            placeholder="message"
                            name="message"
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            maxLength="250">
                    </textarea>       
                </div>  
                <div className="button-container text-center">
                    <Button onClick={onSubmit} variant="primary" disabled={disabledButton} >{getTranslation('contactSend', language)}</Button>
                </div>
            </form>
            </Rotate>
        </div>

    </section>
    )
}
