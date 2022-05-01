export const form_title =
  "Fill & submit this form to get prediction of existence of heart disease.";

export const interpretPrediction = (response_body) => {
  const val = Number(response_body.prediction);
  return {
    value: val,
    message: val === 1 ? "Heart disease is present" : "No heart disease",
  };
};

export const schema = {
  fields: [
    {
      component: "text-field",
      name: "age",
      initialValue: "0",
      type: "number",
      label: "Age",
      helperText: "Enter your age",
      placeholder: "",
      validate: [
        { type: "required", message: "Age is a required field" },
        {
          type: "min-number-value",
          message: "Age cannot be zero or less",
          value: 1,
          includeThreshold: true,
        },
      ],
      isRequired: true,
    },
    {
      component: "radio",
      name: "sex",
      label: "Gender",
      options: [
        { value: "0", label: "Female" },
        { value: "1", label: "Male" },
      ],
      isRequired: true,
      validate: [{ type: "required" }],
    },
    {
      component: "select",
      name: "cp",
      label: "Chest Pain Type",
      options: [
        {
          value: "0",
          label:
            "0: Typical angina: chest pain related decrease blood supply to the heart",
        },
        {
          value: "1",
          label: "1: Atypical angina: chest pain not related to heart",
        },
        {
          value: "2",
          label:
            "2: Non-anginal pain: typically esophageal spasms (non heart related)",
        },
        {
          value: "3",
          label: "3: Asymptomatic: chest pain not showing signs of disease",
        },
      ],
      isRequired: true,
      validate: [{ type: "required", message: "This is a required field" }],
    },
    {
      component: "text-field",
      name: "trestbps",
      type: "number",
      label: "Resting blood pressure (in mm Hg on admission to the hospital)",
      helperText: "Anything above 130-140 is typically cause for concern",
      isRequired: true,
      validate: [
        { type: "required" },
        {
          type: "min-number-value",
          value: 0,
          message: "Cannot be zero or less",
          includeThreshold: true,
        },
      ],
    },
    {
      component: "text-field",
      name: "chol",
      type: "number",
      label: "Serum cholestoral in mg/dl",
      helperText:
        "Above 200 is cause for concern. [serum = LDL + HDL + .2 * triglycerides]",
      isRequired: true,
      validate: [{ type: "required" }],
    },
    {
      component: "checkbox",
      name: "fbs",
      label: "Fasting blood sugar > 120 mg/dl (>126 mg/dL signals diabetes)",
      isRequired: true,
      // validate: [{ type: "required" }],
    },
    {
      component: "radio",
      name: "restecg",
      label: "Resting electrocardiographic results",
      options: [
        { value: "0", label: "0: Nothing to note" },
        {
          value: "1",
          label:
            "1: ST-T Wave abnormality - can range from mild symptoms to severe problems - signals non-normal heart beat",
        },
        {
          value: "2",
          label:
            "2: Possible or definite left ventricular hypertrophy - Enlarged heart's main pumping chamber",
        },
      ],
      isRequired: true,
      validate: [
        {
          type: "required",
          message: "Please select the appropriate condition",
        },
      ],
    },
    {
      component: "text-field",
      name: "thalach",
      type: "number",
      label: "Maximum heart rate achieved",
      isRequired: true,
      validate: [
        { type: "required" },
        { type: "min-number-value", value: 0, includeThreshold: true },
      ],
    },
    {
      component: "checkbox",
      name: "exang",
      label: "Exercise induced angina",
      isDisabled: false,
      isRequired: true,
      // validate: [{ type: "required" }],
    },
    {
      component: "text-field",
      name: "oldpeak",
      type: "number",
      label: "ST depression induced by exercise relative to rest",
      helperText:
        "Looks at stress of heart during excercise. Unhealthy heart will stress more",
      isRequired: true,
      validate: [{ type: "required" }],
    },
    {
      component: "radio",
      name: "slope",
      label: "Slope of the peak exercise ST segment",
      isRequired: true,
      validate: [{ type: "required" }],
      options: [
        {
          value: "0",
          label: "0: Upsloping: better heart rate with excercise (uncommon)",
        },
        {
          value: "1",
          label: "1: Flatsloping: minimal change (typical healthy heart)",
        },
        { value: "2", label: "2: Downslopins: signs of unhealthy heart" },
      ],
    },
    {
      component: "text-field",
      name: "ca",
      label: "Number of major vessels (0-3) colored by flouroscopy",
      helperText:
        "Colored vessel means the doctor can see the blood passing through. The more blood movement the better (no clots)",
      type: "number",
      validate: [
        { type: "min-number-value", value: 0, includeThreshold: true },
        { type: "required" },
        { type: "max-number-value", value: 4, includeThreshold: true },
      ],
      isRequired: true,
    },
    {
      component: "text-field",
      name: "thal",
      label: "Thalium stress result",
      helperText:
        "1,3: normal ; 6: fixed defect: used to be defect but ok now ; 7: reversable defect - no proper blood movement when excercising ",
      type: "number",
      isRequired: true,
      validate: [
        { type: "required" },
        { type: "min-number-value", value: 0, includeThreshold: true },
      ],
    },
  ],
};
