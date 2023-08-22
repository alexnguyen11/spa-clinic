import { Inter } from "@next/font/google";
import Main from "@/components/home/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
