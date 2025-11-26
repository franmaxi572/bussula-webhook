export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Notificação recebida:", req.body);
    res.status(200).json({ status: "ok" });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
