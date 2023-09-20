import React from "react"

// variant 1
// const Hello = props => {
//   const { name } = props
//   return <div>Tervitus {name}</div>
// }

// variant 2
// const Hello = ({ name }) => {
//   return <div>Tervitus, {name}!</div>
// }

// variant 3
//const Hello = ({ name }) => <div>Terekest, {name}!</div>

const Hello = ({ name, age, school }) => (
  <div>
    Terekest, {name} {age} {school}!
  </div>
)

export default Hello
