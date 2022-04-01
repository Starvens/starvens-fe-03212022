
import { Box, Button, Typography, Divider } from '@mui/material'
import React from 'react'

const ConversionLinks2 = () => {
    const boxShadow = 'rgb(38, 57, 77) 0px 20px 30px -10px'
    return (
        <Box sx={{ height: '100vh' }}>
            <Typography
                sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    color: "#355E3B",
                    fontSize: "54px",
                    fontFamily: "Montserrat",
                    textAlign: "center"
                }}
            >
                Simplify your workflow
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '1rem', marginTop: '2rem' }}>
                <Box sx={{ boxShadow: boxShadow, borderRadius: '1rem', margin: '0.5rem' }}>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                marginLeft: "2rem",
                                color: "#355E3B",
                                fontSize: "44px",
                                fontFamily: "Montserrat",
                                textAlign: "center"
                            }}
                        >
                            Text to Audio
                        </Typography>
                        <Typography
                            sx={{
                                // fontWeight: "bold",
                                marginLeft: "2rem",
                                color: "#355E3B",
                                fontSize: "27px",
                                fontFamily: "Montserrat",
                                textAlign: "center"
                            }}
                        >
                            convert .txt, .pdf, .png, .jpg formats to mp3 with various features.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '2rem', padding: '1rem' }}>
                        <Box>
                            <img src='TextToAudioLeft.png' width='226' height='398'></img>
                        </Box>
                        <Box sx={{ padding: '2rem' }}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    backgroundColor: "#f8f8f8",
                                    padding: '0.3rem',
                                    cursor: 'pointer',
                                    zIndex: '3',
                                    borderRadius: '1rem',
                                    fontSize: "28px",
                                    height: '3rem',
                                    color: "#355E3B",
                                    fontFamily: "Montserrat",
                                }}
                            >
                                Start Converting
                            </Typography>
                        </Box>
                        <Box sx={{ height: '117', width: '144' }}>
                            <img src='TextToAudioRight.png' height='117' width='144'></img>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ boxShadow: boxShadow, borderRadius: '1rem', margin: '0.5rem' }}>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                marginLeft: "2rem",
                                color: "#355E3B",
                                fontSize: "44px",
                                fontFamily: "Montserrat",
                                textAlign: "center"
                            }}
                        >
                            Audio to Text
                        </Typography>
                        <Typography
                            sx={{
                                // fontWeight: "bold",
                                marginLeft: "2rem",
                                color: "#355E3B",
                                fontSize: "27px",
                                fontFamily: "Montserrat",
                                textAlign: "center"
                            }}
                        >
                            convert mp3, mp4 formats to .txt, .pdf, .png, .jpg with various features.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', height: '200px', marginTop: '2rem', padding: '1rem' }}>
                        <Box>
                            <img src='AudioToTextLeft.png' width='197' height='240'></img>
                        </Box>
                        <Box sx={{}}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    backgroundColor: "#f8f8f8",
                                    padding: '0.3rem',
                                    cursor: 'pointer',
                                    zIndex: '3',
                                    borderRadius: '1rem',
                                    fontSize: "28px",
                                    height: '3rem',
                                    color: "#355E3B",
                                    fontFamily: "Montserrat",
                                }}
                            >
                                Start Converting
                            </Typography>
                        </Box>
                        <Box>
                            <img src='AudioToTextRight.png' height='384' width='196'></img>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ConversionLinks2