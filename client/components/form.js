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
      <div className="flex flex-grow justify-center items-center bg-gray-50">
        <div className="bg-gray-800 shadow-xl rounded-lg p-10 space-y-4">
          <label htmlFor="label" className="text-gray-200 font-light">
            What`s your username?
          </label>
          <div>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-free focus:outline-none focus:shadow-outline"
              id="input-field"
              type="text"
              placeholder="Username"
              value={user}
              onChange={onChange}
            />
          </div>
          <div>
            <button
              className="bg-indigo-500 text-gray-900 hover:bg-indigo-700 hover:text-white shadow-md font-normal py-3 px-5 rounded-full"
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
