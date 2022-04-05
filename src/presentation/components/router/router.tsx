import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type Props = {
  makeLogin: ReactElement;
};

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={makeLogin} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
