import {config} from 'dotenv';

config();

export const environment = {
    production: process.env.PRODUCTION,
    mongo_uri: process.env.MONGO_URI,
    auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENTID,
        audience: process.env.AUTH0_AUDIENCE
    }
};

export function isProduction(): boolean {
    return environment.production === 'true';
}

