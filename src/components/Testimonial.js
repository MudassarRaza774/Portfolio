import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';

function Testimonial() {
    return (
        <div style={{ backgroundColor: "#131d5b", color: "white", padding: "50px" }} >
            <Typography variant='h2' > <Box sx={{ fontWeight: 'bold', paddingLeft: "15%" }}>Testimonial</Box></Typography>
            <div style={{ marginTop: "70px", paddingLeft: "20%", paddingRight: "20%", paddingTop: "1%" }}>
                <Typography variant='h6' >
                Lorem Ipsum has been the industry's standard dummy text ever
                    since the 2020s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 2020s.
                </Typography>
                <div style={{ marginTop: "20px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={1}>
                                <img src='zain.jpeg' alt="Zain" height="80px" width="60px" />
                            </Grid>
                            <Grid item xs={12} lg={11}>
                                <Typography variant="h4" sx={{ color: "#fe3e57", fontWeight: "bold", fontSize: "25px" }} > Zain ul Abideen</Typography>
                                <span style={{ fontStyle: "italic" }} >CEO of GameTrain</span>
                            </Grid>
                        </Grid>
                    </Box>
                </div>

            </div>
        </div>
    )
}

export default Testimonial