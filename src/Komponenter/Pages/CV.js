import React from "react";
import Box from "@mui/material/Box";
import {
  Paper,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";
import Moodyforest from "../../Images/Moodyforest.jpg";

const CV = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          bgcolor: "#191B1D",
          width: "40%",
          minHeight: "70vh",
          margin: "10vh auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Arbetslivserfarenhet
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />
        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Utvecklare - Praktik, Fortnox AB"
              secondary="2023 - nu"
            />
            <ul>
              <li>Fullstack-projekt</li>
              <li>Java och React</li>
              <li>Databashantering</li>
              <li>Löste tekniska utmaningar<br></br>
              med stöd från min mentor</li>
            </ul>
          </ListItem>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Butiksbiträde, LIDL Växjö"
              secondary="2017 - nu"
            />
            <ul>
              <li>Ansvarig för varuplock</li>
              <li>Kassahantering</li>
              <li>Varuplock</li>
              <li>Kundservice</li>
              <li>Bakeoff ansvarig</li>
              <li>Kundservice</li>
              <li>Inventering</li>
              <li>Hantering av kampanjmaterial</li>
            </ul>
          </ListItem>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Frukostvärdinna – Clarion Collection Hotel Cardinal, Växjö"
              secondary="2014 – 2017"
            />
            <ul>
              <li>Ansvarig för frukostbuffén</li>
              <li>Renhållnigsansvarig av kök <br></br>och matsal</li>
              <li>Beställning av varor</li>
              <li>Kundservice</li>
              <li>Hjälpte till med rekrytering<br></br> av personal</li>
              <li>Bakade och lagade mat <br></br>till hotellets gäster</li>
            </ul>
          </ListItem>
        </Paper>

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Bufféansvarig - CHILI & WOK, Växjö"
              secondary="2012 – 2013"
            />
            <ul>
              <li>Bufféansvarig</li>
              <li>Renhållnigsansvarig</li>
              <li>Lagade enklare maträtter</li>
              <li>Kassaansvarig</li>
              <li>Kundservice</li>
            </ul>
          </ListItem>
        </Paper>
        

        <Typography variant="h4" sx={{ color: "#fff", marginTop: "40px" }}>
          Utbildningar och kurser
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Frontendutvecklare – EC Utbildning"
              secondary="2022 – nu"
            />
          </ListItem>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText primary="Butikssäljare med inriktning på ekonomi - Handelscollage" 
            secondary="2010-2011" />
          </ListItem>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Livsmedelsprogrammet inriktning Bageri och konditori – Kungsmadskolan, Växjö"
              secondary="2005 – 2008"
            />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          Språkkunskaper
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText primary="Svenska" />
            <ListItemText primary="Engelska" />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          IT-Kunskaper
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText primary="Html och css" />
            <ListItemText primary="JavaScript och TypeScript" />
            <ListItemText primary="Angular och React" />
            <ListItemText primary="UX och UI" />
            <ListItemText primary="C# .NET och ASP .NET Core MVC" />
            <ListItemText primary="SQL" />
            <ListItemText primary="Java" />
            <ListItemText primary="Firebase" />
            <ListItemText primary="Node.js" />
            <ListItemText primary="GIT" />
            <ListItemText primary="Material UI" />
          </ListItem>
        </Paper>

        <Typography variant="h4" sx={{ color: "#fff" }}>
          Övrigt
        </Typography>

        <Divider sx={{ width: "100%", bgcolor: "#333", margin: "20px 0" }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: "#333",
            width: "100%",
            color: "#fff",
            padding: "20px",
            margin: "10px",
          }}
        >
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText primary="B-körkort" />
          </ListItem>
        </Paper>
      </Paper>
    </Box>
  );
};

export default CV;