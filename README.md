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
