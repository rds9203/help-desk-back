"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateEndDate = exports.calculateInstallmentAmount = exports.calculateInterestRate = exports.handleCors = exports.createResponse = void 0;
const createResponse = (status, body, headers) => ({
    status,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        ...headers
    },
    jsonBody: body
});
exports.createResponse = createResponse;
const handleCors = (req) => {
    if (req.method === 'OPTIONS') {
        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            jsonBody: {}
        };
    }
    return null;
};
exports.handleCors = handleCors;
const calculateInterestRate = (monthsInCompany) => {
    // Lógica para calcular la tasa de interés según el tiempo en la empresa
    if (monthsInCompany < 6) {
        return 18.0; // Nuevo empleado - tasa alta
    }
    else if (monthsInCompany < 12) {
        return 15.0; // 6-12 meses
    }
    else if (monthsInCompany < 24) {
        return 12.0; // 1-2 años
    }
    else if (monthsInCompany < 60) {
        return 10.0; // 2-5 años
    }
    else {
        return 8.0; // 5+ años - empleado veterano
    }
};
exports.calculateInterestRate = calculateInterestRate;
const calculateInstallmentAmount = (loanAmount, interestRate, totalMonths) => {
    // Fórmula de cuota fija: PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyRate = interestRate / 100 / 12;
    const installmentAmount = loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(installmentAmount * 100) / 100; // Redondear a 2 decimales
};
exports.calculateInstallmentAmount = calculateInstallmentAmount;
const calculateEndDate = (startDate, totalMonths) => {
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + totalMonths);
    return endDate;
};
exports.calculateEndDate = calculateEndDate;
//# sourceMappingURL=utils.js.map