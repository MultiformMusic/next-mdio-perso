import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SectionHeader from '../SectionHeader';
import { getTranslation } from 'context/Translate';
import { Rotate } from 'react-awesome-reveal';
import { messagesCollection } from 'utils/fbase';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required().min(10).max(250)
  });

export const Contact = ({sectionDescription, language}) => {


    const [isSending, setIsSending] = useState(false);
    const [isSendingSuccess, setIsSendingSuccess] = useState(false);
    const [isSendingFailure, setIsSendingFailure] = useState(false);

    const { register, handleSubmit, errors, formState, setValue } = useForm({
        mode: "onChange",
        validationSchema: schema
    });
    const { isValid } = formState;

    const contactDescription = sectionDescription.filter(item => item.name === 'Contact')[0];

    const onSubmit = async (data) => {

        console.log(data);
        console.log("erors", errors);

        try {

            setIsSendingSuccess(false);
            setIsSendingFailure(false);
            setIsSending(true);

            const dt = new Date();

            let date = `${
                dt.getDate().toString().padStart(2, '0')}/${
                (dt.getMonth()+1).toString().padStart(2, '0')}/${
                dt.getFullYear().toString().padStart(4, '0')} ${
                dt.getHours().toString().padStart(2, '0')}:${
                dt.getMinutes().toString().padStart(2, '0')}:${
                dt.getSeconds().toString().padStart(2, '0')}`;

            date = date.split("/").join("-"); 
            await firebase.auth().signInWithEmailAndPassword(process.env.FIRESTORE_LOGIN, process.env.FIRESTORE_PASSWORD);
            await messagesCollection.doc(data.email).collection(date).add(data);

            setValue('name', getTranslation('contactName', language), { shouldValidate: false });
            setValue('email', getTranslation('contactEmail', language), { shouldValidate: false });
            setValue('message', getTranslation('contactMessage', language), { shouldValidate: false });


            setIsSending(false);
            setIsSendingSuccess(true);

            
        } catch (error) {
            console.log("error : ", error);
            setIsSending(false);
            setIsSendingFailure(true);
        }
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

                <div className="py-4 mt-2">
                    {errors.name && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <input type="text" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactName', language)}
                            name="name" 
                            maxLength="50"
                            ref={register()} />
                    <label className="label">{getTranslation('contactName', language)}</label>
                </div>
                <div className="py-4 mt-4">
                    {errors.email && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <input type="email" 
                            className="my-2 p-2 input"
                            placeholder={getTranslation('contactEmail', language)}
                            name="email" 
                            maxLength="50" 
                            ref={register()}/>
                    <label className="label">{getTranslation('contactEmail', language)}</label>
                </div>
                <div className="py-4 mb-3 mt-4">  
                    {errors.message && <div className="ml-4 text-warning">{getTranslation('contactRequire', language)}</div>}
                    <textarea 
                            className="message"
                            id="message" rows="4" 
                            placeholder="message"
                            name="message"
                            maxLength="250"
                            minLength="10"
                            ref={register()}>
                    </textarea>
                </div>  
                <div className="button-container text-center">
                    {isSending && <div className="mb-4 sending-message blink_me">{getTranslation('contactSending', language)}</div>}
                    {!isSending && isSendingSuccess && <div className="mb-4 sending-message-success">{getTranslation('contactSendingSuccess', language)}</div>}
                    {!isSending && isSendingFailure && <div className="mb-4 sending-message-failure">{getTranslation('contactSendingFailure', language)}</div>}
                    <Button type="submit" variant="primary" disabled={!isValid || isSending} >
                        {getTranslation('contactSend', language)}
                    </Button>
                </div>
            </form>
            </Rotate>
        </div>

    </section>
    )
}
