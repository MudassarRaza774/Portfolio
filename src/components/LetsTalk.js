import { Button, Grid, Input, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";

function LetsTalk() {
  return (
    <div
      style={{ backgroundColor: "#0b0952", color: "white", padding: "50px" }}
    >
      <Typography variant="h2" align="center" marginBottom={15}>
        Let's Talk
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6} sx={{ marginLeft: "0%" }}>
            <Box
              sx={{
                flexGrow: 1,
                border: "solid",
                borderColor: "gray",
                padding: "20px",
                minWidth: "50%",
                maxWidth: "200px",
              }}
            >
              <Typography variant="h3" align="center" marginBottom={5}>
                Get In Touch
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Input placeholder="Name" error sx={{ color: "white" }} />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    placeholder="Last Name"
                    error
                    sx={{ color: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    placeholder="Email"
                    error
                    fullWidth
                    sx={{ color: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    placeholder="Subject"
                    fullWidth
                    error
                    sx={{ color: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ input: { color: "white" } }}
                    fullWidth
                    placeholder="Message"
                    error
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} marginTop={10}>
                  <Typography align="center">
                    <Button
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        backgroundColor: "red",
                        borderRadius: "40px",
                        padding: "15px 30px 15px 30px",
                        fontWeight: "bold",
                      }}
                    >
                      Send Message{" "}
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} style={{ padding: "9px 10% 0px 0px" }}>
            <div
              style={{
                borderStyle: "solid",
                borderColor: "gray",
                padding: "10px 30px 10px 30px",
                minWidth: "50%",
                maxWidth: "200px",
              }}
            >
              <Typography variant="h5" marginLeft={10}>
                GameTrain, Lahore
              </Typography>
              <Grid
                container
                spacing={2}
                style={{ paddingLeft: "25px" }}
                marginTop={1}
              >
                <Grid item lg={2} xs={2}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "17px 50px 17px 20px",
                    }}
                  >
                    <img src="globe.png" alt="globe"></img>
                  </div>
                </Grid>
                <Grid item lg={10} xs={12}>
                  <div style={{ padding: "20px 0px 0px 20px" }}>
                    <span style={{ fontSize: "20px" }}>Office Address</span>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                borderStyle: "solid",
                borderColor: "gray",
                padding: "10px 30px 10px 30px",
                marginTop: "15px",
                minWidth: "50%",
                maxWidth: "200px",
              }}
            >
              <Typography variant="h5" marginLeft={10}>
                portfolio@gmail.com
              </Typography>
              <Grid
                container
                spacing={2}
                style={{ paddingLeft: "25px" }}
                marginTop={1}
              >
                <Grid item lg={2} xs={2}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "22px 50px 22px 20px",
                    }}
                  >
                    <img src="mail.png" alt="globe"></img>
                  </div>
                </Grid>
                <Grid item lg={10} xs={12}>
                  <div style={{ padding: "20px 0px 0px 20px" }}>
                    <span style={{ fontSize: "20px" }}>Official Mail</span>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                borderStyle: "solid",
                borderColor: "gray",
                padding: "10px 30px 10px 30px",
                marginTop: "15px",
                minWidth: "50%",
                maxWidth: "200px",
              }}
            >
              <Typography variant="h5" marginLeft={10}>
                +92-123456789
              </Typography>
              <Grid
                container
                spacing={2}
                style={{ paddingLeft: "25px" }}
                marginTop={1}
              >
                <Grid item lg={2} xs={2}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "17px 50px 17px 20px",
                    }}
                  >
                    <img src="customerSupport.png" alt="globe"></img>
                  </div>
                </Grid>
                <Grid item lg={10} xs={12}>
                  <div style={{ padding: "20px 20% 0px 20px" }}>
                    <span style={{ fontSize: "20px" }}>Official Phone</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LetsTalk;
