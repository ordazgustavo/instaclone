import React from 'react'
import { distanceInWords } from 'date-fns'

import UserInfo from './UserInfo'

function StoriesCard({ stories }) {
  return (
    <article className="card stories-card-wrapper">
      <header className="stories-card-header">
        <div className="title">Historias</div>
        <div className="action">Ver todas</div>
      </header>
      <div className="stories-wrapper">
        <div>
          {stories.map(user => (
            <UserInfo
              key={user.id}
              photoSize={44}
              label={distanceInWords(
                new Date(user.date),
                new Date()
              ).toUpperCase()}
              {...user}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .stories-card-wrapper {
          font-size: 14px;
        }
        .stories-card-header {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          padding: 4px 16px;
          margin-top: 12px;
        }
        .stories-card-header .title {
          color: #999;
        }

        .stories-wrapper {
          margin-top: 8px;
          margin-left: 16px;
          overflow-x: hidden;
          overflow-y: auto;
          height: 182px;
        }
      `}</style>
    </article>
  )
}

export default StoriesCard
