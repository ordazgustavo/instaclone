import React from 'react'
import Head from 'next/head'

import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import PostCard from '../components/PostCard'
import StoriesCard from '../components/StoriesCard'
import UserInfo from '../components/UserInfo'

import postsGenerator from '../utils/postsGenerator'
import userGenerator from '../utils/userGenerator'
import storiesGenerator from '../utils/storiesGenerator'
import suggestionsGenerator from '../utils/suggestionsGenerator'
import SuggestionsCard from '../components/SuggestionsCard'

const POSTS = postsGenerator(5)
const USER_INFO = userGenerator()
const STORIES = storiesGenerator(10)
const SUGGESTIONS = suggestionsGenerator(3)

function Home() {
  return (
    <section>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Main>
        <section className="page-wrapper">
          <div className="posts-wrapper">
            {POSTS.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
          <div className="stories-wrapper">
            <UserInfo
              photoSize={58}
              label={`${USER_INFO.firstName} ${USER_INFO.lastName}`}
              {...USER_INFO}
            />
            <StoriesCard stories={STORIES} />
            <SuggestionsCard suggestions={SUGGESTIONS} />
          </div>
        </section>
      </Main>
      <GlobalStyles />
      <style jsx>{`
        .page-wrapper {
          width: 100%;
          display: flex;
          flex-flow: row noWrap;
          justify-content: space-between;
          max-width: 935px;
          padding-top: 60px;
          margin-top: 77px;
        }
        .posts-wrapper {
          width: 65%;
        }
        .stories-wrapper {
          height: 100vh;
          position: sticky;
          right: 0;
          top: 77px;
          width: 100%;
          max-width: 293px;
        }
        @media (max-width: 1000px) {
          .stories-wrapper {
            display: none;
          }
          .page-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Home
