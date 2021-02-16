import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { useForm, Controller } from "react-hook-form"; 
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import {formTemplates} from '../../utils/constants';
// import ReactSelect from "react-select";
import {
  TextField
} from "@material-ui/core";


const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  Checkbox: false,
  switch: false,
  RadioGroup: ""
};

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    mainContainer:{
        padding:"25px"
    }
}));

export default function Landing() {
  const classes = useStyles();
  const { handleSubmit, register, reset, control } = useForm({ });

  const onSubmit = (data: any) =>{
    //  alert(JSON.stringify(data));
     alert(data);
 };
  const renderFields=()=>{
    return formTemplates.map((item:any)=>{
      let {name, type, label, validationProps, placeholder} = item;
      switch(type){
        case 'text':
          return(
            <Grid item xs={12}>
                    <Controller as={<TextField fullWidth label={label}/>} name={name} control={control} />
             </Grid>
          )
        case 'number':
          return(
            <Grid item xs={12}>
                    <Controller as={<TextField fullWidth label={label}/>} name={name} control={control} />
             </Grid>
          )
        case 'email':
        return(
            <Grid item xs={12}>
                <Controller as={<TextField fullWidth label={label}/>} name={name} control={control} />
            </Grid>
          )
      }
     
    })
  }


  return (
    <Container className={classes.mainContainer} maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
            {renderFields()}
           
            <Grid item xs={6}>
            <Button fullWidth variant="outlined" color="primary"
                type="button"
                onClick={() => {
                    reset(defaultValues);
                }}
                >
                Reset Form
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth variant="outlined" type="submit" color="primary">submit</Button>
            </Grid>
        </Grid>
            </form>
        
    </Container>
    );
}
