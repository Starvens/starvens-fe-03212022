import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const theme = useTheme();
  const styles = {
    heading: {
      font: "normal normal bold 28px/37px Playfair Display;",
      textAlign: 'center',
      color: "#355E3B",
      opacity: "1",
    },
    sub: {
      top: "0px",
      left: "643px",
      textAlign: "left",
      font: "normal normal bold 27px/35px Segoe UI",
      color: "#355E3B",
    },
    text: {
      top: "560px",
      left: "0px",
      textAlign: "center",
      font: "normal normal normal 27px/35px Segoe UI",
      color: "#355E3B",
      marginBottom: "2rem",
    },
  };
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "2rem",
          textAlign:"center",
          color: theme.palette.primary.main,
        }}
      >
        <img
          onClick={() => navigate("/")}
          src="HeaderForLogo.webp"
          width="193"
          height="70"
          display="block"
        ></img>
        <Typography sx={styles.heading}>Privacy Policy</Typography>
        <Typography sx={styles.text}>
          This Privacy Policy is meant to help you understand what information
          Starvens collect, why we collect it and what we do with it. This
          policy applies to Starvens website, apps, services, products and
          technologies.
        </Typography>

        <Typography sx={styles.sub}>Account Information:</Typography>
        <Typography sx={styles.text}>
          {" "}
          We collect, and associate with your account, the information you
          provide to us when you do things such as sign up for your account and
          set up two-factor authentication (like your name, email address, phone
          number).
        </Typography>

        <Typography sx={styles.sub}>Information you provide to us: </Typography>
        <Typography sx={styles.text}>
          When you use our Services to communicate with others or upload or
          store content (such as comments, photos, voice inputs, videos, emails,
          messaging services and attachments).
        </Typography>

        <Typography sx={styles.sub}>Device Information:</Typography>
        <Typography sx={styles.text}>
          We collect location information from a variety of sources for showing
          last activity time.
        </Typography>

        <Typography sx={styles.sub}>Location information: </Typography>
        <Typography sx={styles.text}>
          {" "}
          We collect location information from a variety of sources for showing
          last activity time.
        </Typography>

        <Typography sx={styles.sub}>Usage information: </Typography>
        <Typography sx={styles.text}>
          We collect information related to how you use the Services, including
          actions you take in your account (like sharing, editing, viewing,
          creating and moving files or folders). We use this information to
          provide, improve, and promote our Services, and protect Starvens
          users.
        </Typography>

        <Typography sx={styles.sub}>Our Cookie Policy:</Typography>
        <Typography sx={styles.text}>
          Once you agree to allow our website to use cookies, you also agree to
          use the data it collects regarding your online behavior (analyze web
          traffic, web pages you spend the most time on, and websites you
          visit). The data we collect by using cookies is used to customize our
          website to your needs. All web traffic data is anonymized. Please note
          that cookies don't allow us to gain control of your computer in any
          way. They are strictly used to monitor which pages you find useful and
          which you do not so that we can provide a better experience for you.
          If you want to disable cookies, you can do it by accessing the
          settings of your internet browser.
        </Typography>

        <Typography sx={styles.sub}>Security: </Typography>
        <Typography sx={styles.text}>
          We constantly try to keep your information secure and testing for
          vulnerabilities. We continue to work on features to keep your
          information safe in addition to things like two-factor authentication,
          encryption of files at rest, and alerts when new devices and apps are
          linked to your account. We deploy automated technologies to detect
          abusive behavior and content that may harm our Services, you, or other
          users.
        </Typography>

        <Typography sx={styles.sub}>Third Parties:</Typography>
        <Typography sx={styles.text}>
          Starvens uses certain trusted third parties (for example, providers of
          customer support and IT services) for the business purposes of helping
          us provide, improve, protect, and promote our Services. These third
          parties will access your information to perform tasks on our behalf,
          and we'll remain responsible for their handling of your information
          per our instructions.
        </Typography>

        <Typography sx={styles.sub}>
          Restricting the Collection of your Personal Data:{" "}
        </Typography>
        <Typography sx={styles.text}>
          At some point, you might wish to restrict the use and collection of
          your personal data. You can achieve this by doing the following:
        </Typography>

        <Typography sx={styles.text}>
          If you have already agreed to share your information with us, feel
          free to contact us via email and we will be more than happy to change
          this for you.
        </Typography>

        <Typography sx={styles.sub}>Contact Us:</Typography>
        <Typography sx={styles.text}>
          {" "}
          If you have any questions about our Privacy Policy or information
          practices, please feel free to contact us at contact@starvens.com
        </Typography>
      </Box>
    </>
  );
};

export default Privacy;
