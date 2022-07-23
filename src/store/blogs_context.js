import { createContext, useReducer } from "react";
import blogsReducer from "../reducers/blogsRedeucer";

export const BlogsContext = createContext();

const initialState = {
    blogs: [
        {
            id: 1,
            name: "Men's Skincare",
            src: "men-and-skincare.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!!"        },
        {
            id: 2,
            name: "Women's Health",
            src: "women's-health.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!!"        },
        {
            id: 3,
            name: "Girl Talk",
            src: "girl_talk.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!"
        }
    ]
    
} 

const BlogsProvider = ({children}) => {
    const [state, dispatch] = useReducer(blogsReducer, initialState);

    return <BlogsContext.Provider value={{state, dispatch}}>
        {children}
    </BlogsContext.Provider>
}

export default BlogsProvider;