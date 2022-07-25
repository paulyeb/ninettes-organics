import { useContext } from "react";
import { BlogsContext } from "../store/blogs_context";
import Button from "./Button";

const Blogs = () => {
    const {state} = useContext(BlogsContext);
    
    return (
        <div className="container px-2 flex flex-col justify-center items-center lg:mt-16 mt-28">
            <div className="text-center lg:mb-20 mb-14">
                <legend className="text-4xl font-medium">Our Blogs</legend>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi nisi et, necessitatibus fuga omnis.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {state.blogs.map(blog => 
                    <div key={blog.id}>
                        <img src={`images/${blog.src}`} alt={blog.name} className="object-cover h-96 lg:w-96 w-full mb-2" />
                        <p className="text-xl font-medium">{blog.name}</p>
                        <p className="text-lg font-thin my-4 lg:w-96 w-full">{blog.description}</p>
                        <Button className="py-3 px-5">Read More</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blogs;