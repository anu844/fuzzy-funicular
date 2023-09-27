import { Button } from "@mui/material"
import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  const changeCount = amount => setCount(previousCount => previousCount + 1)

  return (
    <>
      <h2>{count}</h2>
      {[-100, -10, -1, 1, 10, 100].map(number => (
        <Button
          variant="contained"
          onClick={() => setCount(previousCount => previousCount + number)}
          sx={{ marginBottom: 1 }}
        >
          Press me {number}
        </Button>
      ))}

      <Button
        variant="contained"
        onClick={() =>
          setTimeout(() => setCount(previousCount => previousCount + 10), 3000)
        }
      >
        Press me async +10
      </Button>
    </>
  )
}
export default Maths
