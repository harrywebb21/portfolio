export default function Availability() {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <div className="bg-green-500 p-0.5 rounded-full avail-dot">
        <div className="rounded-full w-4 aspect-square bg-gradient-radial to-green-500 from-green-50  border-2 border-black" />
      </div>
      <h1 className="text-xl  text-white uppercase mt-0.5 font-bold">
        Available
      </h1>
    </div>
  );
}
