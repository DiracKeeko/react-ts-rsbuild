import React from 'react';

import { StepProps } from './constant';

const Step2 = ({ setPrevDisabled, setNextDisabled }: StepProps = {}) => {
  setPrevDisabled && setPrevDisabled(false);
  setNextDisabled && setNextDisabled(false);
  return (
    <div>
      <h1>Step2</h1>
    </div>
  );
};

export default Step2;