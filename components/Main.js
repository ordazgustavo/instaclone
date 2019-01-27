import React from 'react'

function Main({ children }) {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          background: #fafafa;
        }
      `}</style>
    </main>
  )
}

export default Main
