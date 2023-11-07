# EmotionMusicRecommadation
An Emotion-based Music Recommendation System is a unique blend of image processing and music recommendation, designed to enhance the user’s listening experience by tailoring it to their current emotional state. Here’s a brief description of how it works:

- Frontend (React):

    - Camera Access: Use the react-webcam package to access the user’s webcam and capture images or video for emotion detection.
    - Server Communication: Use axios to send requests to your Flask server and receive music recommendations. Ensure that flask-cors is properly configured on your server to allow these cross-origin requests.
    - State Management: Use redux and @reduxjs/toolkit for state management. This will be useful for storing the current music recommendations and any other global state your app might need.
    - UI: Build out your user interface with react. You could use react-alert for showing alerts to the user, and react-icons for any icons in your app. If you’re planning on having different routes/pages in your app, react-router-dom will be useful.

- Backend (Python with Flask):

  - Emotion Detection: Use the deepface library to analyze the user’s facial expressions and determine their current emotional state. This could be done by capturing an image or video stream of the user, then processing it with deepface.  
  - Music Recommendation: Based on the detected emotion, recommend music to the user. The recommendation logic will depend on your music database and how you choose to categorize songs by emotion.
  - Server Setup: Set up a Flask server that can receive requests from the frontend, process the emotion detection, and send back music recommendations.
 
## Project Links
- Frontend : https://github.com/HARSHMORE093/Frontend-Emotion-based-music-Recommdation
- Backend : https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation

## Libraries

- Deepface
- Flask
- Flask-cros
- react
- axios
- face-api.js

## Installation & Run

Create new project, Clone from git or download the zip file. After that open in vs code and in the terminal run the following command. This will install all the modules needed to run this app. 

-Go to the Pyhton folder and in terminal type:
```bash
  pip install -r requirements.txt
```

To run the backend, run the main.py file. After the server gets started go to the Frontend folder and Install the Dependency with npm.
```bash
  npm install
```
```bash
  npm start
```
You can now view frontend with the backend on the local server in the browser.

  - Local:http://localhost:3000

## Screenshots

![Screenshot (2)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/2974d061-1175-4fe3-95b6-8e4994cb761a)
![Screenshot (3)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/c38a806c-34eb-4b05-a100-43959cc64afa)
![Screenshot (4)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/8650fdd9-ea9b-4c13-a996-9d4cb416cf27)
![Screenshot (5)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/99065b9c-e7f3-419e-97aa-c7b195faf3a7)
![Screenshot (6)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/b5f0f477-522d-4ba5-83d2-4b1f87184b11)
![Screenshot (7)](https://github.com/HARSHMORE093/Backend-Emotion-based-music-Recommdation/assets/80156271/648a9792-97b0-4085-ac46-60784a6e3865)


