//
// Populate the file and save as properties.js
//
module.exports = {
  files: 3, // set the limit for number of files to be processed
  resources: "./resources",
  comparison_threshold: 1, // number of characters to allow to be off for 2 strings to be considered a match
  tolowercase: true, // allows to check 2 strings regardless of its capitalisation, set false if otherwise
  providers: {
    microsoft: {
      subscriptionKey: "", // put the credential key generated upon service subscription
      serviceRegion: "westus", // e.g., "westus"
      speechRecognitionLanguage: "en-US"
    },
    google: {
      audioconfig: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "en-US"
      },
      GOOGLE_APPLICATION_CREDENTIALS: "" // add the path to credentials file generated upon service account creation
    }
  }
};
