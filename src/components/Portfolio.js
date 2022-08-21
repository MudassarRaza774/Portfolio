import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";

function Portfolio() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        backgroundColor: "#0b0952",
        color: "white",
        minHeight: "500px",
        padding: "50px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h2">
            {" "}
            <Box sx={{ fontWeight: "bold", marginLeft: "25%" }}>Portfolio</Box>
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <article
              style={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <picture
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  marginLeft: "25%",
                }}
              >
                <source media="(min-width: 0px)" srcSet="1.jpg" />
                <img src="1.jpg" alt="background" />

                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    position: "absolute",
                    top: "210px",
                    bottom: "0",
                    left: "0",
                    height: "fit-content",
                    margin: "auto",
                    marginLeft: "50%",
                  }}
                >
                  <b
                    style={{
                      fontSize: "30px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Minimalism
                  </b>{" "}
                  <br />
                  <span style={{ fontSize: "20px" }}>
                    Illustration. Art Direction
                  </span>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "#bdbdbd",
                      borderColor: "green",
                    }}
                  >
                    {" "}
                    View Work
                  </Button>
                </div>
              </picture>
            </article>
          </div>

          <div>
            <article
              style={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <picture
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  marginLeft: "25%",
                }}
              >
                <source media="(min-width: 0px)" srcSet="3.jpg" />
                <img src="3.jpg" alt="background" />
              </picture>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  position: "absolute",
                  top: "210px",
                  bottom: "0",
                  left: "0",
                  height: "fit-content",
                  margin: "auto",
                  marginLeft: "50%",
                }}
              >
                <b
                  style={{
                    fontSize: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  3D Project
                </b>{" "}
                <br />
                <span style={{ fontSize: "20px" }}>
                  Illustration. Art Direction
                </span>
                <br />
                <br />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#bdbdbd",
                    borderColor: "green",
                  }}
                >
                  {" "}
                  View Work
                </Button>
              </div>
            </article>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div>
            <article
              style={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <picture
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  marginRight: "29%",
                }}
              >
                <source media="(min-width: 0px)" srcSet="2.jpg" />
                <img src="2.jpg" alt="background" />
              </picture>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  position: "absolute",
                  top: "210px",
                  bottom: "0",
                  left: "0",
                  height: "fit-content",
                  margin: "auto",
                  marginLeft: "25%",
                }}
              >
                <b style={{ fontSize: "30px" }}>Abstract Art</b> <br />
                <span style={{ fontSize: "20px" }}>
                  Illustration. Art Direction
                </span>
                <br />
                <br />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#bdbdbd",
                    borderColor: "green",
                  }}
                >
                  {" "}
                  View Work
                </Button>
              </div>
            </article>
          </div>
          <div>
            <article
              style={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <picture
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  marginRight: "25%",
                }}
              >
                <source media="(min-width: 0px)" srcSet="4.jpg" />
                <img src="4.jpg" alt="background" />
              </picture>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  position: "absolute",
                  top: "210px",
                  bottom: "0",
                  left: "0",
                  height: "fit-content",
                  margin: "auto",
                  marginLeft: "25%",
                }}
              >
                <b style={{ fontSize: "30px" }}>Modern BG</b> <br />
                <span style={{ fontSize: "20px" }}>
                  Illustration. Art Direction
                </span>
                <br />
                <br />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#bdbdbd",
                    borderColor: "green",
                  }}
                >
                  {" "}
                  View Work
                </Button>
              </div>
            </article>
          </div>
          <div
            style={{
              float: "right",
              marginTop: "35%",
              marginRight: "28%",
              fontSize: "35px",
            }}
          >
            <b>See More Work...</b>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
