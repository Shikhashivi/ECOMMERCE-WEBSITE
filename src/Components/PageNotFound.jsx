import React from 'react'

const PageNotFound = () => {
  return (
    <div className='error-page'>
        <h1>404 Not Found</h1>
        <p>Your Visit page not found . You may go to home</p>
        <button type="button" class="btn btn-danger"><a href="/">Back to home page</a></button>
        </div>
  )
}

export default PageNotFound