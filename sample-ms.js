function microsoft(audiopath, cb) {
    "use strict";

    // pull in the required packages.
    var sdk = require("microsoft-cognitiveservices-speech-sdk");
    var fs = require("fs");

    // replace with your own subscription key,
    // service region (e.g., "westus"), and
    // the name of the file you want to run
    // through the speech recognizer.
    var subscriptionKey = "b18a5594d1c440f48662d61d69be2644";
    var serviceRegion = "westus"; // e.g., "westus"
    var filename = audiopath; // 16000 Hz, Mono

    // create the push stream we need for the speech sdk.
    var pushStream = sdk.AudioInputStream.createPushStream();

    // open the file and push it to the push stream.
    fs.createReadStream(filename).on('data', function (arrayBuffer) {
        pushStream.write(arrayBuffer.slice());
    }).on('end', function () {
        pushStream.close();
    });

    // now create the audio-config pointing to our stream and
    // the speech config specifying the language.
    var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

    // setting the recognition language to English.
    speechConfig.speechRecognitionLanguage = "en-US";

    var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);

    // create the speech recognizer.
    var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    // we are done with the setup
    console.log("[Microsoft]Now recognizing from: " + filename);

    // start the recognizer and wait for a result.
    return new Promise((resolve, reject) => {
        recognizer.recognizeOnceAsync(
            function (result) {
                console.log("[Microsoft] " + result.text);

                cb(result.text, "microsoft");

                recognizer.close();
                recognizer = undefined;

                resolve()
            },
            function (err) {
                console.trace("[Microsoft] " + "err - " + err);

                recognizer.close();
                recognizer = undefined;
                reject(err);
            });

    })
};

module.exports = microsoft