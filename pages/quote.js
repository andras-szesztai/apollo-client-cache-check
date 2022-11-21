import React from 'react'
import {client} from './_app'
import {READ_ALL_QUOTES} from '.'

const CountryPage = () => {
  const cache = client.readQuery({
    query: READ_ALL_QUOTES,
  })
  console.log({quotePage: cache?.quotes});
  return (
    <div>Quote Page</div>
  )
}

export default CountryPage
