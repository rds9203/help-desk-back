"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const utils_1 = require("../../../lib/utils");
async function healthCheck(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    return (0, utils_1.createResponse)(200, {
        status: 'OK',
        timestamp: new Date().toISOString()
    });
}
functions_1.app.http('health', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'api/health',
    handler: healthCheck
});
//# sourceMappingURL=index.js.map