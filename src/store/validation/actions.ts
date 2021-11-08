import actionCreatorFactory from "typescript-fsa";
import { Validation } from "../../domain/entity/Validation";

const actionCreator = actionCreatorFactory();

const validationActions = {
  setIsStartvalidation: actionCreator<boolean>("SET_IS_START_VALIDATION"),
  setValidation: actionCreator<Validation>("SET_VALIDATION")
};

export default validationActions;