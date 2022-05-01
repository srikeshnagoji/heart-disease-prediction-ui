import React, { useState } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
// import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
// import validatorTypes from "@data-driven-forms/react-form-renderer/validator-types";
import CircularProgress from "@mui/material/CircularProgress";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";
import Backdrop from "@mui/material/Backdrop";
// import { DotWave } from "@uiball/loaders";

import { form_title, interpretPrediction, schema } from "../schema/schema";
import PredictionResult from "../components/PredictionResult";

import { defaultsData, labelFieldMapping } from "../constants/FieldConstants";
import { baseUrl } from "../constants/urlConstants";
import "./Form.css";

const Form = () => {
  const [prediction, setPrediction] = useState();
  const [open, setOpen] = useState(false);

  const formSubmitHandler = async (data) => {
    setOpen(true);
    console.log(data);
    const inputsDict = { ...defaultsData, ...data };
    const fields = Object.keys(labelFieldMapping);
    const inputValues = fields.map((field) => Number(inputsDict[field]));
    console.log(inputValues);
    // Make a rest call to the backend
    const errorMessage =
      "An internal error occurred. Please contact the support team.";
    try {
      const url = baseUrl + `/heart-disease?inputs=[${inputValues.toString()}]`;
      let res = await fetch(url, {
        method: "GET",
      });
      let responseJson = await res.json();
      if (res.status === 200) {
        console.log(responseJson);
        setPrediction(interpretPrediction(responseJson));
      } else {
        console.log("Some error occured");
        console.log(responseJson);
        setPrediction(errorMessage);
      }
    } catch (err) {
      console.log(err);
      setPrediction(errorMessage);
    }
    // sleep for 5 sec for testing loader
    // --await new Promise((resolve) => setTimeout(resolve, 5000));

    setOpen(false);
  };

  //TODO: customize this based on use-case
  const customPredictionResultStyle = {
    type: "binary",
    positive: prediction?.value === 0,
  };

  return (
    <div className="form">
      <h1 className="form-title">{form_title}</h1>
      <FormRenderer
        FormTemplate={FormTemplate}
        componentMapper={componentMapper}
        schema={schema}
        onSubmit={formSubmitHandler}
        clearOnUnmount
      />
      {prediction && (
        <PredictionResult {...customPredictionResultStyle}>
          {prediction}
        </PredictionResult>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
        {/* <DotWave size={47} speed={1} color="white" /> */}
      </Backdrop>
    </div>
  );
};

export default Form;
