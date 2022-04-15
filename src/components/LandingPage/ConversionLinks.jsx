import { Box, Button, Typography, Divider } from '@mui/material'
import React from 'react'

const ConversionLinks = () => {
    const boxShadow = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'
    return (
        <Box sx={{ height: '100vh' }}>
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
                Simplify your workflow
            </Typography>
            <Box sx={{ display: 'flex', marginTop: '3rem', gridGap: '1rem' }}>
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
                            // fontFamily: "Montserrat",
                            textAlign: "center"
                        }}
                    >
                        convert .txt, .pdf, .webp, .jpg formats to mp3 with various features.
                    </Typography>
                </Box>
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
                        convert mp3, mp4 formats to .txt, .pdf, .webp, .jpg with various features.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', height: '200px', marginTop: '2rem', padding: '1rem' }}>
                    <img src='TextToAudioLeft.webp' width='226' height='398'></img>
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
                    <img src='TextToAudioRight.webp' height='117' width='144'></img>
                </Box>
                {/* <Divider orientation='vertical' flexItem></Divider> */}
                <Box sx={{ display: 'flex', height: '200px', marginTop: '2rem', padding: '1rem' }}>
                    <img src='AudioToTextLeft.webp' width='197' height='240'></img>
                    <Box sx={{ margin: '2.5rem' }}>
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
                    <img src='AudioToTextRight.webp' height='384' width='196'></img>
                </Box>
            </Box>
        </Box>
    )
}

export default ConversionLinks