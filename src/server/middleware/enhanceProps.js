
export default (req, res, next) => {
  req.props = {};

  if (req.user) {
    req.props.user = {
      id: req.user._id,
      firstName: req.user.firstName,
      secondName: req.user.secondName,
    };
  }


  next();
};
