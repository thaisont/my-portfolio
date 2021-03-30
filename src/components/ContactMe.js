import cv from "../resume-thai.pdf";

function Contact() {
  return (
    <section id="contactMe" className="text-center mb-8">
      <h2 className="text-3xl font-bold p-6 text-secondary">Contact</h2>
      <p className="mb-8 text-tertiary mx-2">
        If you have any questions, please don't hesitate to reach out!
      </p>
      <a href={cv} target="_blank">
        <button className="py-2 px-16 font-medium  bg-primary rounded-md text-white hover:bg-blue-600 transition ease-in">
          View CV
        </button>
      </a>
    </section>
  );
}

export default Contact;
