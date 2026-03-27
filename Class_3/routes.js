/** 
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Atiqul Bari
 * Date: 03/23/2026
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;