export const ARTICLES_PER_PAGE = 6;

const PRODUCTION_DOMAIN = "https://cloud-hosting-eta.vercel.app/api"
const DEVELOPMENT_DOMAIN = "http://localhost:3000/api"
export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;