import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { history } from '../redux'


const Form = () => {
  const [user, setUser] = useState('')
  const onChange = (event) => {
    setUser(event.target.value)
  }

  const historyClick = () => {
    history.push(`/${user}`)
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-indigo-800 text-white font-light rounded-lg border shadow-lg p-10 space-y-4">
          <div className="space-y-4">
            What`s your username?
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-free focus:outline-none focus:shadow-outline"
              id="input-field"
              type="text"
              placeholder="Username"
              value={user}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full"
              id="search-button"
              type="button"
              onClick={historyClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {}

const mapStateTOProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateTOProps, mapDispatchToProps)(Form)
