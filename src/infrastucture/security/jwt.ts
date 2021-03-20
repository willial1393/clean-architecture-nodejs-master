import {environment} from '../../environment';
import jwtAuthz from 'express-jwt-authz';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkToken = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${environment.auth0.domain}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: environment.auth0.audience,
    issuer: `https://${environment.auth0.domain}/`,
    algorithms: ['RS256']
});

const checkScopes = jwtAuthz;

export const JWT = {
    checkToken,
    checkScopes
};
