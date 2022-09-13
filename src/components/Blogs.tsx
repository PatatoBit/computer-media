import Blog from "./Blog";

function Blogs() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen image">
      <h1 className="text-6xl my-4">Blogs</h1>
      <div className="w-3/4 h-72 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Blog
          title="Blog 1"
          description="Complaining about school? Anyways, it's far from being done for now."
          link="/blog"
        />
      </div>
    </div>
  );
}

export default Blogs;
