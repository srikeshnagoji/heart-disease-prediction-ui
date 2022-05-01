export const fields = [
  "age",
  "sex",
  "cp",
  "trestbps",
  "chol",
  "fbs",
  "restecg",
  "thalach",
  "exang",
  "oldpeak",
  "slope",
  "ca",
  "thal",
];

export const labelFieldMapping = {
  age: "Age",
  sex: "Gender",
  cp: "Chest pain type",
  trestbps: "Resting blood pressure",
  chol: "Serum cholestoral in mg/dl",
  fbs: "Fasting blood sugar mg/dL",
  restecg: "Resting ECG results",
  thalach: "Max heart rate achieved",
  exang: "Exercise induced angina",
  oldpeak: "ST depression induced by excercise relative to rest",
  slope: "Slope of peak exercise ST segment",
  ca: "Major vessels colored by flourosopy",
  thal: "Thalium stress result",
};

export const defaultsData = {
  fbs: 0,
  exang: 0,
};
