const path = require('path');

exports.getImage = (req, res) => {

  let data = req.query;

  if(req.query.order_image) {
    res.sendFile(path.resolve(__dirname + '../../images/orders/' + data.order_image));
  } else if (req.query.item_image) {
    res.sendFile(path.resolve(__dirname + '../../images/items/' + data.item_image));
  } else {
    res.sendFile(path.resolve(__dirname + '../../images/orders/default.jpeg'));
  }


}