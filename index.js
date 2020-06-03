const providergooglecreate = require("./lib/sample-google");
const providermicrosoftcreate = require("./lib/sample-ms");
const statparsercreate = require("./stats");

const comparison = require("./lib/transcript_comparison");
const properties = require("./properties");
const transcripts = require("./transcripts");
const path = require("path");

var results = [];
var result = {
  google: {
    transcription: ""
  },
  microsoft: {
    transcription: ""
  }
};

var original = "";

(async function() {
  var google = providergooglecreate(properties.providers.google);
  var microsoft = providermicrosoftcreate(properties.providers.microsoft);

  try {
    const dir = await require("fs").promises.opendir(properties.resources);

    var i = 0;

    for await (const dirent of dir) {
      // read resources directory to get the list of all files
      console.log(dirent.name);

      if (i < properties.files) {
        // process no more than number of properties.files
        for (element in transcripts) {
          //and only if the file is in transcript array
          // and there is no miss flag set true
          if (
            dirent.name === transcripts[element].file &&
            (transcripts[element].miss == "undefined" ||
              !transcripts[element].miss)
          ) {
            transcripts[element].file = path.resolve(dir.path, dirent.name);

            result = {
              google: {
                transcription: ""
              },
              microsoft: {
                transcription: ""
              }
            };

            original = transcripts[element].transcript;

            var audio = transcripts[element].file;

            result.google.transcription = await google.run(
              transcripts[element],
              update_result
            );

            result.microsoft.transcription = await microsoft.run(
              transcripts[element],
              update_result
            );

            results.push({
              audio: audio,
              original: transcripts[element].transcript,
              result: result
            });

            original = "";

            // update counter to make sure to stop
            i++;
          }
        }
      }
    }

    //console.log(JSON.stringify(results, 2));
    var s = statparsercreate();

    s.parse(results);
  } catch (err) {
    console.log(err);
  }
})();

function update_result(transcript, provider) {
  result[provider].transcription = transcript;
  result[provider].match = comparison(
    transcript,
    original,
    properties.tolowercase
  );
}
