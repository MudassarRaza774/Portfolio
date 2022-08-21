import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function LatestNews() {
  return (
    <div
      style={{
        backgroundColor: "#131d5b",
        color: "white",
        padding: "50px",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Latest News{" "}
        </Typography>
      </div>

      <div style={{ marginTop: "70px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12}>
              <img src="c1.jpg" alt="c1"></img>
              <Typography style={{ marginTop: "10px" }}>
                {" "}
                <span style={{ color: "lightblue" }}>By Zain</span>. Aug 18,
                2022
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Helpful tips for become a successful designer
              </Typography>
              <Typography style={{ marginTop: "10px", color: "red" }}>
                Read More...
              </Typography>
            </Grid>
            <Grid item lg={4} xs={12}>
              <img src="c2.jpg" alt="c1"></img>
              <Typography style={{ marginTop: "10px" }}>
                {" "}
                <span style={{ color: "lightblue" }}>By Zain</span>. Aug 18,
                2022
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Helpful tips for become a successful designer
              </Typography>
              <Typography style={{ marginTop: "10px", color: "red" }}>
                Read More...
              </Typography>
            </Grid>
            <Grid item lg={4} xs={12}>
              <img src="c3.jpg" alt="c1"></img>
              <Typography style={{ marginTop: "10px" }}>
                {" "}
                <span style={{ color: "lightblue" }}>By Zain</span>. Aug 18,
                2022
              </Typography>
              <Typography
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Helpful tips for become a successful designer
              </Typography>
              <Typography style={{ marginTop: "10px", color: "red" }}>
                Read More...
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default LatestNews;
