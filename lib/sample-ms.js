const proto = require("./providerproto");

("use strict");
function MicrosoftCreate(properties) {
  if (properties == "undefined")
    throw new Error("Properties aren't defined for Microsoft provider");

  var obj = Object.assign(Object.create(proto), properties);

  obj.run = async function microsoft(audioelement) {
    // pull in the required packages.
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var fs = require("fs");

    // replace with your own subscription key,
    // service region (e.g., "westus"), and
    // the name of the file you want to run
    // through the speech recognizer.
    var subscriptionKey = obj.subscriptionKey;
    var serviceRegion = obj.serviceRegion; // e.g., "westus"
    var filename = audioelement.file; // 16000 Hz, Mono

    // create the push stream we need for the speech sdk.
    var pushStream = sdk.AudioInputStream.createPushStream();

    // open the file and push it to the push stream.
    fs.createReadStream(filename)
      .on("data", function(arrayBuffer) {
        pushStream.write(arrayBuffer.slice());
      })
      .on("end", function() {
        pushStream.close();
      });

    // now create the audio-config pointing to our stream and
    // the speech config specifying the language.
    var speechConfig = sdk.SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    );

    // setting the recognition language to English.
    speechConfig.speechRecognitionLanguage = obj.speechRecognitionLanguage;
    var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);

    // create the speech recognizer.
    var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    // we are done with the setup
    console.log("[Microsoft]Now recognizing from: " + filename);

    // start the recognizer and wait for a result.
    return new Promise((resolve, reject) => {
      recognizer.recognizeOnceAsync(
        function(result) {
          console.log("[Microsoft] " + result.text);

          //cb(result.text, "microsoft");

          recognizer.close();
          recognizer = undefined;

          resolve(result.text);
        },
        function(err) {
          console.log("[Microsoft] " + "err - " + err);

          recognizer.close();
          recognizer = undefined;
          reject(err);
        }
      );
    });
  };

  return obj;
}

module.exports = MicrosoftCreate;
