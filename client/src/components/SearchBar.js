import React from 'react'

function SearchBar(props) {
    return (
        <div className="container-fluid sticky-top bg-info nav-shadow pt-3">
      <div className="row">
        <div className="col-md-3 pl-md-5 logo">
        <img src="https://img.icons8.com/ios-filled/80/000000/logo.png" alt="logo"/>
        </div>
        <div className="col-md-6">
          <form>
            <fieldset className="form-group">
              <input
                type="text"
                value={props.query}
                className="form-control rounded-pill form-control-lg"
                placeholder="Search. . ."
                onChange={props.onChange}
              ></input>
            </fieldset>
          </form>
          <div className="text-center mb-4">
            <small className="text-white">
              Type the text query you want to look for.
            </small>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    )
}

export default SearchBar
