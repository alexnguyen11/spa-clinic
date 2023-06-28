import BookingBanner from "@/components/booking/BookingBanner";

const booking = () => {
  return (
    <div className="flex flex-wrap w-full">
      <BookingBanner service="massage" />
      <BookingBanner service="spa" />
    </div>
  );
};

export default booking;
