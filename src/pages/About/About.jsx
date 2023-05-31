import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

function About() {
  const isDark = useSelector((state) => state.theme.isDark);

  console.log(isDark);

  return <Container maxWidth="lg">About</Container>;
}

export default About;
