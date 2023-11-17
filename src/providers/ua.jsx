import PropTypes from 'prop-types'
import React from 'react'
import UAParser from 'ua-parser-js'
import { Loading } from '@/components/atoms/Loading/Loading'

export const UAContext = React.createContext(null)

export const UAProvider = ({ children }) => {
  if (typeof window === 'undefined') {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          left: 0,
          top: 0,
          width: '100vw',
          zIndex: 9999999
        }}
      >
        <Loading />
      </div>
    )
  }
  const currentUA = new UAParser().getResult()

  return (
    <UAContext.Provider value={currentUA}>
      { children }
    </UAContext.Provider>
  )
}

UAProvider.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node.isRequired
}
