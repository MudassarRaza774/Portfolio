import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0945",
        color: "white",
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingTop: "5%",
      }}
    >
      <Typography variant="h3">
        {" "}
        <Box sx={{ fontWeight: "bold" }}>About Me</Box>
      </Typography>
      <div style={{ marginTop: "15px" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="white"
              variant="fullWidth"
              indicatorColor="primary"
              aria-label="basic tabs example"
            >
              <Tab label="About" {...a11yProps(0)} />
              <Tab label="Skill" {...a11yProps(1)} />
              <Tab label="Services" {...a11yProps(2)} />
              <Tab label="Social Media" {...a11yProps(3)} />
              <Tab label="Award" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <img
                    src="about.png"
                    alt="About me"
                    height="100%"
                    width="100%"
                  ></img>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h3">
                    {" "}
                    <Box sx={{ fontWeight: "bold" }}>
                      I create products not just art
                    </Box>{" "}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body2">
                    <Box sx={{ m: 1, fontSize: 16 }}>
                      My name is Zain ul Abideen. I am a web designer and
                      developer. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse
                      ultrices gravida. Risus commodo viverra maecenas accumsan
                      lacus vel facilisis.{" "}
                    </Box>
                  </Typography>
                  <br />
                  <br />
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Box sx={{ textTransform: "capitalize", m: 1 }}>
                      Lets Talk
                    </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={10} textAlign="center">
                <Grid item lg={4} xs={12} textAlign="center">
                  <Typography variant="h1" color="error">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>75%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      color="error"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Communicaion Skills
                    </Box>
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Typography variant="h1" color="#00e676">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>90%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={90}
                      color="success"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Project Management
                    </Box>
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Typography variant="h1" color="#ff8f00">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>65%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={65}
                      color="warning"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Problem Solving
                    </Box>
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Typography variant="h1" color="#eeff41">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>55%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={55}
                      color="success"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Analytical Abilities
                    </Box>
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Typography variant="h1" color="#ef6c00">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>43%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={43}
                      color="warning"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Organization
                    </Box>
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Typography variant="h1" color="#1976d2">
                    <Box sx={{ fontWeight: "bold", m: 1 }}>82%</Box>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={82}
                      color="primary"
                    />
                  </Box>
                  <br />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Creativity
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item sm={12} lg={6}>
                  <Typography variant="h3" paddingLeft={10}>
                    Product
                    <br /> Design
                  </Typography>
                  <br />
                  <Typography variant="body1" paddingLeft={10}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book{" "}
                  </Typography>
                </Grid>
                <Grid item sm={12} lg={6}>
                  <Typography variant="h3" paddingLeft={10}>
                    Web
                    <br /> Design
                  </Typography>
                  <br />
                  <Typography variant="body1" paddingLeft={10}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book
                  </Typography>
                </Grid>
                <Grid item sm={12} lg={6} marginTop="25px">
                  <Typography variant="h3" paddingLeft={10}>
                    Visual
                    <br /> Design
                  </Typography>
                  <br />
                  <Typography variant="body1" paddingLeft={10}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book
                  </Typography>
                </Grid>
                <Grid item sm={12} lg={6}>
                  <Typography variant="h3" marginTop="25px" paddingLeft={10}>
                    Business
                    <br /> Strategy
                  </Typography>
                  <br />
                  <Typography variant="body1" paddingLeft={10}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box sx={{ flexGrow: 1, textAlign: "center", marginTop: "15px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <img
                    src="facebook.png"
                    alt="facebook"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Facebook
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <img
                    src="instagram.png"
                    alt="instagram"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Instagram
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <img
                    src="twitter.png"
                    alt="twitter"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Twitter
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4} marginTop="25px">
                  <img
                    src="dribbble.png"
                    alt="dribble"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Dribble
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4} marginTop="25px">
                  <img
                    src="linkedin.png"
                    alt="linkedin"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      LinkedIn
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={4} marginTop="25px">
                  <img
                    src="behance.png"
                    alt="behance"
                    height={100}
                    width={100}
                  />
                  <Typography>
                    <Box sx={{ fontWeight: 700, m: 1, fontSize: 20 }}>
                      Behance
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box sx={{ flexGrow: 1, textAlign: "center", marginTop: "15px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <img src="a1.jpg" alt="facebook" width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <img
                    src="a2.jpg"
                    alt="instagram"
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <img src="a3.jpg" alt="twitter" width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <img src="a4.jpg" alt="dribble" width="100%" height="100%" />
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
