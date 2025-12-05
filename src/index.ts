// Azure Functions v4 Programming Model - Main entry point
// This file imports all functions so they can be discovered by Azure Functions

// Authentication functions
import './functions/auth-login';
import './functions/auth-me';

// User functions
import './functions/users';
import './functions/users-approve';
import './functions/users-max-credit';

// Credit functions
import './functions/credits';
import './functions/credits-approve';
import './functions/credits-pay';
import './functions/credits-reject';
import './functions/credits-update';

// Payment functions
import './functions/payments';

// Role functions
import './functions/roles';

// Utility functions
import './functions/health';
import './functions/change-password';

// Audit functions
import './functions/audit-logs';

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
