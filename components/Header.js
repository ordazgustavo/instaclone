import React from 'react'

function Header() {
  return (
    <header className="main-header">
      logo
      <style jsx>{`
        .main-header {
          height: 77px;
          width: 100%;
          background: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 100;
        }
      `}</style>
    </header>
  )
}

export default Header
