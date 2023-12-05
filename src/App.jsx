import { Container, Typography } from "@mui/material";
import Converter from "./components/Converter/Converter";
import ActualiCourses from "./components/ActualiCourses/ActualiCourses";

function App() {
  const boxStyles = {
    background: "#fdfdfd",
    textAlign: "center",

    color: "#222",
    minHeight: "20rem",
    borderRadius: 3,
    padding: "40px,24px",

    position: "relative",
  };
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h2" sx={{ marginBottom: "2rem" }}>
        Currency Converter
      </Typography>
      <ActualiCourses />
      <Converter />
    </Container>
  );
}

export default App;
