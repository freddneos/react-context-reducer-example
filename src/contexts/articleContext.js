import React, { createContext, useReducer } from 'react'
import { reducer } from "../reducer"


export const ArticleContext = createContext()

const ArticleProvider = ({ children }) => {
    // const [articles, dispatch] = useReducer(reducer, [
    //     { id: 3, title: "post 3", body: "content of post 3" },
    //     { id: 4, title: "post 4", body: "content of post 4" }
    // ])
    const [articles, dispatch] = useReducer(reducer, [])

    return (
        <ArticleContext.Provider value={{ articles, dispatch }}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleProvider
