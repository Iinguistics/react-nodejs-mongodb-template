import React from 'react'

const GoBack = ({ history }) => {
    return (
        <button type="button" className="btn btn-dark mb-4" onClick={ ()=> history.push('/') }>Go Back</button>
    )
}

export default GoBack
