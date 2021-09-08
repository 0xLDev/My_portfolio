import { useEffect, useState } from "react";

import { getCssVariable } from "../../utils/css";

export const useCssVariable = <T>(key: string, defaultValue: T) => {
  const [variable, setVariable] = useState<T>(defaultValue);

  useEffect(() => {
    setVariable((getCssVariable(key) || defaultValue) as unknown as T);
  }, [key, defaultValue]);

  return variable;
};
