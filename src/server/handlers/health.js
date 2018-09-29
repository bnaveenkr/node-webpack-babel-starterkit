function health(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Healthy');
    next();
}

export default health;
