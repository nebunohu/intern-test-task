import { FC, FormEvent, useState } from "react";
import getMinSum from "../../utils/get-min-sum";

// Styles
import styles from './app.modules.css';

const App: FC = () => {
  const [isShowResult, setIsShowResult] = useState(false);
  const [result, setResult] = useState<number | string | null >(null);
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      input: { value: string };
    };
    setResult(getMinSum(target.input.value));
    setIsShowResult(true);
  };

  const onInputChandeHandler = () => {
    setIsShowResult(false);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <form
        onSubmit={onSubmitHandler}
      >
        <input
          name="input"
          type="text"
          onChange={onInputChandeHandler}
        />
        <button type="submit">Get min sum</button>
      </form>
      {
        isShowResult && <div className={`${styles.result}`}>
          Result: {result}
        </div>
      }
    </div>
  );
};

export default App;