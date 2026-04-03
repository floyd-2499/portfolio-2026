import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = req.body;

      await connectDB();

      const newContact = await Contact.create(body);

      return res.status(200).json({ success: true, data: newContact });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}