// index.js

// Load environment variables from .env file
require('dotenv').config();

// Access the environment variable
const audioSrc = process.env.AUDIO_SRC;

// Get reference to the audio element
const audioPlayer = document.getElementById('myAudioPlayer');

// Set the src attribute of the audio element
audioPlayer.src = audioSrc;
