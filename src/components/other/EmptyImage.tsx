type Props = {
};

export default function EmptyImage({ }: Props) {
  return (
    <div className={`bg-[#c6c3c3] rounded-full w-max p-[120px]`}>
      <img src="/svg/accountBlack.svg" alt="" />
    </div>
  );
}
