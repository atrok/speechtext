
const google = require('./sample-google');
const microsoft = require('./sample-ms');
const comparison = require('./transcript_comparison');
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


    try {
        for (var i = 0; i < properties.files; i++) {
            await google(audio, update_result);

            await microsoft(audio, update_result);

            var match = comparison(result.google.transcription, result.microsoft.transcription)
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





