import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="flex flex-col max-h-full">
      <div className="flex items-center justify-between bg-indigo-800 text-white font-normal p-6">
        <div id="repository-name" className="uppercase">
          {userName}
        </div>
        {typeof repositoryName !== 'undefined' ? (
          <div id="go-repository-list ">
            <Link to={`/${userName}`}>REPOSITORY LIST</Link>
          </div>
        ) : (
          ''
        )}
        <div id="go-back">
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
