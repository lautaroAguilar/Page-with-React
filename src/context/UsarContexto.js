import Contexto from "./Contexto";

import React from 'react'

export default function UsarContexto(props) {
    const {children} = props
  return (
    <>
        <Contexto.Provider value={{
          /* funciones generales */
        }}>
            {children}
        </Contexto.Provider>
    </>
  )
}
