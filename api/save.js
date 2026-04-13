export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ 
      message: "Cloud Sync Successful",
      byteSize: JSON.stringify(req.body).length,
      timestamp: new Date().toLocaleTimeString()
    });
  } else {
    res.status(200).json({ message: "Cloud Endpoint Active" });
  }
}
