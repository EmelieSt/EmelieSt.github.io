import React from "react";
import Box from "@mui/material/Box";
import Moodyforest from "../../Images/Moodyforest.jpg";
import Emelie2 from "../../Images/Emelie2.jpeg"
import kontakt from "../../Images/kontakt.png"
import { useTheme } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

const AboutMe = () => {
  const theme = useTheme();
  const inSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          marginTop: "20vh",
          pt: "20px",
          bgcolor: "#191B1D",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "fit-content"
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Kontaktinformation
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />
      </Paper>

      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "60%",
          display: "flex",
          flexDirection: inSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: inSmallScreen ? "center" : "space-around",
          minHeight: "fit-content"
        }}
      >
        <div style={{ flex: 2, marginBottom: inSmallScreen ? "20px" : 0 }}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "#333",
              width: inSmallScreen ? "100%" : "60%",
              color: "#fff",
              padding: "20px",
              marginLeft: inSmallScreen ? 0 : "8rem",
              minHeight: "fit-content"
            }}
          >
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "flex-start",
                minHeight: "fit-content"
              }}
            >
              <ListItemText>Namn: Emelie Stråth</ListItemText>
              <ListItemText>
                Adress: Tofta Munkagård 1, 35592 Växjö
              </ListItemText>
              <ListItemText>Födelsedatum: 89-05-25</ListItemText>
              <ListItemText>Mobil: 072-176 57 31</ListItemText>
              <ListItemText>Mail: emeliestrath@hotmail.com</ListItemText>
              <ListItemText>
                LinkedIn:
                <a href="https://www.linkedin.com/in/emelie-str%C3%A5th-76a862254/">
                  <strong>Emelie Stråth</strong>
                </a>{" "}
              </ListItemText>
            </ListItem>
          </Paper>
        </div>
        <div
          style={{
            flex: 1,
            marginBottom: inSmallScreen ? "20px" : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={kontakt}
            alt="Selfie"
            style={{ maxWidth: "12rem", height: "auto" }}
          />
        </div>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "60%",
          display: "flex",
          flexDirection: inSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: inSmallScreen ? "center" : "space-around",
          minHeight: "fit-content",
          marginBottom: "20vh"
        }}
      >
         <div
          style={{
            flex: 1,
            marginBottom: inSmallScreen ? "20px" : 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Emelie2}
            alt="Selfie"
            style={{ maxWidth: "12rem", height: "auto" }}
          />
        </div>
        <div style={{ flex: 2, marginBottom: inSmallScreen ? "20px" : 0 }}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "#333",
              width: inSmallScreen ? "100%" : "80%",
              color: "#fff",
              padding: "20px",
              margin: inSmallScreen ? 0 : "4rem",
            }}
          
          >
            <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
              Hallå där! Kul att du är nyfiken på att få veta lite mer om mig!
            </Typography>
            <Typography sx={{ padding: "1rem"}}>
              Mitt namn är Emelie Stråth och jag är 35 år gammal. Jag lever på en liten gård strax 
              utanför Växjö tillsammans med min man, våra fyra barn och vår fyrfotade vän, Nicki. 
    
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Mitt liv tog en oväntad sväng när jag, av ren slump, hamnade i IT-världen. 
              Efter att ha provat på en kurs i programmering så föll jag som en fura! Till sommaren tar jag examen
              som utvecklare och jag ser verkligen fram emot att få bygga vidare på mina kunskaper inom programmering.
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              När jag inte sitter och kodar, ägnar jag mycket tid åt min familj och vårt hem. Vi ägnar 
              en del tid till renoveringar som är ett evighetsprojekt men roligt är det! Dessutom är friluftliv
              och lydnadsträning med Nicki några av mina favoritsysselsättningar. Matlagning och bakning är också
              en passion för mig, så en och en annan timme lägger jag mer än gärna i köket. 
            </Typography>
            <Typography sx={{ padding: "1rem" }}>
              Just nu bygger jag upp den här sidan, så ha lite tålamod och kika gärna in snart igen för 
              att se vad som är på gång! Om du har några frågor eller bara vill säga hej, tveka inte att 
              kontakta mig. Jag ser fram emot att höra från dig! 
            </Typography>
          </Paper>
        </div>
      </Paper>
    </Box>
  );
};

export default AboutMe;