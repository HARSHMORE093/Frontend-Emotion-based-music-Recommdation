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

![Screenshot (2)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/e926545e-2fd8-41a5-aa81-f447e8802a80)
![Screenshot (3)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/f162fa82-dd3a-461e-b8bd-b28fcf0cf695)
![Screenshot (4)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/ddd5e965-58e1-4397-99bc-e36fbc0b1ef4)
![Screenshot (5)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/3df55936-ee7c-411a-9716-773d1c5c658f)
![Screenshot (6)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/29bfc6ab-4b03-44f8-991e-0bc1300c65b0)
![Screenshot (7)](https://github.com/HARSHMORE093/EmotionMusicRecommadation/assets/80156271/435df58d-8e2f-44b1-a5b8-82ac3680a282)

