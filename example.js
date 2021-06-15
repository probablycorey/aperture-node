'use strict';
const fs = require('fs');
const delay = require('delay');
const aperture = require('.');

async function main() {
  const recorder = aperture();
  console.log('Screens:', await aperture.screens());
  console.log('Audio devices:', await aperture.audioDevices());
  console.log('Video codecs:', aperture.videoCodecs);

  console.log('Preparing to record for 5 seconds');
  await recorder.startRecording();
  console.log('Recording started');
  await recorder.isFileReady;
  console.log('File is ready');
  await delay(5000);
  const fp = await recorder.stopRecording();
  fs.renameSync(fp, 'recording.mov');
  console.log('Video saved in the current directory');
}

main().catch(console.error);

// Run: $ node example.js
