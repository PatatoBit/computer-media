import Link from "next/link";

interface BlogInfo {
  title: string;
  description: string;
  link: string;
}

function Blog(props: BlogInfo) {
  return (
    <Link href={props.link}>
      <a className="w-full h-full flex flex-col items-center justify-center border-2 border-slate-400 p-2 bg-white rounded-lg shadow-lg hover:scale-105 transition-all">
        <h1 className="text-3xl mb-4">{props.title}</h1>
        <p className="content">{props.description}</p>
      </a>
    </Link>
  );
}

export default Blog;
