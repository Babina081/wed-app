import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import ClientCount from "@/components/ClientCount";
import ContactBanner from "@/components/ContactBanner";
import Featured from "@/components/Featured";
import Spotlight from "@/components/Spotlight";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <Spotlight></Spotlight>
      <Featured></Featured>
      <Testimonials></Testimonials>
      <ClientCount></ClientCount>
      <ContactBanner></ContactBanner>
    </>
  );
}
