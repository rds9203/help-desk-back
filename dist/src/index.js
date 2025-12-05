"use strict";
// Azure Functions v4 Programming Model - Main entry point
// This file imports all functions so they can be discovered by Azure Functions
Object.defineProperty(exports, "__esModule", { value: true });
// Authentication functions
require("./functions/auth-login");
require("./functions/auth-me");
// User functions
require("./functions/users");
require("./functions/users-approve");
require("./functions/users-max-credit");
// Credit functions
require("./functions/credits");
require("./functions/credits-approve");
require("./functions/credits-pay");
require("./functions/credits-reject");
require("./functions/credits-update");
// Payment functions
require("./functions/payments");
// Role functions
require("./functions/roles");
// Utility functions
require("./functions/health");
require("./functions/change-password");
// Audit functions
require("./functions/audit-logs");
// Commented out functions that use models not in Prisma schema
// Uncomment when these models are added to schema.prisma
// import './functions/tickets';
// import './functions/tickets-comments';
// import './functions/tickets-update';
// import './functions/reservations';
// import './functions/resources';
// import './functions/vacations';
// import './functions/vacations-days';
// import './functions/vacations-request';
// import './functions/notifications';
// import './functions/notifications-read';
// import './functions/notifications-unread-count';
//# sourceMappingURL=index.js.map