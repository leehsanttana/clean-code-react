import React, { useCallback, useContext } from "react";
import Spinner from "../spinner/spinner";
import Styles from "./form-status-styles.scss";
import Context from "@/presentation/context/form/form-context";

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context);
  const { isLoading } = state;
  const { mainError } = errorState;
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner />}
      {mainError && <span>{mainError}</span>}
    </div>
  );
};

export default FormStatus;
