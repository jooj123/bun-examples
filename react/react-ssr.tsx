import { renderToReadableStream } from "react-dom/server";

const dt = new Intl.DateTimeFormat();

export default {
  port: 3000,
  async fetch(request: Request) {
    return new Response(
      await renderToReadableStream(
        <html>
          <body>
            <h1>Hello from React with Bun!</h1>
            <p>The date is {new Date().toLocaleTimeString('en-AU')}</p>
          </body>
        </html>
      )
    );
  },
};

// bun react-ssr.tsx
