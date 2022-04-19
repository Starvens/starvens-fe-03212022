import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const LinkShareWithHooks = () => {
  const {
    control,
    register,
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
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        display: "grid",
        gridGap: "1rem",
        padding: "1rem",
        color: theme.palette.primary.main,
      }}
    >
      <Input
        multiline
        {...register("msg")}
        placeholder="Optional message"
        fullWidth
        rows={3}
      ></Input>
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
        <Input
          required
          error={errors.pwd}
          helperText="password is weak"
          {...register("pwd", {
            required: "Password is mandatory",
            min: { value: 8, message: "Password length must be atleast 8" },
          })}
          placeholder="Set a password for file"
          fullWidth
        ></Input>
      ) : null}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Controller
          name="isTcAgreed"
          control={control}
          render={({ field }) => <Checkbox {...field} {...label} />}
        />
        <Typography>
        I agree to the <a href='/service' target="_blank" rel="noreferrer noopener">Starvens terms</a> and <a href='/privacy' target="_blank" rel="noreferrer noopener">privacy policy.</a>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={!watchTcAgreed}
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default LinkShareWithHooks;
