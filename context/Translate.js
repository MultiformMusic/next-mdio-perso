

export const  getTranslation = (text, language) => Translate[text + "_" + language.toUpperCase()] || '';

const Translate = {
    home_EN: 'HOME',
    home_FR: 'ACCUEIL',
    portfolios_EN: 'PORTFOLIOS',
    portfolios_FR: 'PORTFOLIOS',
}