import React from 'react'
import { FiHeart, FiShare, FiMessageCircle, FiBookmark } from 'react-icons/fi'
import { distanceInWords } from 'date-fns'

function PostCard({
  user,
  photo,
  likePhotos,
  likes,
  caption,
  location,
  comments,
  date
}) {
  const postDate = new Date(date)
  return (
    <article className="card post-card-wrapper">
      <header className="post-card-header">
        <div>
          <img className="photo" src={user.photo} alt="" />
        </div>
        <div>
          <div className="username">{user.username}</div>
          <div className="location">{location}</div>
        </div>
      </header>
      <div>
        <img className="post-card-photo" src={photo} alt="" />
      </div>
      <div className="post-card-footer">
        <div className="icons">
          <span className="first">
            <button type="button" className="button">
              <span>
                <FiHeart className="icon" style={{ height: 24, width: 24 }} />
              </span>
            </button>
          </span>
          <span>
            <button type="button" className="button">
              <span>
                <FiMessageCircle
                  className="icon"
                  style={{ height: 24, width: 24 }}
                />
              </span>
            </button>
          </span>
          <span>
            <button type="button" className="button">
              <span>
                <FiShare className="icon" style={{ height: 24, width: 24 }} />
              </span>
            </button>
          </span>
          <span className="last">
            <button type="button" className="button">
              <span>
                <FiBookmark
                  className="icon"
                  style={{ height: 24, width: 24 }}
                />
              </span>
            </button>
          </span>
        </div>
        <div className="likes">
          <div className="like-photos">
            {likePhotos.map(ph => (
              <span key={ph} className="like-photo-wrapper">
                <img className="like-photo" src={ph} alt="" />
              </span>
            ))}
          </div>
          <div>{likes}</div>
        </div>
        <div className="comments">
          <ul>
            <li className="user-comment">
              <div>
                <span className="user">{user.username}</span>
                <span>{caption}</span>
              </div>
            </li>
            <li className="load-more">
              <button type="button">Cargar más comentarios</button>
            </li>
            {comments.map(comm => (
              <li key={comm.id} className="user-comment">
                <div>
                  <span className="user">{comm.username}</span>
                  <span>{comm.comment}</span>
                </div>
                <span>
                  <FiHeart className="icon" style={{ height: 12, width: 12 }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="date">
          <time date={postDate.toISOString()}>
            {distanceInWords(new Date(postDate), new Date())}
          </time>
        </div>
      </div>
      <style jsx>{`
        .post-card-wrapper {
          margin-bottom: 60px;
          font-size: 14px;
        }

        .post-card-header {
          padding: 16px;
          font-weight: bold;
          display: flex;
          flex-flow: row;
          align-items: center;
        }
        .post-card-header .photo {
          height: 30px;
          border-radius: 100%;
        }
        .post-card-header .username,
        .post-card-header .location {
          margin-left: 12px;
        }
        .post-card-header .location {
          font-weight: normal;
        }

        .post-card-photo {
          width: 100%;
        }

        .post-card-footer {
          padding: 0 16px;
        }
        .post-card-footer .icons {
          margin-top: 4px;
          line-height: 18px;
        }
        .post-card-footer .icons > span {
          height: 100%;
        }
        .post-card-footer .icons .first {
          margin-left: -8px;
        }
        .post-card-footer .icons .button {
          min-height: 40px;
          min-width: 40px;
        }
        .post-card-footer .icons .last {
          margin-left: auto;
          margin-right: -10px;
        }

        .post-card-footer .likes {
          margin-bottom: 8px;
          display: flex;
          flex-flow: row;
          align-items: center;
        }
        .post-card-footer .likes .like-photos {
          margin-right: 15px;
          display: flex;
          flex-flow: row-reverse;
        }
        .post-card-footer .likes .like-photo {
          border-radius: 100%;
          border: 2px solid #fff;
        }
        .post-card-footer .likes .like-photo {
          height: 24px;
          width: 24px;
          border-radius: 100%;
          margin-right: -12px;
        }
        .post-card-footer .comments {
          margin-top: -5px;
          padding-top: 5px;
          margin-left: -5px;
          padding-left: 5px;
          margin-right: -2px;
          padding-right: 2px;
          overflow-anchor: none;
        }
        .post-card-footer .comments ul {
          margin: 0;
          padding: 0;
        }
        .post-card-footer .comments ul,
        .post-card-footer .comments li {
          list-style: none;
        }
        .post-card-footer .comments .user-comment {
          overflow: hidden;
          padding-bottom: 6px;
          position: relative;
          width: 100%;
          word-wrap: break-word;
          margin-top: -5px;
          padding-top: 5px;
          margin-right: -2px;
          padding-right: 2px;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: flex-start;
        }
        .post-card-footer .comments .user {
          font-weight: bold;
          margin-right: 4px;
        }
        .post-card-footer .comments .load-more {
          margin-bottom: 8px;
        }
        .post-card-footer .comments .load-more button {
          padding: 0;
          color: #999;
        }

        .post-card-footer .date {
          margin-bottom: 4px;
        }
        .post-card-footer .date time {
          color: #999;
          font-size: 10px;
          letter-spacing: 0.2px;
          line-height: 18px;
          text-transform: uppercase;
        }
      `}</style>
    </article>
  )
}

export default PostCard
