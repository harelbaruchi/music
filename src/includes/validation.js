import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alphaSpaces", alphaSpaces);
    defineRule("email", email);
    defineRule("minVal", minVal);
    defineRule("maxVal", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("tos", required);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required.`,
          min: `the field ${ctx.field} is too short.`,
          max: `the field ${ctx.field} is too long.`,
          alphaSpaces: `the field ${ctx.field} may only contain alphabetic characters.`,
          email: `the field ${ctx.field} must be a valid email address.`,
          minVal: `the field ${ctx.field} is too low. `,
          maxVal: `the field ${ctx.field} is too high.`,
          excluded: `you are not allowed to use this value for the field ${ctx.field}.`,
          passwords_mismatch: "the passwords dont match",
          tos: "you must accept the terms of service",
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
