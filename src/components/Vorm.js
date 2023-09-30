import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

const Form = () => {
  const [myForm, setMyForm] = useState({eesnimi: "", perenimi: ""})
  const [submitted, setSubmitted] = useState(false)

  const saveFields = event => {
    setMyForm(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const submitForm = event => {
    event.preventDefault()

    console.log("Vormi esitamine:", myForm);
  }

  return (
    <form onSubmit={submitForm}>
        <div style={{ marginBottom: "1em" }}>
        <Typography variant= "h5">
          Sisestage andmed:
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1em"
        }}
      >
        <TextField
          required
          name="eesnimi"
          id="outlined-required"
          label="Eesnimi"
          onChange={saveFields}
        />
        <TextField
        required
          name="perenimi"
          id="outlined-required"
          label="Perekonnanimi"
          onChange={saveFields}
        />
        <Button type="submit" variant="contained" onClick={() => setSubmitted(true)}>
          Kinnita
        </Button>

        {submitted && (
          <Typography variant="body1">
            Eesnimi: {myForm.eesnimi}, Perekonnanimi: {myForm.perenimi}
          </Typography>
        )}
      </Box>
    </form>
  )
}

export default Form
