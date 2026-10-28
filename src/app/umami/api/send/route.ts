// Umami calcula la sesión con la IP. Con un rewrite le llega la del servidor de
// Vercel, que cambia entre peticiones y parte una visita en varias sesiones.
// Aquí le pasamos la IP real en payload.ip, que Umami usa antes que los headers.
export async function POST(request: Request) {
  const body = await request.json();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip");
  if (ip && body?.payload) body.payload.ip = ip;

  const res = await fetch("https://cloud.umami.is/api/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "user-agent": request.headers.get("user-agent") ?? "",
      "x-umami-cache": request.headers.get("x-umami-cache") ?? "",
    },
    body: JSON.stringify(body),
  });

  return new Response(res.body, {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") ?? "application/json" },
  });
}
