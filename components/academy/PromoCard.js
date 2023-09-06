const PromoCard = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center p-6 shadow-lg">
      <h2 className=" mb-2 uppercase text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-cyan-700 to-purple-900">
        Special Offer
      </h2>
      <p className="mb-4 text-2xl tracking-wide font-light my-5">
        Don't miss out on our limited-time promotion
      </p>
      <ul className="text-lg list-disc list-inside pl-4 mb-4">
        <li className="mb-2">
          Any 3 courses: <span className="font-bold uppercase">30% off</span>
        </li>
        <li className="mb-2">
          Any 4 courses: <span className="font-bold uppercase">40% off</span>
        </li>
        <li className="mb-2">
          Any 5 courses: <span className="font-bold uppercase">50% off</span>
        </li>
        <li className="mb-2">
          All courses: <span className="font-bold uppercase">70% off</span>
        </li>
      </ul>
      <p className="font-semibold uppercase tracking-wider text-xl">
        Total for all courses:{" "}
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-700 to-orange-400">
          $8525
        </span>
      </p>
    </div>
  );
};

export default PromoCard;
