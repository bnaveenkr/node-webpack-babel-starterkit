import url from 'url';

import handlers from './handlers';

function route(req, res, next) {
    const pathname = url.parse(req.url).pathname;

    req.logger.info(`Routing request for ${pathname}`);

    if (pathname === '/health') {
        return handlers.healthHandler(req, res, next);
    } else {
        return next(Error(`Unknown route ${pathname}`));
    }
}

export default route;
