function About() {
  return (
    <main>
      <section className="bg-blue-50 p-6  text-center pb-28">
        <h2 className="py-2 text-2xl font-bold">Welcome to my website</h2>
        <p className="w-3/6 m-auto py-2">
          I currently work in the public sector, where I’m responsible for
          managing and maintaining the website. I have a good knowledge of WCAG
          2.1, experience in using CMS Drupal, HTML, CSS, Javascript, Jira,
          working in Agile, Github, SASS.
        </p>
      </section>
      <section className=" max-w-3xl  rounded-md border-black bg-indigo-600 relative -inset-y-12 m-auto mb-6 ">
        <div className="flex justify-around shadow-xl pb-4 ">
          <div className=" p-2 flex flex-col pb-4  ">
            <h3 className="text-xl font-bold text-white py-8 pb-4">
              Front-end developer
            </h3>
            <ul className="text-white">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SASS</li>
              <li>Tailwind</li>
            </ul>
          </div>

          <div className=" p-2 flex flex-col  ">
            <h3 className="text-xl font-bold text-white py-8 pb-4">Skills</h3>
            <ul class="text-white">
              <li>WCAG 2.1</li>
              <li>Jira</li>
              <li>Agile</li>
              <li>Waterfall</li>
              <li>CMS - Drupal</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
