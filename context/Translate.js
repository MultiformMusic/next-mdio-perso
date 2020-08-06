

export const  getTranslation = (text, language) => Translate[text + "_" + language.toUpperCase()] || '';

const Translate = {
    home_EN: 'Home',
    home_FR: 'Accueil',
    portfolios_EN: 'Portfolios',
    portfolios_FR: 'Portfolios',
    readMore_EN: 'Read More',
    readMore_FR: 'En savoir plus',
    projects_EN: 'Projects',
    projects_FR: 'Projets',
    musics_EN: 'Musics',
    musics_FR: 'Musiques',
    contact_FR: 'Me Contacter',
    contact_EN: 'Get In Touch',
    contactNav_FR: 'Contact',
    contactNav_EN: 'Contact',
    contactMandatory_FR: 'Tous les champs sont obligatoires.',
    contactMandatory_EN: 'All the fields are mandatorie.',
    contactName_FR: 'Nom',
    contactName_EN: 'Name',
    contactEmail_FR: 'Email',
    contactEmail_EN: 'Email',
    contactSend_FR: 'Envoyer',
    contactSend_EN: 'Send',
    contactRequire_FR: 'Ce champ est obligatoire',
    contactRequire_EN: 'This field is required',
    contactSending_FR: 'Envoi en cours...',
    contactSending_EN: 'Sending...',
    contactSendingSuccess_FR: 'Message envoyé, je vous répondrais dès que possible.',
    contactSendingSuccess_EN: 'Message sent, I will answer you as soon as possible.',
    contactSendingFailure_FR: 'Echec de l\'envoi, veuillez réessayer.',
    contactSendingFailure_EN: 'Failed to send, please try again.',
    loadMore_FR: 'Afficher Plus',
    loadMore_EN: 'Load More'

}