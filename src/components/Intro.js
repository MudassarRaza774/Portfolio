import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button, Typography } from "@mui/material";

function Introduction() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "#0b0952", color: "white" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} lg={5}>
          <div style={{ marginTop: "35%", paddingLeft: "40%" }}>
            <Typography
              variant="h3"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "75px",
                fontWeight: "700",
              }}
            >
              I'm{" "}
              <span style={{ color: "#fe3e57", whiteSpace: "pre" }}>
                {" "}
                Zain ul Abideen
              </span>
            </Typography>
            <Typography
              variant="h5"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "15px",
                fontSize: "35px",
                fontWeight: "700",
              }}
            >
              MERN Stack Developer
            </Typography>
            <div style={{ marginTop: "15px" }}>
              <Button
                variant="outlined"
                color="error"
                href="https://www.facebook.com/"
                target="_blank"
                style={{
                  maxWidth: "50px",
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderWidth: "2px",
                  borderRadius: "7px",
                }}
              >
                <img src="facebook.png" alt="zain" />
              </Button>
              <span> </span>
              <Button
                variant="outlined"
                color="primary"
                href="https://www.linkedin.com/"
                target="_blank"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderWidth: "2px",
                  borderRadius: "7px",
                }}
              >
                <img src="linkedin.png" alt="zain" />
              </Button>
              <span> </span>
              <Button
                variant="outlined"
                color="warning"
                href="https://www.instagram.com/"
                target="_blank"
                style={{
                  maxHeight: "50px",
                  minWidth: "50px",
                  minHeight: "50px",
                  borderWidth: "2px",
                  borderRadius: "7px",
                }}
              >
                <InstagramIcon />
              </Button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10%",
            paddingTop: "50px",
            paddingBottom: "10px",
          }}
        >
          <img src="zain.jpeg" alt="zain" width="60%" height="100%" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Introduction;
