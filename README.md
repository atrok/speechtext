Configuration:

//GOOGLE Speech

//install Google cloud SDK
// init profile 
// init service account and obtain credentials file
// set up env variable pointing to credentials file
set GOOGLE_APPLICATION_CREDENTIALS=<PATH TO CREDENTIALS File>
or 
add to launch.json

            "env": {
                "GOOGLE_APPLICATION_CREDENTIALS": "C:\\Users\\Administrator\\Documents\\JS\\speechtext\\speechtext\\speech-accuracy-test-068ed929ed28.json"
            }
//Install google client packages
npm i @google-cloud/speech

//Microsoft setup
// Subscribe for Speech service and obtain API Keys 
// install microsoft Speech SDK
npm install microsoft-cognitiveservices-speech-sdk


What it does:
takes preconfigured file from /resources and sends it to both Google and Microsoft Asure Speech services

example:

[Google]: how old is the Brooklyn Bridge
sample-google.js:36
[Microsoft]Now recognizing from: ./resources/audio.raw
sample-ms.js:39
[Microsoft] How old is the Brooklyn bridge?
sample-ms.js:45
[{"provider":"google","transcription":"how old is the Brooklyn Bridge"},{"provider":"microsoft","transcription":"How old is the Brooklyn bridge?"}]
