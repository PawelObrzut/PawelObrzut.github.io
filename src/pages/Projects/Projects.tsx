import './Projects.css';
import BookApp from '../../images/BookApp.png';
import ToDoApp from '../../images/ToDoApp.png';
import ImageGallery from '../../images/ImageGallery.png';
import CocktailApp from '../../images/CocktailApp.png';
import TinyBlog from '../../images/TinyBlog.png';
import JigsawPuzzle from '../../images/JigsawPuzzle.png';
import MilkApp from '../../images/MilkApp.png';

const Projects = () => {
  return (
    <main className="main">
      <h2 className="main--title">Projects</h2>
      <ul className="projects--list">
        <li className="project">
          <h4 className="project--title">Milk App</h4>
          <section className="project--description">
            <p className="project--description__paragraph">An advanced fullStack React - Typescript - Express - MongoDB project.</p>
            <p className="project--description__paragraph">A project implements higher state management using context hook, displays selected items via dynamic routing and gets the content data from the database via the Backend. I set Connection to Mongo with mongoose schema. I also added middleware in the express to filter and paginate data.</p>
            <p className="project--description__paragraph">Both client and server sides are type-safe with proper error handling.</p>
            <p className="project--description__paragraph">I have deployed the front-end to AWS Amplify and the back-end to AWS Beanstalk. However, due to the absence of the SSL certificate, communication between them is disrupted.</p>
          </section>
          <img className="project--image" src={MilkApp} alt="project-milk-app"/>
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/milkApp-frontend">GitHub Repo Frontend</a>
            <a target="blank" href="https://github.com/PawelObrzut/milkApp-backend">GitHub Repo Backend</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Image Gallery with Typescript</h4>
          <section className="project--description">
            <p className="project--description__paragraph">A front-end project with the use of Unsplash api.</p>
            <p className="project--description__paragraph">The application displays pictures upon user search. This project utilizes the Unsplash npm package for constructing fetch requests in an easy and readable way.</p>
            <p className="project--description__paragraph">Results are paginated; the last 3 querries are stored in local storage. Grid is used to display results.</p>
            <p className="project--description__paragraph">This project also uses a loading screen for better UX and takes advantage of @media queries for better exploiting available screens.</p>
          </section>
          <img className="project--image" src={ImageGallery} alt="project-imageGallery-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/ImageGallery">GitHub Repo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Cocktail App</h4>
          <section className="project--description">
            <p className="project--description__paragraph">A full-stack project utilizing React, www.thecocktaildb.com API and MongoDB.</p>
            <p className="project--description__paragraph">I implemented some of the most popular hooks. I used routes and I played a little with props drilling.</p>
            <p className="project--description__paragraph">The back-end yet again is done in express, however, it delivers a connection to MongoDB and the option to store your favorite results in the cloud database. Mongo connection is set with MongoClient.</p>
          </section>
          <img className="project--image" src={CocktailApp} alt="project-coctail-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/mixedDrinksApp">GitHub Repo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Tiny Blog</h4>
          <section className="project--description">
            <p className="project--description__paragraph">A React front-end project in Typescript.</p>
            <p className="project--description__paragraph">Application fetches for posts and displays selected sections.</p>
            <p className="project--description__paragraph">This project takes Typescript to the next level, making props typesafe. I also had fun learning react-transition-group to bring transition to the dropdowns.</p>
          </section>
          <img className="project--image" src={TinyBlog} alt="project-tinyBlog-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/ts_tiny_blog">GitHub Repo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Address Book App</h4>
          <section className="project--description">
            <p className="project--description__paragraph">An application for keeping track of addresses.</p>
            <p className="project--description__paragraph">Front-end is build with vanilla Javascript and Bootstrap. Back-end is an express RESTfull server storing data in a local variable.</p>
            <p className="project--description__paragraph">Worth mentioning is that api endpoints are tested with Mocha and request is validated with Joi.</p>
          </section>
          <img className="project--image" src={BookApp} alt="project-book-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/Address-Book-App">GitHub Repo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">ToDo with Typescript</h4>
          <section className="project--description">
            <p className="project--description__paragraph">A classic ToDo list but wrapped with Typescript superset.</p>
            <p className="project--description__paragraph">This project is a first step into Typescript, which now I feel quite comfortable to work with. Apart prom Typescript itself it requires properly configured wbpack.config.js file.</p>
            <p className="project--description__paragraph">For class names I followed BEM naming convention. Ever scince this project BEM is my favourite choice for structuring css.</p>
          </section>
          <img className="project--image" src={ToDoApp} alt="project-todo-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/toDoApp">GitHub Repo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Jigsaw Puzzle Game</h4>
          <section className="project--description">
            <p className="project--description__paragraph">Another Typescript in React front-end project.</p>
            <p className="project--description__paragraph">A basic jigsaw puzzle game with images for children. Project implements react-jigsaw-puzzle package.</p>
            <p className="project--description__paragraph">Apart from jigsaw package it was also fun to discover Tailwind and build analog clock.</p>
          </section>
          <img className="project--image" src={JigsawPuzzle} alt="project-jigsawPuzzle-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/jigsaw-puzzle">GitHub Repo</a>
          </section>
        </li>

      </ul>
      <section>

      </section>
    </main>
  )
}

export default Projects