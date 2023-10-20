function responseObject(bool, message) {
  return {
    success: bool,
    message: message,
  };
}

module.exports = { responseObject };
