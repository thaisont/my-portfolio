function Blogs() {
  return (
    <section className="text-center bg-primary mb-24">
      <h2 className="text-3xl font-bold p-6 text-secondary text-white">
        Blogs
      </h2>
      <p className="mb-8 text-white">Below are a few blog posts</p>
      <div className="box-layout flex max-w-3xl m-auto gap-x-8 pb-4">
        <div className="box shadow rounded-md bg-white p-8 border border-gray-100 mb-8">
          <h3 className="py-2  text-primary">Shortly</h3>
          <p className="py-2 text-tertiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Live site</button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
