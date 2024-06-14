<h1 align="center">
    <img src="screenshots/logo.svg" alt="application logo">
</h1>

Simple game that user must draw given figure as fast and precisely as possible. AI rates drawings. Directed to kids in age at least 4+.

<p align="center">
    <a href="#features">Features</a>&nbsp;&nbsp; | &nbsp;
    <a href="#contributors">Contributors</a>&nbsp; | &nbsp;
    <a href="#screenshots">Screenshots</a>&nbsp; | &nbsp;
    <a href="#used-technologies">Technologies</a>
</p>

# Features
* user can do simple tasks - draw given figure
* tasks are divided into three levels of difficulty: easy, medium, hard
* AI (backend) rates drawings
* AI models is trained to detect primitives (ex. circle, rectangle, triangle) and digits
* ability to change pen color, eraser and download drawing
* playground for non-limit drawing
* directed to kids in age 4+
* responsive layout for mobile users
* uses Firebase for storing data
* add tasks and manage user directly from Firebase
* available language: Polish (multilingual mechanism is implemented)

# Contributors
<table>
<thead>
<tr>
<th colspan="2">
Frontend
</th>
<th colspan="2">
Backend
</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">
<a href="https://github.com/amelcer">
<img width="64" height="64" src="https://avatars.githubusercontent.com/u/60044260?s=64&v=4" alt="Andrzej Melcer"><br>
Andrzej Melcer
</a>
</td>
<td align="center">
<a href="https://github.com/krzysztofhewelt">
<img width="64" height="64" src="https://avatars.githubusercontent.com/u/24493324?v=4" alt="krzysztofhewelt"><br>
krzysztofhewelt
</a>
</td>
<td align="center">
<a href="https://github.com/juliuszlosinski">
<img width="64" height="64" src="https://avatars.githubusercontent.com/u/72278818?v=4" alt="Juliusz Łosiński"><br>
Juliusz Łosiński
</a>
</td>
<td align="center">
<a href="https://github.com/VeRonikARoNik">
<img width="64" height="64" src="https://avatars.githubusercontent.com/u/76017554?s=64&v=4" alt="Juliusz Łosiński"><br>
VeRonikARoNik
</a>
</td>
</tr>
</tbody>
</table>

# Getting started
This app requires [Firebase](https://firebase.google.com/) database provided by Google. You can use your Google account to create database for free.
Install all needed packages (Python) and dependencies (ui).

# Used technologies
## Frontend
* ReactJS
* Typescript
* Prettier and ESLint
* Tailwind CSS
* Firebase
* Tanstack Query (react-query)
* i18next
* react-hook-form and yup
* classnames
* react-sketch-canvas

Bundler: Vite \
IDE: WebStorm and VSCode \
Design: Figma

## Backend
* Python
* Flask for REST API
* Keras for Digits and Primitives Classifier
* NumPy
* firebase_admin

# Screenshots
<img src="screenshots/login.png" alt="login page">
<img src="screenshots/home.png" alt="home page">
<img src="screenshots/tasks_todo.png" alt="task todo list page">
<img src="screenshots/drawing.png" alt="drawing page">
<img src="screenshots/task_done.png" alt="task done page">
<img src="screenshots/task_scores.png" alt="task done list with score page">
