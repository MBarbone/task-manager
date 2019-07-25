const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.", error);
    }
    console.log("Connected to MongoDB");

    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5d35fcd47fb0acd2c1279a9f")
    //     },
    //     {
    //       $set: {
    //         name: "Andrew"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        _id: new ObjectID("5d360398dbb39ed34e65c8c8")
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
