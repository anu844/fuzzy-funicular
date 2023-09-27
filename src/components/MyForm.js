import { Box, Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"

const MyForm = () => {
  const [name, setName] = React.useState("")
  const [school, setSchool] = useState("")

  const [myForm, setMyForm] = useState(null)

  const saveFields = event => {
    setMyForm(previous => ({
      ...previous,
      [event.target.value]: event.target.value
    }))
  }

  const submitForm = event => {
    event.preventDefault()

    console.log({ myForm })
  }

  //   useEffect(() => {
  //     console.log("No dependency array")
  //   })

  useEffect(() => {
    console.log("Empty dependency array")
  }, [])

  useEffect(() => {
    console.log("myForm updated")
  }, [myForm])

  return (
    <form onSubmit={submitForm}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em"
        }}
      >
        <TextField
          required
          name="Name"
          id="outlined-required"
          label="Name"
          onChange={saveFields}
        />
        <TextField
          name="School"
          id="outlined-required"
          label="School"
          onChange={saveFields}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default MyForm
