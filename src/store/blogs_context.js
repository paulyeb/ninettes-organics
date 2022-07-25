import { createContext, useReducer } from "react";
import blogsReducer from "../reducers/blogsRedeucer";

export const BlogsContext = createContext();

const initialState = {
    blogs: [
        {
            id: 1,
            name: "Men's Skincare Myths",
            src: "men-and-skincare.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!!",
            published_on: "January 3, 2022",
            comments: "12 comments",         },
        {
            id: 2,
            name: "Women's Body Positiviy",
            src: "twins.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!!",
            published_on: "March 30, 2022",
            comments: "",         },
        {
            id: 3,
            name: "Afro Girl Vibes",
            src: "girl_talk.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at totam, culpa placeat cumque recusandae maiores eveniet cum rem error deserunt libero asperiores reprehenderit unde itaque praesentium nobis commodi iste!",         
            published_on: "April 15, 2022",
            comments: "3 comments",
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