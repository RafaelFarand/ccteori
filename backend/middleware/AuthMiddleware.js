export const dummyAuth = (req, res, next) => {
  req.user = { id: 2, username: "galvin", role: "bendahara" }; // Simulasi user login
  next();
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Role tidak diizinkan" });
    }
    next();
  };
};