exports.success = (req, res, status, message) => {
  res.status(status || 200).send({ error: "", body: message });
};

exports.error = (req, res, status, message, details) => {
  console.error(details);
  res.status(status || 500).send({ error: message, body: "" });
};
