const db = require("../db");

const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
if (
  !name ||
  !address ||
  latitude == null ||
  longitude == null
) {
  return res.status(400).json({
    message: "All fields are required",
  });
}

if (
  isNaN(latitude) ||
  isNaN(longitude)
) {
  return res.status(400).json({
    message: "Latitude and Longitude must be numbers",
  });
}

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
          error: err,
        });
      }

      res.status(201).json({
        message: "School added successfully",
      });
    }
  );
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  return Math.sqrt(
    Math.pow(lat2 - lat1, 2) +
    Math.pow(lon2 - lon1, 2)
  );
};

const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and Longitude required",
    });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    const schools = results.map((school) => {
      const distance = calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return {
        ...school,
        distance,
      };
    });

    schools.sort((a, b) => a.distance - b.distance);

    res.status(200).json(schools);
  });
};

module.exports = {
  addSchool,
  listSchools,
};