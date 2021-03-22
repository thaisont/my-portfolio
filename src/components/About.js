function About() {
  return (
    <div>
      <section className="bg-primary p-6  text-center py-24 px-20 md:px-32 lg:px-72 xl:px-80">
        <h2 id="aboutMe" className="py-2 text-3xl font-bold text-white">
          Welcome to my website
        </h2>
        <p className=" py-2 text-white ">
          I currently work in the public sector, where I’m responsible for
          managing and maintaining the website. I have a good knowledge of WCAG
          2.1, experience in using CMS Drupal, HTML, CSS, Javascript, Jira,
          working in Agile, Github, SASS.
        </p>
      </section>
      <section className=" max-w-3xl relative -inset-y-12 m-auto mb-6 container ">
        <div className="flex justify-around shadow-lg pb-4 bg-white  rounded-lg">
          <div className=" p-2 flex flex-col pb-4  ">
            <h3 className="text-xl font-bold text-secondary py-8 pb-4">
              Front-end developer
            </h3>
            <ul className="text-tertiary">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SASS</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className=" p-2 flex flex-col  ">
            <h3 className="text-xl font-bold text-secondary py-8 pb-4">
              Skills
            </h3>
            <ul class="text-tertiary">
              <li>WCAG 2.1</li>
              <li>Jira</li>
              <li>Agile</li>
              <li>Waterfall</li>
              <li>CMS - Drupal</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
