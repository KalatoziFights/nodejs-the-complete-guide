const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://narutokalatozi:SX7s7N4OhAxRLVH5@mongodb-max.glfebl3.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
