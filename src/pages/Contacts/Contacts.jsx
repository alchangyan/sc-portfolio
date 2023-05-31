import { useSelector } from 'react-redux'

import Container from '@mui/material/Container'

function Contacts() {
  const isDark = useSelector(state => state.theme.isDark)
  console.log(isDark);

  return (
    <Container maxWidth="lg">Contacts</Container>
  )
}

export default Contacts