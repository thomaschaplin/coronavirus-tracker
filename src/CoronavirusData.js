import React from 'react'

export default function CoronavirusData(props) {
    const {
        confirmed,
        recovered,
        deaths,
    } = props

    return (
        <div>
            <br/>
            <h2>{`Confirmed: ${confirmed}`}</h2>
            <h2>{`Recovered: ${recovered}`}</h2>
            <h2>{`Deaths: ${deaths}`}</h2>
        </div>
    )
}
