const db = require("../db/connection");


exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({ message: "School added successfully", id: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Invalid coordinates" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const schoolsWithDistance = results.map((school) => {
      const dist = getDistanceFromLatLonInKm(
        latitude,
        longitude,
        school.latitude,
        school.longitude
      );
      return { ...school, distance: dist.toFixed(2) };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
};


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
