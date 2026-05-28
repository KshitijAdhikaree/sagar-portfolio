import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  // Proactively copy the generated mockup image if it doesn't exist
  const mockImagePath = path.join(process.cwd(), 'public', 'images', 'epl_predictor_mock.png');
  if (!fs.existsSync(mockImagePath)) {
    const sourcePath = 'C:\\Users\\shres\\.gemini\\antigravity-ide\\brain\\c27cd031-5928-4080-a37d-12af2259769c\\epl_predictor_mock_1779463781320.png';
    try {
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, mockImagePath);
        console.log("Mockup image copied to public/images/ successfully via API!");
      }
    } catch (e) {
      console.error("Failed to copy mockup image via API:", e);
    }
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { home, away, model } = req.query;

  if (!home || !away) {
    return res.status(400).json({ error: 'Missing parameters home and/or away' });
  }

  let selectedModel = 'XGBoost';
  if (model === 'Random_Forest') {
    selectedModel = 'Random_Forest';
  } else if (model === 'Gradient_Boosting') {
    selectedModel = 'Gradient_Boosting';
  }

  const huggingFaceUrl = process.env.HUGGINGFACE_SPACE_URL;
  if (!huggingFaceUrl) {
    return res.status(500).json({
      error: 'Hugging Face Space URL is not configured. Please set HUGGINGFACE_SPACE_URL in .env.local'
    });
  }

  try {
    console.log(`Routing prediction request to Hugging Face Space: ${huggingFaceUrl}`);
    const cleanHfUrl = huggingFaceUrl.endsWith('/') ? huggingFaceUrl.slice(0, -1) : huggingFaceUrl;
    
    // Set up headers (e.g. authorization header if HF_ACCESS_TOKEN is present)
    const headers = {};
    if (process.env.HF_ACCESS_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.HF_ACCESS_TOKEN}`;
    }

    const apiUrl = `${cleanHfUrl}/predict?home=${encodeURIComponent(home)}&away=${encodeURIComponent(away)}&model=${encodeURIComponent(selectedModel)}`;
    const response = await fetch(apiUrl, { headers });

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json({
        ...data,
        fallback: false,
        note: "Prediction completed via Hugging Face Space ML engine"
      });
    } else {
      const errorText = await response.text();
      console.error(`HF Space returned status: ${response.status}. Error: ${errorText}`);
      return res.status(502).json({
        error: `Hugging Face Space returned status ${response.status}`,
        details: errorText
      });
    }
  } catch (e) {
    console.error(`Failed to connect to Hugging Face Space: ${e}`);
    return res.status(504).json({
      error: 'Gateway Timeout: Failed to connect to Hugging Face Space ML engine',
      details: e.message || String(e)
    });
  }
}
