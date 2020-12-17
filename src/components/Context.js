import React from 'react'

export const BooksContext = React.createContext(null)

const Context = ({ children, value }) => <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

export default Context