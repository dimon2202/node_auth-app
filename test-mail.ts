import { mailer } from './src/utils/mailer.js';

await mailer.send('bovapam343@mapsguy.com', 'test', 'test123');

console.log('Mail sent');
