# Lambdaeta: despliegue y SEO

## Ejecución local

Requisitos: Node.js 20 o posterior y npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Antes de publicar, reemplaza las variables de `.env.local` por los valores reales. No subas `.env.local` ni credenciales al repositorio.

## Vercel

Importa el repositorio como proyecto Next.js. En **Settings → Environment Variables** de Vercel, define:

| Variable | Requerida | Propósito |
| --- | --- | --- |
| `GMAIL_USER` | Sí para recibir consultas | Cuenta Gmail remitente, por ejemplo `lambdaeta.x@gmail.com`. |
| `GMAIL_APP_PASSWORD` | Sí para recibir consultas | Contraseña de aplicación de Google; trátala como un secreto y no la subas al repositorio. |
| `NEXT_PUBLIC_SITE_URL` | Recomendado | URL canónica definitiva, incluyendo `https://` y sin barra final. |

Para obtener la contraseña de aplicación, activa la verificación en dos pasos de la cuenta de Google y crea una contraseña de aplicación en la configuración de seguridad de esa cuenta. Guarda el valor únicamente en las variables de entorno de Vercel; no lo compartas ni lo incluyas en archivos versionados.

El formulario envía la consulta desde el servidor por Gmail SMTP a `lambdaeta.x@gmail.com`. Si falta la configuración o Gmail rechaza el envío, el sitio informa que la consulta no pudo ser entregada; no muestra un falso mensaje de éxito.

## Rutas y arquitectura SEO

Las páginas están prerenderizadas con App Router, títulos, descripciones, keywords, URL canónica y Open Graph en español. `/sitemap.xml` se genera desde el listado de rutas; `/robots.txt` lo publica y excluye el endpoint de contacto.

| Página | URL recomendada |
| --- | --- |
| Inicio | `/` |
| Sobre nosotros | `/sobre-nosotros` |
| Servicios | `/servicios` |
| Soluciones | `/soluciones` |
| Metodología | `/metodologia` |
| Productos desarrollados por Lambdaeta y Microapps | `/productos` |
| Casos ilustrativos | `/casos-de-exito` |
| Tecnologías | `/tecnologias` |
| Blog y perspectivas | `/blog` |
| Preguntas frecuentes | `/preguntas-frecuentes` |
| Contacto | `/contacto` |

La página de inicio optimiza para ingeniería y desarrollo de software, soluciones digitales, automatización empresarial e inteligencia artificial aplicada. Las páginas internas tienen metadatos dirigidos a su intención: desarrollo a medida, servicios de IA y automatización, software para startups, arquitectura tecnológica y contacto comercial. Los casos se identifican explícitamente como ejemplos ilustrativos, no como proyectos o resultados de clientes reales.

La aplicación publica datos estructurados `Organization` en el sitio, `FAQPage` en preguntas frecuentes y `BreadcrumbList` en páginas interiores. Al conectar el dominio real, valida el sitemap en herramientas para webmasters y añade perfiles sociales o datos corporativos solo cuando Lambdaeta los proporcione y confirme.
