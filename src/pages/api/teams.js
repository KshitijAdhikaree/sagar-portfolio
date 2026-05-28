export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const huggingFaceUrl = process.env.HUGGINGFACE_SPACE_URL;
  if (!huggingFaceUrl) {
    return res.status(500).json({
      error: 'Hugging Face Space URL is not configured. Please set HUGGINGFACE_SPACE_URL in .env.local'
    });
  }

  try {
    const cleanHfUrl = huggingFaceUrl.endsWith('/') ? huggingFaceUrl.slice(0, -1) : huggingFaceUrl;
    
    // Set up headers (e.g. authorization header if HF_ACCESS_TOKEN is present)
    const headers = {};
    if (process.env.HF_ACCESS_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.HF_ACCESS_TOKEN}`;
    }

    const response = await fetch(`${cleanHfUrl}/teams`, { headers });

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      const errorText = await response.text();
      console.error(`HF Space /teams returned status: ${response.status}. Error: ${errorText}`);
      return res.status(502).json({
        error: `Hugging Face Space returned status ${response.status} when fetching team list`,
        details: errorText
      });
    }
  } catch (e) {
    console.error(`Failed to fetch teams from Hugging Face Space: ${e}`);
    return res.status(504).json({
      error: 'Gateway Timeout: Failed to connect to Hugging Face Space for team list',
      details: e.message || String(e)
    });
  }
}
