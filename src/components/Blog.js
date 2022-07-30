import { useContext } from "react";
import { BlogsContext } from "../store/blogs_context";
import Button from "./Button";

const Blogs = () => {
    const {state} = useContext(BlogsContext);
    
    
    return (
        <div className="container font-poppins px-2 flex flex-col justify-center items-center lg:mt-16 mt-28">
            <div className="text-center lg:mb-20 mb-14">
                <p className="text-4xl font-medium text-center">Ninette's Blogs</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi nisi et, necessitatibus fuga omnis.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {state.blogs.map(blog => 
                    <div className="lg:max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg object-cover" src={`images/${blog.src}`} alt={blog.name} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Blogs;

{/* <div key={blog.id} className="lg:w-96 w-full transition ease-in-out delay-120 hover:-translate-y-4 duration-300">
    <a href="/">
        <img src={`images/${blog.src}`} alt={blog.name} className="object-cover h-96 lg:w-96 w-full" />
        <div className="border p-2 bg-gray-100">
            <p className="text-xl font-extrabold">{blog.name}</p>
            <p className="text-lg font-thin my-3">{blog.description}</p>
            <p>{blog.published_on} - {(blog.comments === "") ? "No Comments" : blog.comments}</p>
        </div>
        <Button className="py-3 px-5">Read More</Button>
    </a>
</div> */}
