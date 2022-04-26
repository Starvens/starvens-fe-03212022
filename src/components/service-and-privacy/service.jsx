import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const styles = {
    heading: {
      font: "normal normal bold 28px/37px Playfair Display;",
      textAlign: "center",
      marginTop: "46px",
      //   marginLeft: '892px',
      //   width: '143px',
      height: "37px",
      color: "#355E3B",
      opacity: "1",
    },
    sub: {
      marginTop: "0px",
      // marginLeft: '643px',
      // width: '332px',
      height: "36px",
      textAlign: "center",
      font: "normal normal bold 27px/35px Segoe UI",
      color: "#355E3B",
    },
    sub1: {
      marginTop: "10px",
      marginLeft: "0",
      height: "36px",
      textAlign: "left",
      font: "normal normal bold 27px/35px Segoe UI",
      color: "#355E3B",
    },
    text: {
      marginTop: "20px",
      marginLeft: "0px",
      // height: "36px",
      // textAlign: "left",
      font: "normal normal normal 27px/35px Segoe UI",
      color: "#355E3B",
    },
  };

  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ marginTop: "1rem", padding: "2rem", textAlign: "center" }}>
        <img
          onClick={() => navigate("/")}
          src="HeaderForLogo.webp"
          width="193"
          height="70"
          textAlign="center"
          display="block"
        ></img>
        <Box sx={{ padding: "0.2rem", width: "100%" }}>
          <Typography sx={styles.sub}>Starvens Terms of Service</Typography>

          <Typography sx={styles.text}>
            Agreement between user and www.starvens.com
          </Typography>
          <Typography sx={styles.text}>Effective: 04/26/2022</Typography>
          <Typography sx={styles.text}>
            Thanks for using Starvens! Our mission is to make a user feel more
            convenient using in our services. The www.starvens.com website (the
            "Site") is comprised of various web pages operated by
            www.starvens.com. ("Starvens"). The Site is offered to you
            conditioned on your acceptance without modification of the terms,
            conditions, and notices contained herein (the "Terms"). Your use of
            the Site constitutes your agreement to all such Terms. Please read
            these terms carefully and keep a copy of them for your reference.
          </Typography>
          <Typography sx={styles.sub1}>Using the services</Typography>
          <Typography sx={{ ...styles.sub1, marginTop: "1rem" }}>
            Authority:
          </Typography>
          <Typography sx={styles.text}>
            You agree that you are permitted to use the Services under
            applicable law. If you are using the Services on behalf of a
            company, business or other entity, you represent that you have the
            legal authority to accept these Terms on behalf of that entity, in
            which case that entity accepts these Terms, and "you" means that
            entity. If you are accessing an account(s) on behalf of the account
            owner (e.g., as an administrator, consultant, analyst, etc.), the
            Terms apply to your activities on behalf of the account owner.
          </Typography>
          <Typography sx={styles.sub1}>Indemnity:</Typography>
          <Typography sx={styles.text}>
            If you are using the Services on behalf of a company, business or
            other entity, or if you are using the services for commercial
            purposes, you and the entity will hold harmless and indemnify the
            starvens.com from any suit, claim or action arising from or related
            to the use of the services or violation of these terms, including
            any liability or expense arising from claims, losses, damages,
            suits, judgements, litigation costs and attorney's fees.
          </Typography>
          <Typography sx={styles.sub1}>Use of Services:</Typography>
          <Typography sx={styles.text}>
            You must follow any guidelines or policies associated with the
            Services. You must not misuse or interfere with the Services or try
            to access them using a method other than the interface and the
            instructions that we provide. You may use the Services only as
            permitted by law. Unless otherwise expressly stated, you may not
            access or reuse the Services, or any portion thereof, for any
            commercial purpose.
          </Typography>
          <Typography sx={styles.sub1}>Support: </Typography>
          <Typography sx={styles.text}>
            Unless otherwise expressly stated, we do not promise to provide you
            with any support for the Services. If we provide you with support,
            it is at our sole discretion and does not mean that we will continue
            to provide you with support in the future.
          </Typography>

          <Typography sx={styles.sub1}>Account Information: </Typography>
          <Typography sx={styles.text}>
            You may need an account to use some Services. You must ensure that
            your account information (that is, the information you provided when
            you registered for or subscribed to a Service) remains current,
            complete, accurate and truthful.
          </Typography>

          <Typography sx={styles.sub1}>Access to your Account:</Typography>
          <Typography sx={styles.text}>
            You are responsible for all activity that happens on or through your
            account. To protect your account, keep your password confidential.
            Do not reuse your account password with other services.
          </Typography>

          <Typography sx={styles.sub1}>Beta Services: </Typography>
          <Typography sx={styles.text}>
            We sometimes release products and features that we're still testing
            and evaluating (“Beta Services”). Beta Services are labeled “alpha,”
            “beta,” “preview,” “early access,” or “evaluation” (or with words or
            phrases with similar meanings) and may not be as reliable as other
            Starvens services. Beta Services are made available so that we can
            collect user feedback, and by using our Beta Services, you agree
            that we may contact you to collect such feedback.
          </Typography>
          <Typography sx={styles.sub1}>Filesharing: </Typography>
          <Typography sx={styles.text}>
            File Sharing provides the possibility to share Content up to a
            maximum total capacity. Uploaded Content is stored on Starvens
            servers and is available for a limited time. After the expiry
            period, Starvens will permanently delete the uploaded files. These
            files will not be available nor retrievable anymore. The basic
            functionality of Starvens File Sharing is (currently) free for
            everyone. Starvens treats Content as confidential and does not
            control the use of download links, regardless of whether they are
            originally distributed by us or by you. Recipients can forward the
            links and allow others to use them. You are solely responsible for
            the Content you upload and share.
          </Typography>
          <Typography sx={styles.sub1}>Termination:</Typography>
          <Typography sx={styles.text}>
            You're free to stop using our Services at any time. We reserve the
            right to suspend or terminate your access to the Services with
            notice to you if:
          </Typography>
          <Typography sx={{ ...styles.text, textAlign: "left" }}>
            1. you're in breach of these Terms,
          </Typography>
          <Typography sx={{ ...styles.text, textAlign: "left" }}>
            2. your use of the Services would cause a real risk of harm or loss
            to us or other users.
          </Typography>

          <Typography sx={styles.sub1}>Modifications:</Typography>
          <Typography sx={{ ...styles.text, textAlign: "left" }}>
            We may revise these Terms from time to time to better reflect:
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography sx={styles.text}>1. changes to the law,</Typography>
            <Typography sx={styles.text}>
              2. new regulatory requirements, or
            </Typography>
            <Typography sx={styles.text}>
              3. improvements or enhancements made to our Services.
            </Typography>
          </Box>

          <Typography sx={styles.sub1}>
            Privacy policy and Data Protection:
          </Typography>
          <Typography sx={styles.text}>
            Our{" "}
            <Link href="/privacy" target="_blank" rel="noreferrer noopener">
              Privacy policy
            </Link>{" "}
            explains how we treat your personal data. By using the Services, you
            agree to our privacy policies and that we can use your information
            in accordance with our privacy policies.
          </Typography>

          <Typography sx={styles.sub1}>Feedback:</Typography>
          <Typography sx={styles.text}>
            You agree that any recommendation, idea, proposal, suggestion,
            feedback or other input (“Feedback”) you submit to us related to our
            products, services, websites, apps, or technology may be used by us
            without any notice, obligation, restriction, reimbursement or
            compensation to you and you waive (or agree not to enforce) any and
            all rights that may now or in future exist (including moral and
            equivalent rights) in any Feedback.
          </Typography>

          <Typography sx={styles.sub1}>Discontinuation of Services:</Typography>
          <Typography sx={styles.text}>
            We may decide to discontinue the Services in response to exceptional
            unforeseen circumstances, events beyond Starvens's control (for
            example a natural disaster, fire, or explosion), or to comply with a
            legal requirement. If we do so, we'll give you reasonable prior
            notice so that you can export Your Stuff from our systems (we will
            give you no less than 30 day's notice where possible under the
            circumstances).
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Service;
