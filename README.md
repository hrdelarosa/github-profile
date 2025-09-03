<a name="readme-top"></a>

<div align="center">

<img src="https://raw.githubusercontent.com/hrdelarosa/github-profile/master/public/github-profile.jpeg" alt="Countries Board" width="550"/>

# GitHub Profile

Un proyecto basado en el reto de [devchallenges.io](https://devchallenges.io/) adaptado para practicar con **React** y **TypeScript** · [Información del Challenge](https://github.com/hrdelarosa/github-profile/tree/master/challenge)  
La idea principal es mostrar información de perfiles de GitHub mediante la API pública, pero con una implementación personalizada para experimentar con tecnologías y bibliotecas que aún estoy aprendiendo.

</div>

## Tecnologías utilizadas

- [![React][react-badge]][react-url] – Framework de UI
- [![TypeScript][typeScript-badge]][typeScript-url] – Tipado estático
- [![Tailwind][tailwind-badge]][tailwind-url] - Un framework CSS
- [![Shadcn][shadcn-badge]][shadcn-url] - Biblioteca de componentes UI
- [![use-debounc][use-debounce-badge]][use-debounce-url] – Control de búsquedas
- [![GitHub][github-badge]][github-url] – Fuente de datos

## Características

- 🔍 **Búsqueda en tiempo real** de perfiles de GitHub.
- ⏳ **Debounce en las consultas** para evitar llamadas innecesarias a la API.
- 📊 **Visualización clara de datos**: seguidores, seguidos, repositorios y más.
- 🖼️ **Avatar e información básica** del usuario.
- 🎨 **Diseño moderno y responsivo**, adaptado con bibliotecas de UI.
- ⚛️ **Componentes reutilizables en React** escritos en TypeScript.
- 📂 **Estructura escalable** con separación de servicios, hooks y componentes.
- 🔧 **Práctica con librerías nuevas** como `use-debounce`, `shadcn/ui` y `Tailwind CSS`.

## Estructura del proyecto

```bash
├── public          # Archivos estáticos
├── src
│   ├── components  # Componentes de UI
│   ├── hooks       # Custom hooks (ej. manejo de usuarios, debounce, etc.)
│   ├── services    # Llamadas a la API de GitHub
│   ├── types       # Tipados de TypeScript
│   └── App.tsx     # Punto de entrada principal
└── package.json
```

## Uso de la API de GitHub

La API de GitHub se utiliza para obtener información sobre perfiles de GitHub. La API es una API pública que no requiere autenticación.

```typescript
async function getUserGithub({ username }: { username: string }) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  return data;
}
```

## Instalación

Si deseas instalar el proyecto, puedes clonar el repositorio y ejecutar el siguiente comando:

1. Clonar el repositorio

```bash
git clone https://github.com/hrdelarosa/github-profile.git
```

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar el proyecto

```bash
npm run dev
```

4. Acceder a la aplicacion navegando a http://localhost:5173 o al puerto que se indique en la terminal

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[react-url]: https://es.react.dev/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[shadcn-url]: https://ui.shadcn.com/
[use-debounce-url]: https://www.npmjs.com/package/use-debounce
[github-url]: https://api.github.com/
[react-badge]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[typescript-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[tailwind-badge]: https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white
[shadcn-badge]: https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff
[use-debounce-badge]: https://img.shields.io/badge/@xnimorz-USE%20DEBOUNCE-ff69b4?style=flat-for-the-badge&logo=npm&logoColor=white&labelColor=49516e&color=afb5cb
[github-badge]: https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white
