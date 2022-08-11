var admin = require("firebase-admin");

var serviceAccount = require("../fir-chat-d3c37-firebase-adminsdk-a02bn-43620c440d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firebase-chat.firebaseio.com",
});

getAuth()
  .getUser(uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log("Error fetching user data:", error);
  });

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Yey!",
  });
};
