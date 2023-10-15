import Link from "next/link";
import Image from "next/image";

const MassageCard = ({ massage }) => {
  return (
    <div key={massage.id}>
      <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <Image
          src={massage.img}
          alt={massage.title}
          className="w-full h-32 sm:h-40 md:h-56 object-cover"
        />
        <div className="flex flex-col p-4 justify-between flex-grow">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              {massage.title}
            </h2>
            <p className="text-sm text-gray-700 mb-2 overflow-ellipsis overflow-hidden h-24 sm:h-32">
              {massage.desc}
            </p>
          </div>
          <Link href={massage.url}>
            <button className="text-white font-semibold bg-yellow-500 hover:bg-yellow-600 px-4 py-2 mt-4 rounded w-full">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MassageCard;
