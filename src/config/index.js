import fs from 'fs';
import path from 'path';
import nconf from 'nconf';

const envOptions = {
    lowerCase: true,
    parseValues: true,
    separator: '__',
};


const defaults = nconf.file({ file: path.join(__dirname, 'config.json') });
nconf.defaults(defaults.get());

const userConfig = path.join(__dirname, '..', 'config.json');
if (fs.existsSync(userConfig)) {
    nconf.overrides(nconf.file(userConfig).get());
}

nconf.argv().env(envOptions);

export default nconf;
