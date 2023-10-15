import {
  Email,
  LocalPhone,
  LocationOn,
  Interests,
  Facebook,
} from "@mui/icons-material/";
import ContactImg from "@/public/assets/contact.jpeg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full h-full font-poppins bg-gray-100">
      <div className="relative h-[400px] overflow-hidden">
        <Image src={ContactImg} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 className="pb-2 mb-2 text-xl font-bold text-white md:text-4xl">
            Let's Stay Connected
          </h2>
          <p className="text-sm text-white">
            Whether you have questions about our services or want to schedule an
            appointment, we're here to assist you in your journey to relaxation
            and wellness.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center bg-stone-100 w-full">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl p-6 mx-auto lg:py-11">
          {[
            {
              icon: <Email />,
              title: "Email",
              link: "mailto:taichigroup@icloud.com",
              value: "Taichigroup@icloud.com",
            },
            {
              icon: <LocalPhone />,
              title: "Phone",
              link: "tel:5879179758",
              value: "587-917-9758",
            },
            {
              icon: <LocationOn />,
              title: "Office",
              link: "https://www.google.com/maps?sca_esv=558805880&output=search&q=taichi+massage&source=lnms&entry=mc&sa=X&ved=2ahUKEwi_jMyYxO6AAxX9GTQIHS6VC7QQ0pQJegQIDBAB",
              value: "5717 3 St SW, Calgary, AB T2H 0J6",
            },
            {
              icon: <Interests />,
              title: "Social",
              social: true,
              socialLinks: [
                { icon: <Facebook />, link: "#" },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
                      />
                    </svg>
                  ),
                  link: "#",
                },
              ],
            },
          ].map((item, idx) => (
            <div className="w-full p-4 mb-10" key={idx}>
              <div className="max-w-xs mx-auto text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-500 rounded-full">
                  <a href={item.link}>{item.icon}</a>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                  {item.title}
                </h2>
                {!item.social ? (
                  <a
                    href={item.link}
                    className="text-base font-medium text-gray-500 md:text-lg hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="flex flex-row items-center justify-center gap-3">
                    {item.socialLinks.map((socialItem, sIdx) => (
                      <a key={sIdx} href={socialItem.link}>
                        {socialItem.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
