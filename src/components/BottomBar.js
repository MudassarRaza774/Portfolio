import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function BottomBar() {
    return (
        <div style={{ backgroundColor: "#0b0952", color: "white", padding: "50px 50px 30px 20%" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} xs={12}>
                    <img src='portfolioicon.png' alt="follio" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography>About</Typography>
                            <Typography>Portfolio</Typography>
                            <Typography>Blog</Typography>
                            <Typography>Contact</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={4} xs={12} >
                        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-evenly" }} >
                            <div style={{ borderStyle: "solid", borderRadius: "50px",borderColor:"#141173", padding: "10px"}}>
                                <img src='facebook.png' alt="instagram" height={30} />
                            </div>
                            <div style={{ borderStyle: "solid", borderRadius: "50px", padding: "10px", borderColor: "#141173" }}>
                                <img src='twitter.png' alt="instagram" height={30} />
                            </div>
                            <div style={{ borderStyle: "solid", borderRadius: "50px", padding: "10px", borderColor: "#141173" }}>
                                <img src='instagram.png' alt="instagram" height={30} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default BottomBar