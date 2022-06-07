import { FC, FormEvent, useState } from "react";
import getMinSum from "../../utils/get-min-sum";

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
    <>
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
        isShowResult && <div>
          Result: {result}
        </div>
      }
    </>
  );
};

export default App;