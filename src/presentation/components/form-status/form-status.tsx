import React, { useCallback, useContext } from "react";
import Spinner from "../spinner/spinner";
import Styles from "./form-status-styles.scss";
import Context from "@/presentation/context/form/form-context";

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner />}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormStatus;
