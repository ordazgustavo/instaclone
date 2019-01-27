import React from 'react'

function UserInfo({ photoSize, profilePhoto, username, label, action }) {
  return (
    <div className="user-info">
      <div className="profile-photo-wrapper">
        <img className="profile-photo" src={profilePhoto} alt="" />
      </div>
      <div className="username-wrapper">
        <div className="username">{username}</div>
        <div className="label">{label}</div>
      </div>
      {action && (
        <button type="button" className="user-action">
          {action}
        </button>
      )}
      <style jsx>{`
        .user-info {
          display: flex;
          flex-flow: row noWrap;
          align-items: center;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .profile-photo {
          width: ${photoSize}px;
          height: ${photoSize}px;
          border-radius: 100%;
        }
        .username-wrapper {
          margin-left: 14px;
          min-width: 0;
        }
        .username-wrapper .username {
          font-weight: bold;
          line-height: 18px;
          margin-bottom: 2px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .username-wrapper .label {
          color: #999;
          font-size: 12px;
          line-height: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .user-action {
          font-weight: bold;
          color: #3897f0;
          margin-left: 8px;
        }
      `}</style>
    </div>
  )
}

export default UserInfo
