export default function handler(req, res) {
  // This allows the frontend to talk to the backend
  if (req.method === 'POST') {
    const data = req.body;
    res.status(200).json({ 
      message: "Cloud Sync Successful",
      byteSize: JSON.stringify(data).length,
      timestamp: new Date().toLocaleTimeString()
    });
  } else {
    res.status(200).json({ message: "Cloud Endpoint Active" });
  }
}
