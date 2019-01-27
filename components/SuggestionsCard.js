import React from 'react'
import UserInfo from './UserInfo'

function SuggestionsCard({ suggestions }) {
  return (
    <article className="card suggestions-card-wrapper">
      <header className="suggestions-card-header">
        <div className="title">Sugerencias para ti</div>
        <div className="action">Ver todas</div>
      </header>
      <div className="suggestions-wrapper">
        {suggestions.map(user => (
          <UserInfo key={user.id} photoSize={34} {...user} action="Seguir" />
        ))}
      </div>
      <style jsx>{`
        .suggestions-card-wrapper {
          font-size: 14px;
          margin: 12px 0;
        }
        .suggestions-card-header {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          padding: 4px 16px;
          margin-top: 12px;
        }
        .suggestions-card-header .title {
          color: #999;
        }

        .suggestions-wrapper {
          margin-top: 8px;
          margin-left: 16px;
          margin-right: 16px;
          overflow-x: hidden;
          overflow-y: auto;
          height: 182px;
        }
        .user-suggestion {
          display: flex;
          flex-flow: row noWrap;
          justify-content: space-between;
        }
      `}</style>
    </article>
  )
}

export default SuggestionsCard
