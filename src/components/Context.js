import React from 'react'

export const C = React.createContext(null)

const Context = ({ children, value }) => <C.Provider value={value}>{children}</C.Provider>

export default Context