import React from 'react'
import Head from 'next/head'

import GlobalStyles from '../components/GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import PostCard from '../components/PostCard'
import StoriesCard from '../components/StoriesCard'
import UserInfo from '../components/UserInfo'
import SuggestionsCard from '../components/SuggestionsCard'

import postsGenerator from '../utils/postsGenerator'
import userGenerator from '../utils/userGenerator'
import storiesGenerator from '../utils/storiesGenerator'
import suggestionsGenerator from '../utils/suggestionsGenerator'

class Home extends React.Component {
  static async getInitialProps({ req }) {
    let posts = []
    let userInfo = []
    let stories = []
    let suggestions = []

    if (req) {
      posts = postsGenerator(5)
      userInfo = userGenerator()
      stories = storiesGenerator(10)
      suggestions = suggestionsGenerator(3)
    }
    return { posts, userInfo, stories, suggestions }
  }

  state = {
    posts: [...this.props.posts]
  }

  componentDidMount() {
    window.onscroll = () => {
      const { error, isLoading } = this.state
      if (error || isLoading) return

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.loadMorePosts()
      }
    }
  }

  loadMorePosts = () => {
    this.setState({ isLoading: true }, () => {
      const nextPosts = postsGenerator(5)

      this.setState({
        isLoading: false,
        posts: [...this.state.posts, ...nextPosts]
      })
    })
  }

  render() {
    const { posts } = this.state
    const { userInfo, stories, suggestions } = this.props
    return (
      <section>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Dancing+Script"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <Main>
          <section className="page-wrapper">
            <div className="posts-wrapper">
              {posts.map(post => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
            <div className="stories-wrapper">
              <UserInfo
                photoSize={58}
                label={`${userInfo.firstName} ${userInfo.lastName}`}
                {...userInfo}
              />
              <StoriesCard stories={stories} />
              <SuggestionsCard suggestions={suggestions} />
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
}

export default Home
