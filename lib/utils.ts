import { HttpRequest, HttpResponseInit } from '@azure/functions';

export const createResponse = (
  status: number,
  body: any,
  headers?: { [key: string]: string }
): HttpResponseInit => ({
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

export const handleCors = (req: HttpRequest): HttpResponseInit | null => {
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

export const calculateInterestRate = (monthsInCompany: number): number => {
  // Lógica para calcular la tasa de interés según el tiempo en la empresa
  if (monthsInCompany < 6) {
    return 18.0; // Nuevo empleado - tasa alta
  } else if (monthsInCompany < 12) {
    return 15.0; // 6-12 meses
  } else if (monthsInCompany < 24) {
    return 12.0; // 1-2 años
  } else if (monthsInCompany < 60) {
    return 10.0; // 2-5 años
  } else {
    return 8.0; // 5+ años - empleado veterano
  }
};

export const calculateInstallmentAmount = (
  loanAmount: number,
  interestRate: number,
  totalMonths: number
): number => {
  // Fórmula de cuota fija: PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
  const monthlyRate = interestRate / 100 / 12;
  const installmentAmount = 
    loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  return Math.round(installmentAmount * 100) / 100; // Redondear a 2 decimales
};

export const calculateEndDate = (startDate: Date, totalMonths: number): Date => {
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + totalMonths);
  return endDate;
};
