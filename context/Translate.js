

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
    musics_FR: 'Musiques'

}