import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  TextField,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import http from "../api/starvensBackend";

const LinkShareWithHooks = (props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { msg: "", type: "private", pwd: "", isTcAgreed: false },
  });
  const theme = useTheme();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const watchTypeOfShare = watch("type", "private");
  const watchTcAgreed = watch("isTcAgreed", false);
  const curPwd = watch("pwd", "");
  const [share, setShare] = useState(false);
  const onSubmit = async (data) => {
    try {
      if (watchTypeOfShare == "private") {
        let resp = await http.post("/setpwd", { uri: props.url, pwd: curPwd });
        if (resp.data.status == "success") {
          setShare(true);
          return;
        } else {
          console.log("failed at the backend");
        }
      }
      setShare(true);
    } catch (error) {
      console.log(error);
    }
  };
  const styles = {
    beforeBox: {
      backgroundColor: "#F8F8F8",
      display: "grid",
      gridGap: "1rem",
      padding: "1rem",
      color: theme.palette.primary.main,
    },
    boxHead: {
      font: "normal normal bold 22px/23px Montserrat",
      color: theme.palette.primary.main,
      padding: "1rem",
      textAlign: "center",
    },
    buttonPadding: { margin: "0.5rem" },
    afterBox: {
      backgroundColor: "#F8F8F8",
      display: "flex",
      padding: "1rem",
      justifyContent: "center",
      flexDirection: "column",
      maxWidth: "40rem",
    },
    urlBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      borderRadius: "1rem",
      marginBottom: "1rem",
      border: `2px solid ${theme.palette.primary.main}`,
    },
  };

  const BeforeShare = () => {
    return (
      <form>
        <Box
          sx={{
            backgroundColor: "#F8F8F8",
            display: "grid",
            gridGap: "1rem",
            padding: "0.5rem",
            color: theme.palette.primary.main,
          }}
        >
          <Controller
            name={"msg"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                multiline
                placeholder="Optional message"
                fullWidth
                rows={3}
                onChange={onChange}
                value={value}
              ></Input>
            )}
          />
          <Box>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel
                    sx={{ color: theme.palette.primary.main }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    How do you want to share?
                  </FormLabel>
                  <RadioGroup
                    {...field}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // {...register("type")}
                    name="row-radio-buttons-group"
                    defaultValue="private"
                    // onChange={handleChange}
                  >
                    <FormControlLabel
                      value="private"
                      control={<Radio />}
                      label="Private"
                    />
                    <FormControlLabel
                      value="public"
                      control={<Radio />}
                      label="Public"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Box>
          {watchTypeOfShare == "private" ? (
            <Controller
              name={"pwd"}
              control={control}
              rules={{ min: 18 }}
              render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} />
              )}
            />
          ) : null}
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Controller
              name="isTcAgreed"
              control={control}
              render={({ field }) => (
                <Checkbox checked={watchTcAgreed} {...field} {...label} />
              )}
            />
            <Typography>
              I agree to the{" "}
              <a href="/service" target="_blank" rel="noreferrer noopener">
                Starvens terms
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noreferrer noopener">
                privacy policy.
              </a>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              disabled={!watchTcAgreed}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              get link
            </Button>
          </Box>
        </Box>
      </form>
    );
  };

  const AfterShare = () => {
    return (
      <Box sx={styles.afterBox}>
        <Typography sx={styles.boxHead}>You are all set!</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography>Private Url:</Typography>
          <Box sx={styles.urlBox}>
            <Typography sx={{ width: "25rem", wordWrap: "break-word" }}>
              {props.compUrls.priUrl}
            </Typography>
            <IconButton>
              <ContentCopyIcon sx={{ alignSelf: "center" }} />
            </IconButton>
          </Box>
            <Typography>Public Url:</Typography>
          <Box sx={styles.urlBox}>
            <Typography sx={{ width: "25rem", wordWrap: "break-word" }}>
              {props.compUrls.pubUrl}
            </Typography>
            <IconButton>
              <ContentCopyIcon sx={{ alignSelf: "center" }} />
            </IconButton>
          </Box>
        </Box>
        <Button
          sx={{ ...styles.buttonPadding, alignSelf: "center" }}
          variant="contained"
          onClick={() => window.location.reload()}
        >
          Send another
        </Button>
      </Box>
    );
  };

  return <Box>{share ? <AfterShare /> : <BeforeShare />}</Box>;
};

export default LinkShareWithHooks;
