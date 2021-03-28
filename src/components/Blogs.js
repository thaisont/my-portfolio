/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import accessbile from "../accessible.png";
import journey from "../Front-end-developer-image.png";

function Blogs() {
  return (
    <section className="text-center bg-primary mb-16">
      <h2 id="blogs" className="text-3xl font-bold p-6 text-white">
        Blog
      </h2>
      <p className="mb-8 px-2 text-white">
        Below are a few blogs post around my journey as a front end developer.
      </p>

      <div className="container max-w-3xl m-auto gap-x-8 pb-4">
        <div>
          <a
            href="https://ttruong.hashnode.dev/front-end-accessibility"
            target="_blank"
          >
            <div className="text-left shadow rounded-md bg-white p-8 border border-gray-100 mb-8 md:flex">
              <div className="flex flex-col pr-4">
                <h3 className="py-2  text-primary text-xl">
                  Front-end accessibility
                </h3>
                <p className="text-secondary text-sm py-2">
                  Mar 14, 2021. 3 min read
                </p>
                <p className="text-secondary text-sm">
                  Accessibility Did you know that at least 1 in 5 people in the
                  UK have a long term illness, impairment or disability. This is
                  why it is important to keep accessibility in mind when you are
                  developing your service. This will ensure that it can be
                  used...
                </p>
              </div>
              <img
                src={accessbile}
                alt="Text displaying accessbility with a yellow background"
                className="max-w-full rounded-sm  md:w-1/2 md:px-2 py-2  "
              />
            </div>
          </a>
        </div>
      </div>

      <div className="container max-w-3xl m-auto gap-x-8 pb-4">
        <div>
          <a
            href="https://ttruong.hashnode.dev/self-taught-developer-journey"
            target="_blank"
          >
            <div className=" text-left shadow rounded-md bg-white p-8 border border-gray-100 mb-8 md:flex">
              <div className="flex flex-col pr-4">
                <h3 className="py-2  text-primary text-xl">
                  Self-taught developer journey
                </h3>
                <p className="text-secondary text-sm py-2">
                  Feb 28, 2021. 2 min read
                </p>
                <p className="text-secondary text-sm">
                  Hi all, I'm pretty new to blogging, even the thought of
                  writing one seems so bizarre. But the reason I want to start
                  blogging is to make notes of what I'm learning and sharing
                  that knowledge to anyone who might think it'll be of value.
                  Whe...
                </p>
              </div>
              <img
                src={journey}
                alt="Text displaying accessbility with a yellow background"
                className="max-w-full rounded-sm  md:w-1/2 md:px-2 py-2 "
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
