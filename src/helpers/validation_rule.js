import { extend } from "vee-validate";
import {
  required,
  email,
  digits,
  length,
  max,
  min,
} from "vee-validate/dist/rules";

export const RuleInstaller = function () {
  extend("required", required);
  extend("email", email);
  extend("digits", digits);
  extend("length", length);
  extend("max", max);
  extend("min", min);
  // extend("errors", errors);
};
