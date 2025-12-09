<!-- README TOP -->
<div id="readme-top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="/client/src/assets/MongoMealsLogo.png" alt="Logo" width="80" height="80">

<h3 align="center">MongoMeals</h3>

  <p align="center">
    Recipe application.
    <br />
    <a href="https://github.com/peti9406/mongo-meals"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/peti9406/mongo-meals/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/peti9406/mongo-meals/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MongoMeals is an interactive platform designed to help users discover, create, and organize recipes with ease. You can browse a wide variety of dishes complete with detailed descriptions, step-by-step instructions, and photos — and for some recipes, even watch helpful video guides. In addition to exploring new ideas, you can also create and store your own recipes, keeping everything in one place. If you find something you love, you can add it to your favorites for quick access anytime.

Core Features:
* Browse Recipes
* Create New Recipes
* Add to favorite

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![JavaScript][Javascript.com]][Javascript-url]
-   [![MongoDB][Mongodb.com]][Mongodb-url]
-   [![Exrpess.js][Expressjs.com]][Expressjs-url]
-   [![React][React.com]][React-url]
-   [![Node.js][Nodejs.com]][Nodejs-url]
-   [![Tailwind][Tailwind.com]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can run the project with docker or on your own computer.
Please follow the instructions.
Currently, this is only a test environment.

### Prerequisites

For the project to run locally on your computer, you need:

-   Node.js >= 18
-   npm or yarn (for installing dependencies)
-   MongoDB

Or, if you prefer to run it using Docker:

-   Docker Desktop (Windows / macOS)
-   Docker Engine (Linux)

### Installation

**Before deciding how to run the application check out the /client/vite.config.js and set the proxy!**

#### Run with Docker

1. Clone the repository
    ```sh
    git clone https://github.com/CodecoolGlobal/freestyle-mern-project-2-react-BrindzaB
    cd freestyle-mern-project-2-react-BrindzaB
    ```
2. Build the Docker containers
    ```sh
    docker compose build
    ```
3. Start the containers in detached mode.
    ```sh
    docker compose up -d
    ```

#### Run locally

1. **Clone the repository**
    ```sh
    git clone https://github.com/CodecoolGlobal/freestyle-mern-project-2-react-BrindzaB
    cd freestyle-mern-project-2-react-BrindzaB
    ```
2. **Install server dependencies**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**
    ```bash
    cd ../client
    npm install
    ```
4. **Run the application**

    Open **two terminals**:

    - **Server**
        ```bash
        cd server
        npm run dev
        ```
    - **Client**
        ```bash
        cd client
        npm run dev
        ```

5. **Open the application in your browser**

    - Frontend: [http://localhost:5173](http://localhost:5173)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Under work!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

-   Bóbita Fábiánné Pallagi
-   Botond Brindza
-   Péter Török - p.torok0694@gmail.com

Project Link: [https://github.com/CodecoolGlobal/freestyle-mern-project-2-react-BrindzaB](https://github.com/CodecoolGlobal/freestyle-mern-project-2-react-BrindzaB)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/peti9406/mongo-meals.svg?style=for-the-badge
[contributors-url]: https://github.com/peti9406/mongo-meals/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/peti9406/mongo-meals.svg?style=for-the-badge
[stars-url]: https://github.com/peti9406/mongo-meals/stargazers
[issues-shield]: https://img.shields.io/github/issues/peti9406/mongo-meals.svg?style=for-the-badge
[issues-url]: https://github.com/peti9406/mongo-meals/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/p%C3%A9ter-t%C3%B6r%C3%B6k-95372315a/
[product-screenshot]: public/images/planner-bg.jpg

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://www.javascript.com/
[Mongodb.com]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[Mongodb-url]: https://www.mongodb.com/
[Expressjs.com]: https://img.shields.io/badge/Express.js-0075C9?style=for-the-badge&logo=express&logoColor=white
[Expressjs-url]: https://expressjs.com/
[React.com]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://react.dev/
[Nodejs.com]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en/
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
