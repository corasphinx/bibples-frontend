import Image from 'next/image';

const uncheckedIcon = () => {
  return (
    <Image
      src="/assets/images/svgs/uncheck.svg"
      alt=""
      width={12}
      height={12}
    />
  );
};

export default uncheckedIcon;
