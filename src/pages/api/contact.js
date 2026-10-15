
export default async function handler(req, res) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  console.log(scriptUrl, "Yoooo");


  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const { name, email, phone, message } = req.body || {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof message !== "string" ||
    !message.trim() ||
    (phone != null && typeof phone !== "string")
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide your name, email, and message.",
    });
  }

  if (!scriptUrl) {
    return res.status(500).json({
      success: false,
      message: "Contact service is not configured.",
    });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: (phone || "").trim(),
        message: message.trim(),
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Google Apps Script request failed.");
    }

    const data = await response.json();

    if (data.success !== true) {
      return res.status(502).json({
        success: false,
        message: data.message || "Unable to save your message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(502).json({
      success: false,
      message: "Unable to send your message. Please try again.",
    });
  }
}
