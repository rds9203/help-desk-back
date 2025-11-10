# Help Desk Backend

Sistema de gestión de créditos y préstamos para empleados.

## 📋 Descripción

Este es el backend del sistema Help Desk, construido con Node.js, Express y Prisma. Proporciona APIs RESTful para la gestión de usuarios, créditos, notificaciones y cálculos de préstamos.

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para base de datos
- **SQL Server** - Base de datos (configurada pero usando datos mockados)
- **TypeScript** - Tipado estático
- **CORS** - Manejo de CORS

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- SQL Server (opcional, actualmente usando datos mockados)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd help-desk-back
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   # Crear archivo .env
   cp env.example .env
   ```
   
   Editar `.env` con tus configuraciones:
   ```
   # SQL Server local
   DATABASE_URL="sqlserver://localhost:1433;database=helpdesk;user=sa;password=tu_password;encrypt=true;trustServerCertificate=true"
   
   # SQL Server Express
   # DATABASE_URL="sqlserver://localhost\\SQLEXPRESS:1433;database=helpdesk;user=sa;password=tu_password;encrypt=true;trustServerCertificate=true"
   
   PORT=3001
   ```

4. **Configurar Prisma** (opcional)
   ```bash
   # Generar cliente de Prisma
   npx prisma generate
   
   # Ejecutar migraciones (si usas base de datos real)
   npx prisma migrate dev
   
   # Poblar base de datos con datos iniciales
   npx prisma db seed
   ```

## 🚀 Ejecución

### Desarrollo
```bash
# Iniciar servidor con nodemon (recarga automática)
npm run dev

# O iniciar servidor directamente
npm start
```

### Producción
```bash
# Compilar TypeScript
npm run build

# Iniciar servidor de producción
npm run start:prod
```

## 📊 Estructura del Proyecto

```
help-desk-back/
├── prisma/
│   ├── schema.prisma          # Esquema de base de datos
│   └── migrations/            # Migraciones de BD
├── scripts/
│   └── seed.ts               # Script para poblar BD
├── lib/
│   ├── prisma.ts             # Configuración de Prisma
│   └── utils.ts              # Utilidades
├── functions/                # Azure Functions (no usado actualmente)
├── server.js                 # Servidor principal
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## 🔌 APIs Disponibles

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario específico
- `GET /api/users/:id/max-credit` - Calcular crédito máximo

### Créditos
- `GET /api/credits` - Obtener todos los créditos
- `GET /api/credits/:id` - Obtener crédito específico
- `GET /api/credits?userId=:id` - Obtener créditos de un usuario
- `POST /api/credits` - Crear nuevo crédito
- `PUT /api/credits/:id` - Actualizar crédito
- `DELETE /api/credits/:id` - Eliminar crédito
- `PUT /api/credits/:id/approve` - Aprobar crédito
- `PUT /api/credits/:id/reject` - Rechazar crédito
- `POST /api/credits/generate-authorization` - Generar documento de autorización

### Notificaciones
- `GET /api/notifications` - Obtener notificaciones
- `GET /api/notifications/unread-count` - Contador de no leídas
- `PUT /api/notifications/:id/read` - Marcar como leída

## 📝 Ejemplos de Uso

### Obtener todos los usuarios
```bash
curl http://localhost:3001/api/users
```

### Obtener crédito máximo de un usuario
```bash
curl http://localhost:3001/api/users/1/max-credit
```

### Crear nuevo crédito
```bash
curl -X POST http://localhost:3001/api/credits \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "creditType": "Préstamo Personal",
    "amount": 500000,
    "installments": 12,
    "interestRate": 12.5
  }'
```

## 🗄️ Base de Datos

### Modelos Principales

#### User
```typescript
{
  id: number
  firstName: string
  lastName: string
  email: string
  position: string
  startDate: string
  salary: number
  hasDebt: boolean
  role: Role
}
```

#### Credit
```typescript
{
  id: number
  userId: number
  creditType: string
  amount: number
  installmentAmount: number
  outstandingAmount: number
  startDate: string
  endDate: string
  status: string
  interestRate: InterestRate
  installments: number
  paidInstallments: number
}
```

#### Notification
```typescript
{
  id: number
  title: string
  message: string
  type: string
  isRead: boolean
  userId?: number
  creditId?: number
  createdAt: Date
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia con nodemon
npm start            # Inicia servidor

# Base de datos
npm run db:generate  # Genera cliente Prisma
npm run db:migrate   # Ejecuta migraciones
npm run db:seed      # Pobla base de datos
npm run db:reset     # Resetea base de datos

# Producción
npm run build        # Compila TypeScript
npm run start:prod   # Inicia en modo producción
```

## 🐛 Solución de Problemas

### Error de conexión a base de datos
- Verificar que SQL Server esté ejecutándose
- Revisar la URL de conexión en `.env`
- Verificar que el puerto 1433 esté abierto
- Ejecutar `npx prisma migrate dev`

### Configuración de SQL Server

#### SQL Server Local
```bash
# Instalar SQL Server (Windows)
# Descargar desde: https://www.microsoft.com/en-us/sql-server/sql-server-downloads

# Habilitar TCP/IP
# 1. Abrir SQL Server Configuration Manager
# 2. SQL Server Network Configuration > Protocols for MSSQLSERVER
# 3. Habilitar TCP/IP
# 4. Reiniciar SQL Server service
```

#### SQL Server Express
```bash
# La URL de conexión debe incluir la instancia:
DATABASE_URL="sqlserver://localhost\\SQLEXPRESS:1433;database=helpdesk;user=sa;password=tu_password;encrypt=true;trustServerCertificate=true"
```

#### Azure SQL Database
```bash
# Para Azure SQL, usar esta configuración:
DATABASE_URL="sqlserver://tu_servidor.database.windows.net:1433;database=helpdesk;user=tu_usuario;password=tu_password;encrypt=true;trustServerCertificate=false"
```

### Puerto en uso
- Cambiar el puerto en `.env` o `server.js`
- Matar proceso que usa el puerto: `lsof -ti:3001 | xargs kill`

### Errores de Prisma
- Regenerar cliente: `npx prisma generate`
- Resetear base de datos: `npx prisma migrate reset`

## 📞 Soporte

Para reportar problemas o solicitar funcionalidades, crear un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.