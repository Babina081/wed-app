import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import ContactBanner from "@/components/ContactBanner";
import Featured from "@/components/Featured";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <Spotlight></Spotlight>
      <Featured></Featured>
      <ContactBanner></ContactBanner>
    </>
  );
}
