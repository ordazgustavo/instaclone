import React from 'react'
import { FiCamera, FiCompass, FiHeart, FiUser } from 'react-icons/fi'

function Header() {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <FiCamera style={{ height: 24, width: 24 }} />
          <div className="separator" />
          <h1 className="logo">Instaclone</h1>
        </div>
        <div>
          <FiCompass style={{ height: 24, width: 24 }} />
          <FiHeart style={{ height: 24, width: 24, marginLeft: 20 }} />
          <FiUser style={{ height: 24, width: 24, marginLeft: 20 }} />
        </div>
      </div>
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
        .header-wrapper {
          margin: 0 auto;
          display: flex;
          flex-flow: row noWrap;
          justify-content: space-between;
          align-items: center;
          max-width: 1010px;
          padding: 26px 20px;
        }
        .logo-wrapper {
          display: flex;
          flex-flow: row noWrap;
          align-items: center;
        }
        .logo {
          font-family: 'Dancing Script', cursive;
          margin: 0;
        }
        .separator {
          background-color: #262626;
          height: 28px;
          margin: 0 16px;
          width: 1px;
        }
      `}</style>
    </header>
  )
}

export default Header
