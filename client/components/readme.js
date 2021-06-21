import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams /* , Link */ } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Header from './header'

const ReadMe = () => {
  const [repos, setRepos] = useState('')
  const { userName, repositoryName } = useParams()

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((it) => {
        setRepos(it.data)
      })
  }, [userName, repositoryName])

  return (
    <div className="flex flex-col max-h-full">
      <Header />
      <div className="flex flex-grow justify-between break-all items-center p-6">
        <div id="description" className="markdown-body">
          <ReactMarkdown>{repos}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

ReadMe.propTypes = {}

const mapStateTOProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateTOProps, mapDispatchToProps)(ReadMe)
