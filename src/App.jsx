import { Container, Typography } from "@mui/material";
import Converter from "./components/Converter/Converter";
import ActualiCourses from "./components/ActualiCourses/ActualiCourses";

function App() {
  const boxStyles = {
    background: "#fdfdfd",
    textAlign: "center",
    marginTop: "10rem",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 3,
    padding: "40px,24px",
    boxShadow: "0px 5px 5px -5px rgba(34, 60, 80, 0.6) inset",
    position: "relative",
  };
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Currency Converter
      </Typography>
      <ActualiCourses />
      <Converter sx={{ marginBottom: "2rem" }} />
    </Container>
  );
}

export default App;
