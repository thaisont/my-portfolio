import shortly from "../logo.svg";
import inn from "../logo_INN.jpg";
import ttruong from "../TTRUONG-black.png";
import Card from "../utilities/Card";

const Projects = () => {
  return (
    <section id="personalProjects" className="text-center pb-16  ">
      <h2 className=" text-3xl font-bold p-6 text-secondary">
        Personal projects
      </h2>
      <p className="mb-8 text-tertiary">
        Below are a few projects I've worked on.
      </p>
      <div className="container max-w-screen-md ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card link="https://kind-mcnulty-cfb64c.netlify.app/" img={inn}>
            <p className="py-2 text-tertiary">
              A games review website using a
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://rawg.io/apidocs"
              >
                {" "}
                video games database
              </a>{" "}
              and Google Maps API. This was built during my General Assembly
              course.
            </p>
          </Card>
          <Card link="https://thaisont.github.io/URL-API/" img={shortly}>
            <p className="py-2 text-tertiary">
              A URL shortening API landing page, using the
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://app.shrtco.de/"
              >
                {" "}
                shrtcode API
              </a>
              . This site was built using SCSS, HTML and Javascript.
            </p>
          </Card>
          <Card link="/" img={ttruong}>
            <p className="py-2 text-tertiary">
              My personal portfolio website built using React and styled with
              Tailwind CSS.
            </p>
          </Card>
          <div className="box shadow rounded-md bg-white p-8 border border-gray-100 flex-1">
            <h2 className="text-2xl text-gray-800 font-medium">Weather app</h2>
            <p className="py-2 text-tertiary">
              A weather app page that gives you the weather of a location. This
              was built using the{" "}
              <a
                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://developer.accuweather.com/apis"
              >
                {" "}
                accuweather API
              </a>
              .
            </p>
            <a
              href="https://practical-curran-3f23aa.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="py-2 px-8 font-medium bg-primary rounded-md text-white hover:bg-blue-600 transition ease-in">
                Live site
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="box shadow rounded-md bg-white p-8 border border-gray-100 flex-1">
          <img src={inn} alt="Logo of Inn" className="w-3/12 m-auto" />
          <p className="py-2 text-tertiary">
            A games review website using a
            <a href="https://rawg.io/apidocs"> video games database API</a> and
            Google Maps API to display the location.
          </p>
          <a href="https://kind-mcnulty-cfb64c.netlify.app/">
            <button className="py-2 px-8 bg-primary rounded-md text-white hover:bg-green-700 transition ease-in">
              Live site
            </button>
          </a>
        </div> */}

        {/* <div className="box shadow rounded bg-white p-8 border border-gray-100 flex-1">
          <img
            src={shortly}
            alt="Logo of Shortly"
            className="w-auto h-8 cursor-pointer m-auto"
          />
          <p className="py-2 text-tertiary">
            A URL shortening API landing page, using the{" "}
            <a href="https://app.shrtco.de/"> shrtcode API</a>. This site was
            built using SCSS, HTML and Javascript.
          </p>
          <a href="https://thaisont.github.io/URL-API/">
            <button className="py-2 px-8 bg-primary rounded-md text-white hover:bg-green-700 transition ease-in">
              Live site
            </button>
          </a>
        </div>
      </div> */}

        {/* <div className="flex max-w-3xl m-auto gap-x-8 ">
        <div className="box shadow rounded-md bg-white p-8 border border-gray-100 flex-1">
          <img
            src={image}
            alt="Logo of TTRUONG"
            className="w-auto h-8 cursor-pointer m-auto"
          />
          <p className="py-2 text-tertiary">
            I wanted to build my skills in React and Tailwind. Therefore I
            decided to build my portfolio website using the specific langauge.
          </p>
          <a href="/">
            <button className="py-2 px-8 bg-primary rounded-md text-white hover:bg-green-700 transition ease-in">
              Live site
            </button>
          </a>
        </div> */}

        {/* <div className="shadow rounded bg-white p-8 border border-gray-100 flex-1">
          <h3 className="py-2 text-primary">Weather forecast app</h3>
          <p className="py-2 text-tertiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Live site</button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
