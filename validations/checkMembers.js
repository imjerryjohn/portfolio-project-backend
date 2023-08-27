const checkMemberLocation = (req, res, next) => {
    if (req.body.member_location) {
      next();
    } else {
      res.status(400).json({ error: "Member location is required" });
    }
  };
  
  const checkMemberName = (req, res, next) => {
    if (req.body.member_name) {
      next();
    } else {
      res.status(400).json({ error: "Member Name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { first_letter_j } = req.body;
  
    if (
      first_letter_j == "true" ||
      first_letter_j == "false" ||
      first_letter_j == true ||
      first_letter_j == false ||
      first_letter_j == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "first_letter_j must be a boolean value" });
    }
  };
  
  module.exports = { checkMemberLocation, checkMemberName, checkBoolean };