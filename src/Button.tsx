import { useAtom } from "signia-react";
import { useCallback } from "react";
import React from "react";

const Button: React.FC = () => {
  const count = useAtom("count", 0);
  const increment = useCallback(() => count.set(count.value + 1), [count]);

  return <button onClick={increment}>count is {count.value}</button>;
};

export default Button;
