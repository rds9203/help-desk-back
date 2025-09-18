const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Datos mock para testing
const mockCredits = [
  {
    id: 1,
    creditType: 'Préstamo Personal',
    loanAmount: 15000,
    outstandingAmount: 12000,
    installmentAmount: 1500,
    totalInstallments: 12,
    pendingInstallments: 8,
    startDate: '2024-01-01',
    endDate: '2024-12-01',
    status: 'ACTIVO',
    userId: 1,
    user: {
      id: 1,
      firstName: 'user2',
      lastName: 'Usuario',
      email: 'user2@helpdesk.com',
      role: { id: 2, name: 'user', description: 'Usuario regular' }
    },
    interestRate: {
      id: 1,
      name: 'Empleado 1-2 años',
      rate: 12.0
    }
  },
  {
    id: 2,
    creditType: 'Línea de Crédito Empresarial',
    loanAmount: 50000,
    outstandingAmount: 35000,
    installmentAmount: 5000,
    totalInstallments: 12,
    pendingInstallments: 7,
    startDate: '2024-02-01',
    endDate: '2025-01-01',
    status: 'ACTIVO',
    userId: 1,
    user: {
      id: 1,
      firstName: 'user2',
      lastName: 'Usuario',
      email: 'user2@helpdesk.com',
      role: { id: 2, name: 'user', description: 'Usuario regular' }
    },
    interestRate: {
      id: 1,
      name: 'Empleado 1-2 años',
      rate: 12.0
    }
  }
];

// RUTAS DE CRÉDITOS
// GET /api/credits - Obtener todos los créditos
app.get('/api/credits', (req, res) => {
  console.log('📥 GET /api/credits - Obteniendo todos los créditos');
  res.json(mockCredits);
});

// GET /api/credits?userId=1 - Obtener créditos de un usuario específico
app.get('/api/credits', (req, res) => {
  const { userId } = req.query;
  console.log('📥 GET /api/credits - userId:', userId);
  
  if (userId) {
    const userCredits = mockCredits.filter(credit => credit.userId === parseInt(userId));
    res.json(userCredits);
  } else {
    res.json(mockCredits);
  }
});

// GET /api/credits/:id - Obtener un crédito específico
app.get('/api/credits/:id', (req, res) => {
  const { id } = req.params;
  console.log('📥 GET /api/credits/:id - id:', id);
  
  const credit = mockCredits.find(c => c.id === parseInt(id));
  if (!credit) {
    return res.status(404).json({ error: 'Crédito no encontrado' });
  }
  res.json(credit);
});

// POST /api/credits - Crear nuevo crédito
app.post('/api/credits', (req, res) => {
  const { userId, creditType, loanAmount, totalMonths } = req.body;
  console.log('📤 POST /api/credits - Datos recibidos:', req.body);
  
  if (!userId || !creditType || !loanAmount || !totalMonths) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  
  const newCredit = {
    id: mockCredits.length + 1,
    creditType,
    loanAmount: parseFloat(loanAmount),
    outstandingAmount: parseFloat(loanAmount),
    installmentAmount: parseFloat(loanAmount) / parseInt(totalMonths),
    totalInstallments: parseInt(totalMonths),
    pendingInstallments: parseInt(totalMonths),
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + parseInt(totalMonths) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'ACTIVO',
    userId: parseInt(userId),
    user: {
      id: parseInt(userId),
      firstName: 'user2',
      lastName: 'Usuario',
      email: 'user2@helpdesk.com',
      role: { id: 2, name: 'user', description: 'Usuario regular' }
    },
    interestRate: {
      id: 1,
      name: 'Empleado 1-2 años',
      rate: 12.0
    }
  };
  
  mockCredits.push(newCredit);
  console.log('✅ Crédito creado:', newCredit);
  res.status(201).json(newCredit);
});

// PUT /api/credits/:id - Actualizar crédito
app.put('/api/credits/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log('📤 PUT /api/credits/:id - id:', id, 'datos:', updateData);
  
  const creditIndex = mockCredits.findIndex(c => c.id === parseInt(id));
  if (creditIndex === -1) {
    return res.status(404).json({ error: 'Crédito no encontrado' });
  }
  
  mockCredits[creditIndex] = { ...mockCredits[creditIndex], ...updateData };
  console.log('✅ Crédito actualizado:', mockCredits[creditIndex]);
  res.json(mockCredits[creditIndex]);
});

// DELETE /api/credits/:id - Eliminar crédito
app.delete('/api/credits/:id', (req, res) => {
  const { id } = req.params;
  console.log('🗑️ DELETE /api/credits/:id - id:', id);
  
  const creditIndex = mockCredits.findIndex(c => c.id === parseInt(id));
  if (creditIndex === -1) {
    return res.status(404).json({ error: 'Crédito no encontrado' });
  }
  
  mockCredits.splice(creditIndex, 1);
  console.log('✅ Crédito eliminado');
  res.json({ message: 'Crédito eliminado correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express ejecutándose en http://localhost:${PORT}`);
  console.log(`📊 Endpoints disponibles:`);
  console.log(`   GET    /api/credits`);
  console.log(`   GET    /api/credits?userId=1`);
  console.log(`   GET    /api/credits/:id`);
  console.log(`   POST   /api/credits`);
  console.log(`   PUT    /api/credits/:id`);
  console.log(`   DELETE /api/credits/:id`);
});

