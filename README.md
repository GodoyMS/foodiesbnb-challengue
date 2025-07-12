# 🍽️ FoodiesBNB – Desafío MVP

Este es el repositorio del **desafío MVP de FoodiesBNB**, una aplicación enfocada en foodies para descubrir y agendar visitas a restaurantes.

Tecnologías utilizadas:

- 🧱 [Next.js](https://nextjs.org) (Pages Router + renderizado del lado del servidor)
- 💨 [Tailwind CSS](https://tailwindcss.com)
- 🧩 [shadcn/ui](https://ui.shadcn.dev/) + [Radix UI](https://www.radix-ui.com/)
- 🛠️ [Supabase](https://supabase.com): autenticación, base de datos y consultas
- 🔐 Rutas API personalizadas para acciones protegidas
- 📦 Migraciones de base de datos con scripts personalizados y Supabase CLI

> 🔐 **Cuenta de demostración:**
> - **Email**: `godoyliam.dev@gmail.com`  
> - **Contraseña**: `godoyliam.dev@gmail.com`
---

## Despliegue

La aplicación está desplegada en Vercel y puedes accederla aquí:

🔗 **Demo en producción:**  
[https://foodiesbnb-challengue.vercel.app](https://foodiesbnb-challengue.vercel.app)
---

## 🧠 Descripción general

FoodiesBNB permite a los usuarios:

- 📍 Explorar restaurantes por **ubicación** y **tipo de cocina**
- 🔐 Iniciar sesión de forma segura mediante **Supabase Auth**
- 🗓️ Registrar y visualizar el historial de **visitas**
- ❤️ Guardar **favoritos** (No desarrollado)
- Perfil **favoritos** (Mockeado)
- 📊 Consultar visitas anteriores y visitar futuras desde la base de datos
- 🧾 Gestionar datos de restaurantes desde Supabase

Toda la información se consulta directamente desde la base de datos mediante queries eficientes del lado del servidor y endpoints personalizados protegidos.

---


## 🧩 Esquemas de la base de datos

El proyecto utiliza un modelo de base de datos normalizado en Supabase con las siguientes tablas:

- `user`: perfil extendido del usuario (relacionado con `auth.users`)
- `restaurant`: información de los restaurantes
- `visit`: historial de visitas del usuario
- `favorite`: restaurantes guardados
- `location`: ubicaciones geográficas
- `type_cooking`: categorías de cocina (ej. Italiana, Japonesa, etc.)

> Las tablas `location` y `type_cooking` están relacionadas mediante claves foráneas con la tabla `restaurant`.

---

## 🚀 Comenzar

### 1. Clonar el repositorio

```bash
git clone https://github.com/GodoyMS/foodiesbnb-challengue.git
cd foodiesbnb-challengue
```

### 2. Instalar dependencias
```bash
npm install
```
### 3. Ejecutar localmente
Crear un archivo .env en la raíz del proyecto y añadir lo siguiente:

```bash
NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anónima
```

### 4. Ejecutar localmente
```bash
npm run dev
```


## 🧪 Migraciones de base de datos

Este proyecto utiliza scripts personalizados junto con el **CLI de Supabase** para manejar las migraciones de la base de datos, manteniendo una estructura clara y versionada del esquema.

### 🔧 Requisitos

Asegúrate de tener instalado el CLI de Supabase. Puedes seguir la guía oficial aquí:  
👉 https://supabase.com/docs/guides/cli

Para instalarlo globalmente:

```bash
npm install -g supabase
```

Linkear el proyecto de supabase localmente, obtener el id del proyecto y remplazar en  ******

```bash
supabase link --project-ref ******
```

Crear nuevas migraciones con los scripts personalizados

```bash
npm run db:migration nueva-migracion
```

Escribir codigo SQL en el nuevo archivo generado dentro de "supabase/migrations" y pushear los cambios


```bash
npm run db:push
```

