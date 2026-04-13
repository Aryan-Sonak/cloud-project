export default function handler(req, res) {
  const body = req.body;
  res.status(200).json({ 
    message: "Cloud Sync Successful",
    byteSize: JSON.stringify(body).length,
    timestamp: new Date().toISOString()
  });
}
