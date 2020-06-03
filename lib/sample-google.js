const proto = require("./providerproto");

function GoogleCreate(properties) {
  if (properties == "undefined")
    throw new Error("Properties aren't defined for Google provider");

  var obj = Object.assign(Object.create(proto), properties);

  obj.run = async function google(audioelement) {
    // Imports the Google Cloud client library
    const speech = require("@google-cloud/speech");
    const fs = require("fs");

    // set env variables pointing to google credentials file
    process.env.GOOGLE_APPLICATION_CREDENTIALS =
      obj.GOOGLE_APPLICATION_CREDENTIALS;

    // Creates a client
    const client = new speech.SpeechClient();

    // The name of the audio file to transcribe
    const fileName = audioelement.file;

    // Reads a local audio file and converts it to base64
    const file = fs.readFileSync(fileName);
    const audioBytes = file.toString("base64");

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      content: audioBytes
    };

    const request = {
      audio: audio,
      config: obj.audioconfig
    };

    //override sample hertz rate if defined in audio properties
    audioelement.sampleRateHertz
      ? (request.config.sampleRateHertz = audioelement.sampleRateHertz)
      : null;

    return new Promise(async (resolve, reject) => {
      // Detects speech in the audio file
      const [response] = await client.recognize(request);
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join("\n");
      console.log(`[Google]: ${transcription}`);

      //cb(transcription, "google");

      resolve(transcription);
    });
  };

  return obj;
}

module.exports = GoogleCreate;
