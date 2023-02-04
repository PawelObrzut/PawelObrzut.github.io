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
            <p className="project--description__paragraph">
              A MERN project that implements state management using context hook, 
              displays selected items via dynamic routing and gets the content data from the database via the back-end. 
              I set Connection to Mongo with mongoose schema. I also added middleware in the express to filter and paginate data.
            </p>
          </section>
          <img className="project--image" src={MilkApp} alt="project-milk-app"/>
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/milkApp-frontend">GitHub client</a>
            <a target="blank" href="https://github.com/PawelObrzut/milkApp-backend">GitHub server</a>
            <a target="blank" href="https://milkapp.onrender.com/">Demo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Image Gallery with Typescript</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              A front-end project that utilizes the Unsplash api and Unsplash npm package for constructing fetch requests in an easy and readable way.
              Results are paginated; the last 3 querries are stored in local storage. Grid is used to display results.
            </p>
          </section>
          <img className="project--image" src={ImageGallery} alt="project-imageGallery-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/ImageGallery">GitHub</a>
            <a target="blank" href="https://main.d1p5bfrstj7aoq.amplifyapp.com/">Demo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Cocktail App</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              A MERN project with the use of www.thecocktaildb.com API. I use the most popular hooks, routes and I played a little with props drilling.
              The back-end yet again is done in express, to connect to MongoDB and serve the option of storing your favorite drinks in the cloud database. Mongo connection is set with MongoClient.
            </p>
          </section>
          <img className="project--image" src={CocktailApp} alt="project-coctail-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/mixedDrinksApp">GitHub</a>
            <a target="blank" href="https://cocktailapp-v2j9.onrender.com/">Demo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Tiny Blog</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              A React front-end project in Typescript. Application fetches for posts and displays selected sections. This project takes Typescript to the next level, making props typesafe. I also had fun learning react-transition-group to bring transition to the dropdowns.
            </p>           
          </section>
          <img className="project--image" src={TinyBlog} alt="project-tinyBlog-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/ts_tiny_blog">GitHub</a>
            <a target="blank" href="https://pawelobrzut.github.io/ts_tiny_blog/">Demo</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Address Book App</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              An application for keeping track of addresses. Front-end is build with vanilla Javascript and Bootstrap. Back-end is an express RESTfull server storing data in a local variable.
              Worth mentioning is that api endpoints are tested with Mocha and request is validated with Joi.
            </p>
          </section>
          <img className="project--image" src={BookApp} alt="project-book-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/Address-Book-App">GitHub</a>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">ToDo with Typescript</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              A classic ToDo list wrapped with Typescript superset. I configured wbpack.config.js file myself.
              For class names I followed BEM naming convention. Ever scince this project BEM is my favourite choice for structuring css.
            </p>
          </section>
          <img className="project--image" src={ToDoApp} alt="project-todo-app" />
          <section className="project--links">
            <span>GitHub Repository is private</span>
          </section>
        </li>
        <li className="project">
          <h4 className="project--title">Jigsaw Puzzle Game</h4>
          <section className="project--description">
            <p className="project--description__paragraph">
              Another Typescript in React front-end project.
              A basic jigsaw puzzle game with images for children. Project implements react-jigsaw-puzzle package and is styled with the use of Tailwind.
            </p>
          </section>
          <img className="project--image" src={JigsawPuzzle} alt="project-jigsawPuzzle-app" />
          <section className="project--links">
            <a target="blank" href="https://github.com/PawelObrzut/jigsaw-puzzle">GitHub</a>
            <a target="blank" href="https://pawelobrzut.github.io/jigsaw-puzzle/">Demo</a>
          </section>
        </li>

      </ul>
      <section>

      </section>
    </main>
  )
}

export default Projects