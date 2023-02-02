import './AboutMe.css';

const Home = () => {
  return (
    <main className="main">
      <section className="main--aboutMe">
        <h2>About Me</h2>
        <p className="main--aboutMe__paragraph">
          Hi! My name is Pawel Obrzut, I am an accomplished individual with a diverse background in both biology and technology. After graduating from university in 2009, I dove into the world of sales and product development in the self-adhesive market, honing my skills for over a decade.
        </p>

        <p className="main--aboutMe__paragraph">
          However, my true passion lies in programming, and I have dedicated myself to mastering a variety of languages and technologies through online courses and eventually a demanding bootcamp at SALT in Stockholm. My expertise in web development tech-stacks like Javascript-Typescript, React, MongoDB, and many more make me a valuable asset in the tech industry. In addition to my professional pursuits, I also enjoy a variety of outdoor activities, from running and cycling to ice skating and sailing. I have a passion for playing the guitar and create my own music.
        </p>
      </section>
      <section className="main--resume">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <h3 className="position--title">Full-Stack JavaScript Developer <span className="position--empoyer">@School of Applied Technology &lt;/salt&gt;</span></h3>
            <span className="position--work__period">Sep 2022 - Present</span>
            <p className="position--description__paragraph">
              I completed an intensive, three-months training program for full stack web development with the focus on TDD, mob programming, and applied learning.
            </p>
            <p className="position--description__paragraph">
              At present, I am part of Post Graduate Programme, where I further develop my skills and knowlegde by building porfolio projects.
            </p>
            <h4 className="position--skills__title">Gained skills:</h4>
              <ul className="position--skills_list">
                <li>TypeScript</li>
                <li>Modern Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux-Toolkit-Context</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Webpack</li>
                <li>Docker</li>
                <li>Headless CMS</li>
                <li>AWS</li>
                <li>GoLang</li>
              </ul>
          </li>
          <li>
            <h3 className="position--title">Product Owner <span className="position--empoyer">@Rollfix</span></h3>
            <span>Jun 2017 - Mar 2022</span>
            <p className="position--description__paragraph">
              I was a product owner for aluminum tapes, pvc tapes, double sided acrylic foams and double sided fiber-glass reinforced tapes.
              My role included developing sales in the HVAC sector, acquiring and maintaining long-term relationships with clients and suppliers.
            </p>
            <p className="position--description__paragraph">
              I often coordinating customized product assembly by close co-operation with purchase, production and logistic departments.
              I was reporting on sales, stock, and competition activity directly to the management.
            </p>
            <p className="position--description__paragraph">
              On top I actively participated in the implementation of the new CRM and ERP computer systems and conducting internal trainings on new tools.
            </p>
          </li>
          <li>
            <h3 className="position--title">Sales Associate <span className="position--empoyer">@Tarzian West For Housewares</span></h3>
            <span>Nov 2016 - Apr 2017</span>
            <p className="position--description__paragraph">
              Providing customer service in retail industry
            </p>
            <p className="position--description__paragraph">
            Accepting deliveries and vouchering entries of stock
            </p>
          </li>
          <li>
            <h3 className="position--title">Sales Specialist <span className="position--empoyer">@Rollfix</span></h3>
            <span>Nov 2016 - Apr 2017</span>
            <p className="position--description__paragraph">
              Developing sales in the furniture, optical, packaging, printing, and automotive sectors. Maintaining long-term relationships with clients and suppliers
            </p>
            <p className="position--description__paragraph">
             Constantly increasing turnover by acquiring new clients in Poland and abroad
            </p>
            <p className="position--description__paragraph">
             Compaint managamnet.
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home