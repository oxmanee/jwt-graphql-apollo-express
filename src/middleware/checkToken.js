import jwt from "jsonwebtoken";
import config from "./../config"

const decodedToken = (req, requireAuth = true) => {
  const header = req.headers.authorization
  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, config.secretKey);
    return decoded;
  }

  if (requireAuth) {
    throw new Error("Login in to access resource");
  }
  
  return null;
};

export default decodedToken;
