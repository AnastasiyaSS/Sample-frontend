import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="flex flex-col max-h-full">
      <div className="flex justify-between bg-gray-800 shadow-lg text-white font-normal p-6">
        <div id="repository-name" className="uppercase text-indigo-400 px-2 py-1">
          {userName}
        </div>
        {typeof repositoryName !== 'undefined' ? (
          <div
            id="go-repository-list"
            className="text-indigo-400 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md"
          >
            <Link to={`/${userName}`}>REPOSITORY LIST</Link>
          </div>
        ) : (
          ''
        )}
        <div
          id="go-back"
          className="text-indigo-400 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md"
        >
          <Link to="/">GO BACK</Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

const mapStateTOProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateTOProps, mapDispatchToProps)(Header)
