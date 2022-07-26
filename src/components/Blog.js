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
                    <div key={blog.id} className="lg:w-96 w-full transition ease-in-out delay-120 hover:-translate-y-4 duration-300">
                        <a href="/">
                            <img src={`images/${blog.src}`} alt={blog.name} className="object-cover h-96 lg:w-96 w-full" />
                            <div className="border p-2 bg-gray-100">
                                <p className="text-xl font-extrabold">{blog.name}</p>
                                <p className="text-lg font-thin my-3">{blog.description}</p>
                                <p>{blog.published_on} - {(blog.comments === "") ? "No Comments" : blog.comments}</p>
                            </div>
                            <Button className="py-3 px-5">Read More</Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blogs;