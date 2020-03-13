exports.getTours = (req, res, next) => {
  // HERE YOU WILL USUALLY USE THE MODEL TO FETCH RESOURCES FROM YOUR DATABASE

  // THEN SEND BACK TO THE CLIENT THE RESULT
  res.status(200).json({
    status: 'success',
    data: []
  });
};
