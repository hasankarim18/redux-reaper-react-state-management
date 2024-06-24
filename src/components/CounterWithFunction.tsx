type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export default function CounterWithFunction({ count, setCount }: TProps) {
  const countIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div className="flex w-full justify-center p-10 border-4 border-purple-600 rounded-lg mt-10 mb-10 ">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-semibold">Counter by function</div>
          <button
            onClick={countIncrease}
            className="btn btn-neutral text-2xl hover:btn-warning px-8"
          >
            {count}
          </button>
        </div>
      </div>
    </div>
  );
}
