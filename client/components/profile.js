import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Head from './head'
import Header from './header'

const Profile = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([ ])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {
      setRepos(it.data.map((repo) => repo.name))
    })
  }, [userName])

  return (
    <div className="flex flex-col h-screen">
      <Head title="Hello" />
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-gray-800 text-white font-regular rounded-lg border space-y-4 shadow-xl p-10">
          {repos.map((item) => {
            return (
              <div key={item} className="hover:text-indigo-400 ">
                <Link to={`/${userName}/${item}`}>{item}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

const mapStateTOProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateTOProps, mapDispatchToProps)(Profile)
