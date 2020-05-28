
const google = require('./sample-google');
const microsoft = require('./sample-ms');

var results = []
const audio = './resources/audio.raw';

(async function () {
    try {
        await google(audio, update_result);

        await microsoft(audio, update_result);

        console.log(JSON.stringify(results, 2))

    } catch (err) {
        console.lor(err)
    }

}())

function update_result(result) {
    results.push(result)
};





