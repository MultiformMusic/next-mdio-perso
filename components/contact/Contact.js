import {useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import SectionHeader from '../SectionHeader';
import { getTranslation } from 'context/Translate';
import { Rotate } from 'react-awesome-reveal';

export const Contact = ({sectionDescription, language}) => {


    const { register, handleSubmit, watch, errors } = useForm();

    const [disabledButton, setDisabledButton] = useState(false);
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const contactDescription = sectionDescription.filter(item => item.name === 'Contact')[0];

    // const onSubmit = event => {

    //     event.preventDefault();

    //     const datas = {
    //         name,
    //         email,
    //         message
    //     };

    //     console.log(datas);
    // }

    const watchName = watch("name", "");
    const watchEmail = watch("email", "");
    const watchMessage = watch("message", "");

    const onSubmit = data => {

        console.log(data);
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
            <h6 className="text-info">{getTranslation('contactMandatory', language)}</h6>
            
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form pb-5 mb-5">

                <div className="py-4" mt-2>
                    {errors.name && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <input type="text" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactName', language)}
                            name="name" 
                            // value={name}
                            // onChange={event => setName(event.target.value)}
                            maxLength="50" 
                            ref={register({ required: true })} />
                    <label className="label">{getTranslation('contactName', language)}</label>
                </div>
                <div className="py-4 mt-4">
                    {errors.email && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <input type="email" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactEmail', language)}
                            name="email" 
                            // value={email}
                            // onChange={event => setEmail(event.target.value)}
                            maxLength="50" 
                            ref={register({ required: true })}/>
                    <label className="label">{getTranslation('contactEmail', language)}</label>
                </div>
                <div className="py-4 mb-3 mt-4">  
                    {errors.message && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <textarea 
                            className="message"
                            id="message" rows="4" 
                            placeholder="message"
                            name="message"
                            // value={message}
                            // onChange={event => setMessage(event.target.value)}
                            maxLength="250"
                            ref={register({ required: true })}>
                    </textarea>       
                </div>  
                <div className="button-container text-center">
                    <Button type="submit" variant="primary" disabled={watchName === '' || watchEmail === '' || watchMessage === ''} >
                        {getTranslation('contactSend', language)}
                    </Button>
                </div>
            </form>
            </Rotate>
        </div>

    </section>
    )
}
