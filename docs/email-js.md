# Configuración de Variables de Entorno para EmailJS

## 1. Crear Archivo .env

En la raíz del proyecto, crear un archivo llamado `.env` con el siguiente contenido:

```
# EmailJS API keys
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_OWNER_TEMPLATE_ID=tu_template_id_propietario
VITE_EMAILJS_USER_TEMPLATE_ID=tu_template_id_usuario
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> **IMPORTANTE**: Reemplazar los valores con tus claves reales de EmailJS.

## 2. Agregar .env a .gitignore

Asegurate de que tu archivo `.gitignore` incluya la siguiente línea para evitar subir tus claves al repositorio:

```
# environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## 3. Crear un Archivo .env.example

Crea un archivo `.env.example` que otros desarrolladores puedan usar como plantilla:

```
# EmailJS API keys (reemplazar con tus propias claves)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_OWNER_TEMPLATE_ID=your_owner_template_id
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 4. Tipado para TypeScript (Opcional)

Para tener tipado completo de tus variables de entorno, actualizar el archivo `vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_OWNER_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_USER_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## 5. Acceso a las Variables de Entorno

Se accede a las variables utilizando:

```typescript
import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

## 6. Variables de Entorno para Producción

Para un entorno de producción, podes:

- Configurar las variables en tu plataforma de hosting
- O crear un archivo `.env.production` para valores específicos de producción
