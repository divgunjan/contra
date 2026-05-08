export const geocodeSearch = async (req, res) => {
  try {
    const q = (req.query.q || "").trim();

    if (q.length < 2) {
      return res.json({ success: true, suggestions: [] });
    }

    const token = process.env.MAPBOX_TOKEN;
    if (!token) {
      return res.status(500).json({
        success: false,
        error: "Server missing MAPBOX_TOKEN"
      });
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json?autocomplete=true&country=IN&limit=6&access_token=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(502).json({
        success: false,
        error: "Mapbox lookup failed"
      });
    }

    const data = await response.json();
    const suggestions = (data.features || [])
      .filter((f) => Array.isArray(f.center) && f.center.length >= 2)
      .map((f) => ({
        name: f.text,
        fullAddress: f.place_name,
        lat: f.center[1],
        lng: f.center[0]
      }));

    return res.json({ success: true, suggestions });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};
