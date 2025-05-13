import { titleProps } from "../../types/queueTypes";

const Title = ({ title, style }: titleProps) => {
  return (
    <h2
      className={`font-normal text-4xl 2xl:text-[50px] 3xl:text-[58px] 4xl:text-[100px] flex items-center py-7 ${style}`}
    >
      {title}
    </h2>
  );
};

export default Title;
