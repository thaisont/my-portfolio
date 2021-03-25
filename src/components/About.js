function About() {
  return (
    <div>
      <section className="bg-primary p-6  text-center py-24 px-12 md:px-32 lg:px-72 xl:px-80">
        <h2 id="aboutMe" className="py-2 text-3xl font-bold text-white">
          Welcome to my website
        </h2>
        <p className=" py-2 text-white ">
          Enthusiastic self-taught front end developer with a focus on building
          robust and accessible interfaces. I am knowledgeable in HTML, CSS,
          JavaScript, React and Drupal, with a passion to build web applications
          and learning new technologies.
        </p>
      </section>
      <section className=" max-w-3xl relative -inset-y-12 m-auto mb-6 container ">
        <div className="flex justify-around shadow-lg pb-4 bg-white  rounded-lg">
          <div className=" p-2 flex flex-col pb-4  ">
            <h3 className=" text-lg md:text-xl font-bold text-secondary py-8 pb-4">
              Front-end
            </h3>
            <ul className="text-tertiary text-sm md:text-base">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SCSS/SASS</li>
              <li>React</li>
              <li>NPM</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className=" p-2 flex flex-col  ">
            <h3 className="text-lg md:text-xl font-bold text-secondary py-8 pb-4">
              Skills
            </h3>
            <ul class="text-tertiary text-sm md:text-base">
              <li>Github</li>
              <li>WCAG 2.1</li>
              <li>Visual studio code</li>
              <li>Jira</li>
              <li>Figma</li>
              <li>CMS - Drupal</li>
              <li>Agile / Waterfall</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
