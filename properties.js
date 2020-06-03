module.exports = {
  files: 2,
  resources: "./resources", // path to files root directory
  comparison_threshold: 1, // condition to check 2 strings to decide if there is a match or not
  tolowercase: true, // allows to check 2 strings with regardless of its capitalisation
  providers: {
    microsoft: {
      subscriptionKey: "b18a5594d1c440f48662d61d69be2644",
      serviceRegion: "westus", // e.g., "westus"
      speechRecognitionLanguage: "en-US"
    },
    google: {
      audioconfig: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "en-US"
      },
      GOOGLE_APPLICATION_CREDENTIALS:
        "C:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\speech-accuracy-test-068ed929ed28.json"
    }
  }
};
