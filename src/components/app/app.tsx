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

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
      >
        <input
          name="input"
          type="text"
        />
        <button type="submit">get min sum</button>
      </form>
      {
        isShowResult && <div>
          {result}
        </div>
      }
    </>
  );
};

export default App;