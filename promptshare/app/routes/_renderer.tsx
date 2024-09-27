import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            var theme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.classList.add('theme-' + theme);
          })();
        `}} />
        <style>{`
          html, body { height: 100%; min-height: 100vh; }
          body { display: flex; flex-direction: column; }
          main { flex: 1 0 auto; }
          .hero { display: flex; align-items: center; min-height: 60vh; }
          .hero-content { width: 100%; max-width: 32rem; margin: 0 auto; padding: 1rem; }
          .text-3xl { font-size: 1.875rem; line-height: 2.25rem; font-weight: bold; }
          .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          @media (min-width: 640px) {
            .text-3xl { font-size: 3rem; line-height: 1; }
          }
        `}</style>
        <link rel="preload" href="/app/styles.css" as="style" />
        <link href="/app/styles.css" rel="stylesheet" />
        <Style />
        <meta name="description" content="Contractor Clock - Effortless time tracking for smart contractors and freelancers. Streamline your timekeeping process and boost productivity." />
      </head>
      <body>
        {children}
        <Script src="/app/client.ts" />
      </body>
    </html>
  )
})
