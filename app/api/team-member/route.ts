export async function GET() {
  return new Response(JSON.stringify({ name: "Obafemi" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
