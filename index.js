
const providergooglecreate = require('./lib/sample-google');
const providermicrosoftcreate = require('./lib/sample-ms');
const comparison = require('./lib/transcript_comparison');
const properties = require('./properties');


var result = {
    google: {
        transcription: ''
    },
    microsoft: {
        transcription: ''
    }
}

var results = [];
const audio = './resources/audio.raw';

(async function () {

    var google = providergooglecreate(properties.providers.google);
    var microsoft = providermicrosoftcreate(properties.providers.microsoft);

    try {
        for (var i = 0; i < properties.files; i++) {
            await google.run(audio, update_result);

            await microsoft.run(audio, update_result);

            var match = comparison(result.google.transcription, result.microsoft.transcription, properties.tolowercase)
            results.push({ audio: audio, result: result, match: match })

        }
        console.log(JSON.stringify(results, 2))

    } catch (err) {
        console.log(err)
    }

}())

function update_result(transcript, provider) {
    result[provider].transcription = transcript
};





