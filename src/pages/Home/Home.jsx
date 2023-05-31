import { useSelector } from 'react-redux'
import Container from '@mui/material/Container'

function Home() {
  const isDark = useSelector(state => state.theme.isDark)
  console.log(isDark);

  return (
    <Container maxWidth="lg">Home</Container>
  )
}

export default Home;
