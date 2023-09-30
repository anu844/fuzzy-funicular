import "./App.css"
import AppBarMenu from "./components/AppBar"
import { Box, Typography } from '@mui/material'
import HuviKomponent from "./components/Huvid"
import Form from "./components/Vorm"
import FetchPosts from "./components/FetchPosts"
import FetchComments from "./components/FetchComments"

const huvid = [
  {id: 1, nimi: 'Muusika kuulamine'},
  {id: 2, nimi: 'Heegeldamine'},
  {id: 3, nimi: 'Taimede kasvatamine'},
  {id: 4, nimi: 'Puslede kokkupanemine'},
  {id: 5, nimi: 'Koeraga mängimine'},
  {id: 6, nimi: 'Ristsõnade lahendamine'},
  {id: 7, nimi: 'Looduses jalutamine'},
  {id: 8, nimi: 'Lugemine'},
  {id: 9, nimi: 'Joonistamine'},
  {id: 10, nimi: 'Netflixi vaatamine'},
  {id: 11, nimi: 'Kingituste tegemine'},
  {id: 12, nimi: 'Kõpsetamine'},
  {id: 13, nimi: 'Ehete meisterdamine'},
  {id: 14, nimi: 'Küünalde tegemine'},
  {id: 15, nimi: 'Klaveri mängimine' }
  ];

function App() {
  return (
    <Box sx={{  
      backgroundColor: 'rgb(95, 166, 199)'}} 
      className="Container">
       <Typography variant="h2" style={{ color: "rgb(12, 20, 131)" }}>
        {"A N U"}
      </Typography>
      <AppBarMenu />
      <HuviKomponent huvid={huvid} />
      <div className="Separator" /> 
      <Form />
      <FetchPosts></FetchPosts>
      <FetchComments></FetchComments>
    </Box>
  );
}
export default App