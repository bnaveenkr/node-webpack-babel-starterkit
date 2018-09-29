import http from 'http';

import logger from './logger';
import router from './router';

class Server {
    constructor(config) {
        this.port = config.get('server:port');
    }

    onRequest = (req, res) => {

        function next(err) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write(err.message);
            }
            res.end();
            req.logger.info(`Completed request in ${Date.now() - req.startTime} ms`);
        }

        req.logger = logger;
        req.startTime = Date.now();

        router(req, res, next);
    };

    start() {
        http.createServer(this.onRequest)
            .listen(this.port, (err) => {
                if(err) {
                    console.log('Error starting server', err); //eslint-disable no-console
                }
                console.log(`Listening on http://localhost:${this.port}`); //eslint-disable no-console
            });
    }
}

export default Server;
