# Help Desk Backend - Azure Functions + Prisma

Backend para el sistema de Help Desk construido con Azure Functions y Prisma ORM.

## 🚀 Características

- **Azure Functions** para API serverless
- **Prisma ORM** para manejo de base de datos
- **PostgreSQL** como base de datos
- **TypeScript** para tipado estático
- **CORS** configurado para frontend

## 📋 Prerrequisitos

- Node.js 18+
- PostgreSQL
- Azure Functions Core Tools
- Prisma CLI

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar base de datos:**
```bash
# Crear archivo .env con tu DATABASE_URL
echo "DATABASE_URL=postgresql://username:password@localhost:5432/helpdesk_db?schema=public" > .env
```

3. **Generar cliente Prisma:**
```bash
npm run db:generate
```

4. **Ejecutar migraciones:**
```bash
npm run db:push
```

5. **Poblar base de datos con datos de prueba:**
```bash
npm run db:seed
```

## 🚀 Desarrollo

```bash
# Iniciar Azure Functions localmente
npm run dev
```

El servidor estará disponible en `http://localhost:7071`

## 📊 Estructura de la Base de Datos

### Tablas Principales

- **roles**: Roles de usuario (admin, user, etc.)
- **users**: Información de usuarios
- **interest_rates**: Tasas de interés según tiempo en empresa
- **credits**: Créditos de usuarios
- **payment_history**: Historial de pagos

### Lógica de Intereses

El sistema calcula automáticamente la tasa de interés según el tiempo que el empleado lleva en la empresa:

- **0-6 meses**: 18.0%
- **6-12 meses**: 15.0%
- **1-2 años**: 12.0%
- **2-5 años**: 10.0%
- **5+ años**: 8.0%

## 🔗 Endpoints de API

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/{id}` - Obtener usuario específico
- `POST /api/users` - Crear usuario
- `PUT /api/users/{id}` - Actualizar usuario
- `DELETE /api/users/{id}` - Eliminar usuario

### Créditos
- `GET /api/credits` - Obtener todos los créditos
- `GET /api/credits?userId={id}` - Obtener créditos de usuario
- `GET /api/credits/{id}` - Obtener crédito específico
- `POST /api/credits` - Crear crédito
- `PUT /api/credits/{id}` - Actualizar crédito
- `DELETE /api/credits/{id}` - Eliminar crédito

### Pagos
- `GET /api/payments` - Obtener todos los pagos
- `GET /api/payments?userId={id}` - Obtener pagos de usuario
- `GET /api/payments?creditId={id}` - Obtener pagos de crédito
- `POST /api/payments` - Registrar pago
- `PUT /api/payments/{id}` - Actualizar pago

## 🚀 Despliegue en Azure

1. **Crear Function App en Azure Portal**
2. **Configurar variables de entorno:**
   - `DATABASE_URL`: Cadena de conexión a PostgreSQL
3. **Desplegar código:**
```bash
func azure functionapp publish <function-app-name>
```

## 📝 Scripts Disponibles

- `npm run build` - Compilar TypeScript
- `npm run dev` - Desarrollo local
- `npm run db:generate` - Generar cliente Prisma
- `npm run db:push` - Sincronizar esquema con BD
- `npm run db:migrate` - Ejecutar migraciones
- `npm run db:seed` - Poblar BD con datos de prueba

