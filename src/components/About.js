function About() {
  return (
    <main>
      <section className="bg-blue-50 p-6  text-center pb-36">
        <h2 className="py-2 text-xl">Welcome to my website</h2>
        <p className="w-3/6 m-auto py-2">
          I currently work in the public sector, where I’m responsible for
          managing and maintaining the website. I have a good knowledge of WCAG
          2.1, experience in using CMS Drupal, HTML, CSS, Javascript, Jira,
          working in Agile, Github, SASS.
        </p>
      </section>
      <section className="rounded-md border-black bg-yellow-400 relative -inset-y-12 mx-32">
        <div className="flex justify-around">
          <div className=" p-8 flex flex-col items-center ">
            <h3>Front-end developer</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SASS</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className="p-8 flex flex-col items-center ">
            <h3>Skills</h3>
            <ul>
              <li>WCAG 2.1</li>
              <li>Jira</li>
              <li>Agile and Waterfall</li>
              <li>CMS - Drupal</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
