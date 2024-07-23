import s from "./PlayerProgressBar.module.css";

type Props = {
  max: number;
  value: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlayerProgressBar = ({ max = 0, value, onChange, step }: Props) => {
  return (
    <>
      <input
        className={s.styledProgressInput}
        type="range"
        name="range"
        min={0}
        max={max}
        value={value}
        onChange={onChange}
        step={step}
      />
    </>
  );
};

export default PlayerProgressBar;
