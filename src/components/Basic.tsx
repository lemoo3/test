import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText
} from "@material-ui/core";
import useStyles from "./styles";

import { RootState } from "../domain/entity/rootState";
import { Profile } from "../domain/entity/profile";
import { Gender } from "../domain/entity/gender";


import { PROFILE } from "../domain/services/profile"
import profileActions from "../store/profile/actions";


const Basic = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state:RootState) => state.profile);
  const validation = useSelector((state: RootState) => state.validation);
  const classes = useStyles();

  const handleChange = (member: Partial<Profile>) => {
    dispatch(profileActions.setProfile(member));
  };

  return (
    <>
      <TextField 
        fullWidth 
        className={classes.formField} 
        label={PROFILE.NAME} 
        required
        error={!!validation.message.name}
        helperText={validation.message.name}
        value = {profile.name}
        onChange={e=> handleChange({name: e.target.value })}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={PROFILE.DESCRIPTION}
        multiline
        error={!!validation.message.description}
        helperText={validation.message.description}
        value={profile.description}
        onChange={e => handleChange({ description: e.target.value})}
        rows={5}
      />
      <FormControl
        error={!!validation.message.gender}
        required
        className={classes.formField}
      >
        <FormLabel>{PROFILE.GENDER}</FormLabel>
        <RadioGroup
          value={profile.gender}
          onChange={e=> handleChange({ gender: e.target.value as Gender})}
        >
          <FormControlLabel
            value="male"
            label="男性"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="female"
            label="女性"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <TextField 
        fullWidth
        className={classes.formField}
        label={PROFILE.BIRTHDAY}
        required
        error={!!validation.message.birthday}
        helperText={validation.message.birthday}
        type="date"
        value={profile.birthday}
        onChange={e=> handleChange({ birthday: e.target.value })}
        InputLabelProps={{
          shrink: true
        }}
      />
    </>
  );
};

export default Basic;