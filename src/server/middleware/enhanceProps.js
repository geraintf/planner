
export default (req, res, next) => {
  req.props = {
    user: {}
  };

  if (req.user) {
    req.props.user = {
      id: req.user._id,
      firstName: req.user.firstName,
      secondName: req.user.secondName,
    };
  }


  next();
};
