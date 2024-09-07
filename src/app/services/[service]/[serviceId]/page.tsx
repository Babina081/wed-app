"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { eventCompaniesDetails } from "@/utils/data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaRegCheckSquare, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add, selectFavorites } from "@/redux/features/favoriteSlice";
import toast from "react-hot-toast";
import Review from "@/components/Review";

const ServiceIdPage = () => {
  const router = useRouter();
  const { serviceId, service } = useParams();
  console.log(service);

  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites); // Assuming you have a selector for favorites

  // Ensure serviceId is treated as a string
  const decodedServiceId = decodeURIComponent(
    Array.isArray(serviceId) ? serviceId[0] : serviceId || ""
  );

  // Find the company from eventCompaniesDetails
  const company = eventCompaniesDetails.find(
    (company) => company.name.toLowerCase() === decodedServiceId.toLowerCase()
  );

  useEffect(() => {
    if (company) {
      setIsInFavorites(isFavorite(company.name));
    }
  }, [favorites, company]);

  // Check if the company is in favorites
  const isFavorite = (companyName: string) =>
    favorites.some((item) => item.name === companyName);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleAddToFavorites = (company: {
    name: string;
    location: string;
  }) => {
    if (!isFavorite(company.name)) {
      dispatch(add({ ...company, service: service.toString() }));
      toast.success(`${company.name} has been added to favorites!`);
      setIsInFavorites(true);
    } else {
      toast.error(`${company.name} is already in your favorites.`);
    }
  };

  return (
    <section className="flex flex-col gap-2 justify-between">
      {eventCompaniesDetails
        .filter(
          (company) =>
            company.name.toLowerCase() === decodedServiceId.toLowerCase()
        )
        .map((company) => (
          <div key={company.name} className="py-10 px-10">
            <div className="w-full bg-gray-300 ">
              <Slider {...settings}>
                {company.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={company.name}
                    className="w-full object-cover rounded-lg"
                  />
                ))}
              </Slider>
            </div>
            <div className="flex flex-col md:flex-row  justify-between items-center mt-7">
              <div className="flex flex-col ">
                <Heading>{company.name}</Heading>
                <p className="text-red-500">{company.category}</p>
              </div>
              <div className="flex gap-2 ">
                <Link href={`/services/${company.name}/${serviceId}/#reviews`}>
                  <Button color="white">View Reviews</Button>
                </Link>
                {isInFavorites ? (
                  <div className="flex gap-2">
                    <Button color="yellow" disabled>
                      <span className="flex gap-2 items-center justify-center ">
                        <span>In Favorite</span>{" "}
                        <span>
                          <FaHeart />
                        </span>
                      </span>
                    </Button>
                    <Button
                      color="green"
                      onClick={() => {
                        router.push("/favorites");
                      }}
                    >
                      View Favorites
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => handleAddToFavorites(company)}>
                    <span className="flex gap-2 items-center justify-center">
                      <span>Add to Favorite</span> <FaRegHeart />{" "}
                    </span>
                  </Button>
                )}
              </div>
            </div>
            <div className="grid  grid-cols-3 gap-4 mt-4">
              <div className="col-span-3 md:col-span-2 gap-4">
                <div className="bg-slate-300/10 p-4 ">
                  <p className="tracking-wide mb-4">{company.description}</p>
                  <Heading>Mission</Heading>
                  <p className="tracking-wide mb-4">
                    {company.missionDescription}
                  </p>
                  <div className="w-full h-1 bg-slate-500 my-2"></div>
                  <ul className="flex gap-4 my-4">
                    {company.services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-2 items-center justify-center"
                      >
                        <FaRegCheckSquare />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-1 bg-slate-500 my-2"></div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur amet laboriosam quaerat eos doloribus. Eius fuga
                  laborum ea quisquam magni id dolores reiciendis ut distinctio
                  repellendus ipsam expedita odit ducimus incidunt saepe veniam
                  cum nisi officiis, dolore itaque amet optio? Id et ut sapiente
                  corporis modi perferendis dicta ab laudantium officiis. Quos
                  nobis vitae iste mollitia officia quod animi harum
                  reprehenderit voluptatem nostrum cupiditate sed repellendus
                  nulla dignissimos libero, consectetur alias sunt ex eius,
                  maiores earum? Repellat cum eaque iste aliquam sunt molestiae
                  dolorem, soluta autem ab, architecto, dolore necessitatibus
                  blanditiis praesentium? Perspiciatis, beatae sed! Eius
                  recusandae commodi suscipit? At ipsam, eius, odit aliquid
                  magnam eveniet hic ipsa eum ullam nemo voluptate voluptas
                  aliquam molestiae neque numquam. Ex minus architecto inventore
                  aliquid dolores aperiam ipsum! Inventore explicabo omnis
                  repellendus a aspernatur saepe, natus corporis ratione iste,
                  sequi fuga odio! Odit illo ipsa magni autem aperiam tenetur
                  veniam consequatur impedit, assumenda possimus, minus
                  explicabo ad temporibus optio. Nam voluptatem eaque
                  necessitatibus quisquam quo cupiditate non reiciendis
                  consequuntur id quis, tenetur rem. Labore aliquid blanditiis
                  nobis corporis nulla velit natus voluptatibus vero inventore,
                  cum architecto commodi illo. Id quam ullam ipsam veniam
                  voluptatibus reprehenderit ipsum eum laborum sequi et, ut
                  culpa praesentium sapiente deleniti iste odit consectetur
                  aliquid temporibus vitae, magni, quaerat commodi ad accusamus
                  nostrum! Laudantium porro iste ea, quibusdam tempore nostrum
                  dignissimos accusamus fugiat incidunt earum autem doloribus
                  labore ex ratione beatae? Quis, eligendi. Dolores optio amet
                  atque veritatis, distinctio nemo sapiente? Porro quasi
                  corporis voluptatem consequatur non recusandae cumque
                  adipisci, libero molestias sed fugiat alias. Doloremque cumque
                  tempore sapiente aliquam optio illum fugiat, tenetur velit
                  molestiae dolorem provident, perferendis sed consequatur aut
                  ad hic commodi? Non cupiditate voluptate aperiam maxime
                  dolorum rem incidunt dolorem at velit, illo quibusdam animi,
                  in culpa minima maiores atque. Cupiditate minus praesentium
                  quas, inventore reiciendis, consequuntur necessitatibus odit
                  fugit laudantium aspernatur eum in eius, omnis voluptatem
                  cumque soluta aut dicta? Ipsam quis veritatis consectetur
                  iusto repudiandae voluptatibus facilis minima necessitatibus
                  labore, atque suscipit dolorum. Harum assumenda exercitationem
                  inventore minima doloribus amet reprehenderit deleniti officia
                  modi natus voluptatum ipsum aliquam nemo provident praesentium
                  veritatis molestias fuga repellat at quidem dignissimos
                  dolorum, consequuntur autem. Enim consectetur voluptatem vero?
                  Mollitia velit corporis iure quisquam ex? Expedita maxime
                  praesentium unde ex ea alias quod, ducimus illo facere nobis
                  placeat dicta nemo vero, fuga dolore illum possimus quam
                  provident iste repellat eos dolorem reprehenderit? Temporibus
                  repudiandae amet qui doloribus? Voluptas vel dolor sequi
                  repellendus fugiat a, voluptatem eos inventore quos eaque ipsa
                  nobis odio, laborum unde soluta! Quibusdam cum laboriosam
                  error quae esse qui facere iure. Aspernatur, amet! Numquam
                  eligendi sunt beatae facilis culpa voluptates sed unde
                  commodi, quos explicabo aspernatur nam reiciendis velit veniam
                  officiis placeat iure dolore dolorum necessitatibus quisquam
                  fugiat. Odit nihil vitae excepturi temporibus voluptates illo
                  cumque esse, veritatis id assumenda hic, animi praesentium
                  iste in eaque, quibusdam voluptas debitis totam corporis minus
                  quo ipsum. Necessitatibus eos aliquam repellat, asperiores
                  corporis commodi aliquid blanditiis nisi reiciendis earum hic
                  unde consequuntur quas accusamus libero animi tenetur soluta
                  sequi labore saepe consequatur accusantium eum. Saepe vitae
                  omnis aliquam molestias numquam harum, at, sequi ea incidunt
                  odio velit. Quos, labore et tenetur harum earum quasi
                  molestias magnam sunt reiciendis repellat porro iure provident
                  quibusdam qui distinctio expedita vitae blanditiis. Doloremque
                  at atque saepe itaque magnam placeat magni iste laudantium,
                  numquam dolores animi et voluptatem dolorem doloribus harum
                  aspernatur impedit? Provident optio possimus natus eius modi
                  minima dolores quas nemo aliquam nisi, nam consequatur
                  inventore distinctio iste. Nisi, ullam! Modi, aperiam est
                  earum temporibus similique explicabo quas perferendis tempore
                  vero ipsa facilis veritatis magnam possimus dolore excepturi
                  dolorem ea asperiores officia quod. Assumenda vero deserunt
                  est esse dolores totam cum neque ratione corporis delectus
                  officiis aperiam, tempore ipsa, porro dignissimos accusamus?
                  Soluta officiis atque aut eaque error, vel doloribus corrupti
                  quidem distinctio maxime corporis officia. Accusamus enim
                  aliquam ut minima dicta voluptatum. Deserunt quod reiciendis
                  veritatis a architecto. Recusandae explicabo quis ab nemo
                  perspiciatis, vel, magni distinctio enim minima alias
                  asperiores earum architecto ea culpa totam? Laudantium ea
                  facilis harum beatae excepturi? Dolor rerum enim modi,
                  necessitatibus quod doloremque reprehenderit libero qui nobis
                  doloribus tempora maiores harum quidem vero possimus amet
                  repudiandae eveniet quia facilis vitae. Blanditiis laborum,
                  est magnam ipsa assumenda vitae, voluptatibus eius maxime
                  ullam ipsum dolorem. Totam fugit repudiandae odit aliquid,
                  molestias eaque voluptate nam eos dolore rerum blanditiis
                  vitae cupiditate exercitationem recusandae mollitia nihil
                  omnis distinctio necessitatibus. Aliquam eveniet, neque eius
                  natus eligendi veritatis a id assumenda illum similique, omnis
                  harum fugit reiciendis praesentium nemo ipsam! Ex voluptatum
                  reiciendis, quia tenetur nostrum, et assumenda accusantium
                  repellat nihil molestiae adipisci unde cumque explicabo
                  nesciunt aut rem fugit cupiditate beatae sint. Quae dolor
                  sequi sint tempora eos qui reprehenderit fuga necessitatibus
                  quia reiciendis labore voluptas ea obcaecati, consectetur ab!
                  Aspernatur laborum tempore consectetur asperiores nesciunt!
                  Quaerat tempora incidunt libero odio error possimus deleniti
                  vero ipsam commodi? Explicabo vel magni non placeat ratione
                  enim, quaerat et eligendi, voluptas, reprehenderit nulla
                  pariatur cum modi iste distinctio quasi est dolorem
                  praesentium rem! Earum dicta odio perferendis officia omnis a
                  aliquid similique, voluptates, reiciendis quo ratione maxime,
                  perspiciatis exercitationem! Laborum explicabo error iusto
                  animi obcaecati, nesciunt pariatur. Suscipit autem laudantium
                  quibusdam beatae, alias fuga facilis fugiat. Sapiente
                  doloremque adipisci obcaecati culpa omnis! Hic fugiat dolor
                  optio eveniet explicabo iure! Minima, totam. Facilis,
                  explicabo iure aliquid, facere fugit soluta nulla temporibus
                  repellendus quia quae cum ullam officia architecto labore
                  dicta maxime ipsam optio aut in unde atque! Soluta, sint
                  impedit rerum maxime omnis laudantium a quas perferendis
                  dolorem ut illo magni beatae eligendi, distinctio eos, labore
                  accusamus commodi cumque ullam voluptates ex dicta. Inventore
                  laborum eaque alias! Nisi, quidem hic iusto molestiae eaque
                  quaerat eum repellendus, culpa velit impedit, nam iste?
                  Molestiae inventore facilis recusandae laboriosam aut
                  distinctio iste, iure pariatur. Officia architecto similique
                  unde animi nostrum nemo facere sit ut aliquam velit magnam
                  facilis repellendus, odit a culpa iste optio iure inventore
                  quos exercitationem. Repellat eos, enim doloremque porro nemo
                  perferendis culpa eius, iure laudantium placeat dignissimos
                  omnis quod! Amet iste quia vero non nulla perspiciatis
                  pariatur nemo dolorum, placeat iure nesciunt quaerat excepturi
                  ullam. Odit, commodi aspernatur impedit sunt debitis
                  distinctio laudantium provident, doloribus error accusantium
                  id numquam. Ratione aliquid quaerat itaque reiciendis
                  reprehenderit, error voluptates dolor ducimus molestiae rerum
                  consectetur repellendus exercitationem eveniet consequatur hic
                  animi est et, voluptate ipsum iusto ullam distinctio odit
                  dolores voluptatum. Atque animi iure corrupti? Voluptatum
                  fugit nesciunt nobis harum debitis distinctio corrupti
                  deserunt maiores incidunt ipsam quam praesentium neque
                  voluptatem odio, ipsa, in deleniti sunt. Iusto distinctio
                  repudiandae quibusdam adipisci necessitatibus at autem, earum
                  dolor itaque ipsa quasi facilis voluptatum voluptatibus fugit.
                  Modi id dolor natus, eligendi quaerat quos voluptatem
                  quisquam, placeat, deleniti ex maiores accusamus recusandae
                  laudantium sint ducimus quidem omnis asperiores unde excepturi
                  iste tempore. Nemo eaque porro quod omnis vel provident
                  possimus impedit officia, aut quidem iste, ad eveniet ut
                  deserunt similique ipsam debitis quisquam odio totam corrupti
                  corporis obcaecati itaque. Inventore ut dolorem, quo
                  blanditiis repellat cumque quam. Dicta id dolor corrupti at
                  quis distinctio suscipit earum! Explicabo illum voluptatem
                  optio inventore reprehenderit sapiente tenetur asperiores
                  perspiciatis eaque ab necessitatibus eius eveniet, culpa
                  accusantium accusamus voluptatibus labore quo. Cumque impedit
                  architecto tempora sapiente, ullam deserunt minus blanditiis,
                  obcaecati, nihil quod magnam eaque hic commodi eum et sint quo
                  totam illum iure? Unde incidunt dolor nulla hic animi nemo
                  ducimus odit distinctio totam esse voluptatum tenetur tempora
                  aperiam odio aut placeat optio nisi, eos amet excepturi
                  quibusdam quaerat consectetur? Similique optio sint, quam
                  laudantium possimus in sit pariatur illum voluptatibus
                  voluptas impedit deserunt eius excepturi asperiores eveniet
                  blanditiis hic dolore voluptates nobis, porro nihil! Sequi
                  officia pariatur laudantium ipsam voluptatum ratione quaerat
                  perspiciatis quibusdam animi aut, maxime quasi tempore eaque
                  inventore laborum, quod temporibus eius in? Facilis ut quis
                  quaerat laboriosam cupiditate repudiandae doloremque ipsum
                  commodi quidem? Sequi nemo soluta ut quaerat saepe quidem et
                  magnam iusto doloribus repudiandae tempora laudantium,
                  quibusdam adipisci possimus voluptas atque excepturi cum
                  beatae sit deserunt reprehenderit rem quasi odit. Quisquam
                  quas voluptate perferendis quidem, quibusdam, maxime
                  exercitationem facilis, aliquam recusandae officiis at
                  tempora! Voluptates distinctio obcaecati in eum, ab
                  repellendus quos tempore autem culpa quis consequuntur fuga
                  labore dolore quam sunt ex repudiandae. Sunt optio praesentium
                  ad tenetur itaque dolorem ut reprehenderit exercitationem ab
                  aperiam ipsum veritatis, sit, incidunt officiis commodi
                  blanditiis vitae, soluta possimus provident officia doloribus
                  earum magni atque quisquam. Repellat animi ducimus ipsam
                  velit, libero aliquid quis ut cumque voluptas? Accusantium
                  tenetur iusto quae rerum dicta, rem quasi perferendis id
                  numquam at odio non, aperiam quos accusamus unde commodi, nisi
                  voluptatum? Quasi soluta reiciendis, unde modi eaque quos
                  accusamus sequi explicabo debitis vel quam voluptatum cumque
                  optio consequuntur qui, eius animi ad iusto expedita adipisci
                  obcaecati possimus tempora consectetur deserunt! Modi aperiam
                  impedit officiis, atque veritatis iure quisquam facere
                  molestias maxime odit illum aspernatur corrupti sed placeat
                  odio veniam consequatur architecto ipsam facilis expedita a
                  quod eveniet. Corrupti nobis cum ratione asperiores sit illum
                  mollitia explicabo fuga reprehenderit. Ut error quo, enim
                  molestiae vero culpa quisquam doloremque, ea iste quaerat
                  molestias praesentium dicta repellat neque minima sunt!
                  Maiores itaque nemo aspernatur, necessitatibus, qui quam odit
                  ab natus nesciunt sapiente atque quaerat voluptas ullam vel
                  ducimus quas, exercitationem sint officia dolor? Ipsa aperiam
                  temporibus suscipit ut reiciendis eius sed porro! Saepe
                  ducimus, suscipit laborum aliquid sint dolore fugiat sed,
                  voluptas recusandae corrupti voluptatem aut repellendus
                  ratione, perferendis est explicabo maxime asperiores eveniet
                  perspiciatis maiores placeat nulla laboriosam? Fugiat, veniam.
                  Delectus molestias voluptates harum quis eius voluptatibus,
                  alias a cum eligendi ullam autem minus, cupiditate
                  consequuntur corporis maxime impedit unde praesentium
                  repudiandae ut? Saepe, fugit asperiores quasi quaerat itaque
                  cupiditate in earum enim iste eum dignissimos? Quis architecto
                  sunt molestiae dolor itaque? Recusandae esse placeat
                  consequuntur officia ad ex quam, ullam vero a illum
                  reprehenderit cumque repellat fugiat nemo inventore quae
                  provident iusto blanditiis animi modi ipsum minima voluptate.
                  Consectetur unde perferendis possimus, iusto quae iste cum
                  incidunt laudantium! Voluptate magnam et tenetur officiis,
                  beatae eum veniam minus mollitia alias est fugit sequi
                  consequuntur. Possimus voluptatum qui sit modi alias
                  consectetur nostrum doloremque placeat repudiandae maxime,
                  maiores similique enim, illo ad obcaecati quam porro beatae
                  quia quod odit itaque culpa soluta aspernatur est! Ipsa,
                  voluptatibus maxime voluptatem mollitia quibusdam eligendi
                  harum alias nulla? Sit quis ad pariatur quas natus architecto,
                  rerum adipisci tenetur quos, eius, quod laudantium iste
                  corporis id officia molestiae nam similique nemo nobis
                  exercitationem! Placeat molestiae aliquid debitis, at saepe
                  obcaecati iure reprehenderit excepturi ducimus asperiores,
                  facere ad cupiditate necessitatibus, magni a! Ea ad dolor ut
                  optio maxime vel alias? Asperiores modi dolore eos dolores
                  aperiam deleniti aliquid rem voluptate, consequuntur nemo sit
                  fugiat vel, placeat dignissimos porro ipsum animi accusantium
                  nostrum illum numquam! Vel omnis quasi aliquid minus
                  reprehenderit repellendus fugit vero voluptate, necessitatibus
                  consectetur atque. Adipisci temporibus voluptatem eaque
                  repellat excepturi fuga, ipsa a doloremque sint nostrum
                  pariatur cumque omnis commodi? Neque voluptatibus illum rem
                  delectus placeat mollitia debitis quos dolorum soluta qui
                  sint, deleniti maxime, hic inventore reprehenderit. Ratione
                  distinctio eligendi ipsa, facere atque et. Dolore voluptate
                  atque voluptatem quisquam commodi autem, numquam molestiae quo
                  voluptates fuga consectetur ducimus non omnis velit et labore
                  laborum iusto eaque sequi vero fugit possimus similique!
                  Laboriosam fugit ad hic explicabo veritatis sint enim ducimus
                  tenetur corporis suscipit voluptatum inventore earum, alias
                  facilis blanditiis possimus! Ut nisi quae eius consectetur
                  tempora aspernatur sint unde corporis culpa earum eum deleniti
                  asperiores hic tempore itaque exercitationem, adipisci saepe
                  enim harum dignissimos neque nihil quis ad. Expedita
                  dignissimos nulla distinctio a, provident quis voluptatem
                  architecto aspernatur vitae perferendis porro tempore
                  repudiandae quo quidem ea, consequatur quae explicabo ducimus
                  magni molestiae. Tempore molestiae corporis, blanditiis quia
                  aliquid et sed. Laboriosam, alias? Veritatis, dignissimos?
                  Dolorum necessitatibus accusantium, expedita quas provident
                  asperiores amet. Saepe adipisci repudiandae nemo obcaecati!
                  Non totam beatae cupiditate blanditiis quidem sit perferendis,
                  libero, adipisci fugit, minus ratione? Reprehenderit corporis
                  neque provident consequatur quae fuga sint facere sapiente in
                  unde et iste mollitia quam consectetur odio fugiat earum
                  incidunt saepe debitis, ab velit veniam. Maiores est
                  laudantium voluptatem modi deserunt corporis tenetur at,
                  debitis vel beatae facere harum officiis iusto incidunt
                  nesciunt enim eveniet libero earum fugiat consequatur illum
                  animi voluptas exercitationem? Nam molestias sit illo
                  consequatur minima, labore cupiditate maxime. Minus placeat
                  odit vitae cumque, assumenda laborum quam sapiente id
                  laudantium quae dolorum repellat perspiciatis alias aliquid
                  consectetur dolores. Ratione corrupti quae odit neque
                  blanditiis beatae qui inventore nostrum mollitia, velit itaque
                  earum nobis placeat natus quo veniam molestiae, minus ullam
                  cupiditate ab aspernatur quaerat eveniet exercitationem ad?
                  Tempore, ipsam accusamus reiciendis ex architecto vel
                  provident iusto dolor! Id, dolores reiciendis vitae assumenda
                  autem quo sint ut nesciunt animi quos quia libero unde nihil
                  quaerat voluptatem eaque omnis voluptate cupiditate veniam
                  quidem ipsum dolor! Tenetur ipsa magni molestias! Sapiente
                  sunt obcaecati magnam veniam quos magni vel? Perferendis
                  sapiente libero a nam, accusamus laboriosam similique
                  recusandae, iste magni repudiandae sed, reprehenderit illum
                  nobis earum voluptas? Omnis eveniet asperiores, necessitatibus
                  fugit laboriosam dolorem harum assumenda sint nostrum fugiat
                  aspernatur, dolorum rerum fuga, ex culpa exercitationem atque
                  sunt voluptates at ipsum. Obcaecati, fugit vero ipsum aliquam
                  optio aperiam, quae saepe dolor amet, quos sit! Sint molestias
                  est excepturi labore nisi. Error dolores enim beatae
                  voluptate, corrupti harum ducimus, eaque repellendus natus et
                  praesentium repudiandae ipsa tempora animi libero expedita,
                  veritatis earum? Adipisci fugit eveniet voluptatibus, expedita
                  assumenda illo, minima quibusdam magni ipsum asperiores
                  dolorem quo nihil ullam modi ab nam? Nesciunt nisi at repellat
                  asperiores nobis enim aspernatur numquam culpa vero! Officia
                  ipsa rem adipisci eos sequi quod eius vitae, impedit
                  exercitationem quos architecto laborum consequatur laudantium,
                  beatae assumenda! Molestiae ea quas porro! Unde inventore
                  sapiente tempora dignissimos enim architecto veritatis nisi
                  explicabo saepe eum amet eligendi, dolore temporibus
                  consequatur cumque expedita. Voluptatibus iure placeat
                  obcaecati cupiditate beatae sequi facilis distinctio fugit
                  atque quas, a quisquam nam excepturi iste cum adipisci esse
                  corporis ipsam voluptas tempore, maxime nesciunt odio.
                  Laboriosam necessitatibus ad illo consequatur provident porro
                  nemo ducimus dicta totam tempore vel sapiente ut blanditiis
                  quidem cumque fuga sequi facere, pariatur doloribus tenetur?
                  Quam, odio esse. Ut nulla soluta accusamus qui sed optio
                  asperiores architecto quae, nemo dolores doloremque
                  exercitationem, amet placeat quidem labore. Cumque reiciendis
                  exercitationem ut itaque cum accusantium ab consequatur
                  delectus nihil incidunt deleniti laboriosam, necessitatibus,
                  aspernatur suscipit, magni asperiores odit praesentium eum
                  alias fuga maiores sapiente accusamus! Recusandae fugit modi
                  corporis earum repudiandae, quisquam quasi quo neque odit
                  numquam cupiditate soluta dolorum explicabo delectus
                  exercitationem iusto nihil officiis minima ex sed sapiente.
                  Eaque totam et doloremque maxime quas eligendi consectetur
                  porro! Dicta enim error accusamus nisi? Inventore placeat illo
                  debitis mollitia, dolorum eaque, et animi quis cumque
                  consequuntur necessitatibus ipsam voluptas sint, eius error
                  sed corporis accusamus. Sequi praesentium sit cum alias ipsam
                  natus quidem explicabo vero dolorem magni, sunt magnam nostrum
                  ducimus nam libero accusamus est distinctio totam sapiente!
                  Soluta inventore, ex neque nostrum qui facere aperiam
                  dignissimos exercitationem, eos, cum quia. Incidunt aut
                  debitis exercitationem veritatis? Odit necessitatibus porro
                  commodi beatae. Provident, eos voluptas. Odit odio nesciunt
                  voluptates iste quaerat maiores quasi tempora suscipit non
                  amet, cum quos at a dolorem alias possimus earum fugiat.
                  Facere veniam excepturi soluta cumque. Nam quos pariatur, amet
                  iusto quasi expedita aperiam blanditiis ipsam maiores quia
                  eligendi tempora suscipit cumque rem dicta assumenda
                  reprehenderit est cupiditate eveniet optio magni quibusdam
                  explicabo atque porro. Reprehenderit mollitia odio asperiores
                  distinctio maxime possimus dignissimos sunt provident
                  aspernatur. Excepturi adipisci pariatur soluta laboriosam
                  facilis assumenda deserunt deleniti amet, corrupti suscipit
                  voluptatem nulla vel error ab dolorem labore quae fugiat
                  expedita! Exercitationem vel consectetur dolor repellat
                  temporibus rerum quam unde corrupti dignissimos commodi
                  doloremque atque odio voluptatibus laudantium quasi, nobis,
                  cum, facilis maxime in. Voluptate cumque repellendus eligendi
                  inventore voluptatum ex explicabo ad praesentium nam, sed
                  dolore doloribus voluptatibus quis ducimus numquam dolorem rem
                  dolor possimus aliquid reprehenderit magni sapiente. Totam ut
                  odio neque distinctio quas, nisi nam enim, est doloremque
                  debitis velit sed blanditiis! Pariatur quasi possimus
                  accusamus harum, vero modi ea. Quas vel ab quae molestiae,
                  aliquid repudiandae, dignissimos quibusdam qui dolores
                  veritatis animi nihil eaque quo mollitia magni inventore.
                  Quibusdam odit praesentium dolores recusandae asperiores aut
                  magnam laborum veritatis modi magni unde dolore labore ad eos
                  ipsam voluptatem alias corrupti incidunt, animi, maiores harum
                  nisi quidem saepe? Minus, explicabo maxime nobis, sed aliquid
                  modi voluptatem expedita pariatur architecto laboriosam vel
                  rem magni repellat fuga, voluptatum beatae similique laborum
                  corporis cum porro dolorem commodi consequuntur enim
                  praesentium! Iusto inventore aspernatur labore illum a ratione
                  doloribus vel voluptatibus culpa asperiores repellat, ducimus
                  iste nostrum similique. Assumenda ea, doloribus aperiam
                  perferendis fuga architecto labore, a quis hic debitis
                  repellat officiis deserunt quo quos sit ducimus neque possimus
                  iste! Obcaecati accusantium ad, deleniti voluptates provident
                  labore, illum nobis quae quaerat eaque incidunt excepturi iure
                  nemo repellendus. Non possimus unde iusto ex veritatis cumque
                  sequi placeat, facere qui quisquam. Delectus, debitis? Magni
                  adipisci expedita molestiae, nobis ipsam quisquam esse enim
                  accusantium quaerat placeat eaque aliquam delectus, officia
                  nihil debitis ducimus et corporis necessitatibus. Velit
                  quaerat expedita, dignissimos maiores nemo aliquam fuga
                  provident obcaecati optio, aspernatur magni ullam cupiditate
                  doloremque minima! Dolorum, sunt minus illo esse odit non!
                  Cupiditate exercitationem, amet autem doloremque accusantium
                  ea cum in assumenda a facilis est corporis, voluptate maxime
                  odio enim obcaecati voluptates harum sint explicabo
                  consequuntur adipisci suscipit? Quasi, eaque? Incidunt
                  maiores, numquam eveniet modi dolor dolores reiciendis.
                  Delectus est libero nemo, quae dignissimos animi quod tempore
                  cupiditate qui veritatis illum dolores optio blanditiis magni
                  rem molestiae debitis odit ullam cum. Reiciendis non,
                  perferendis temporibus eum mollitia porro enim nostrum
                  assumenda ea corporis, eaque ipsa. Quia non dolore repudiandae
                  nam. Excepturi fugit nemo consequuntur. Beatae quam qui culpa.
                  Pariatur qui ipsa deleniti. Laboriosam totam excepturi
                  asperiores explicabo ipsam, amet vitae sint, vel dolor beatae
                  omnis voluptas repellat quo ad quas. Earum nulla aliquid fugit
                  laborum quisquam illum, porro, sint nam obcaecati voluptatum
                  iste dolor fuga tempore doloribus inventore esse tempora
                  explicabo, eveniet neque? Eos laudantium expedita dolorem quia
                  incidunt perferendis exercitationem at eum rerum architecto,
                  voluptas vero impedit vitae natus beatae tenetur sit
                  repellendus aliquid quibusdam veritatis facilis! Accusantium
                  repellendus id, consequuntur hic dolore cum? Voluptatem fugit
                  id doloribus numquam explicabo quibusdam incidunt
                  necessitatibus perspiciatis doloremque eum! Explicabo ex
                  aliquid ullam est harum adipisci dolore dignissimos labore
                  nulla molestias consequuntur eos, maiores quaerat eveniet et
                  tenetur magnam distinctio obcaecati. Enim sed ex hic ut nam
                  veniam doloremque sit alias modi? Ducimus facilis odio ad,
                  fugit dolores repudiandae officia, adipisci earum nulla, modi
                  eveniet. Voluptatem quaerat culpa velit exercitationem harum
                  eius! Possimus ea aperiam, quisquam nostrum similique nisi ab
                  vero tempora dolores sunt deleniti harum inventore fugit illum
                  veritatis assumenda. Dolore dolor perspiciatis doloremque.
                  Delectus reiciendis, sunt praesentium labore, hic officiis
                  expedita porro quas repudiandae optio aliquam tempore enim
                  molestias! Odio, molestias ut. Ipsum consectetur soluta
                  molestiae est aliquam quas voluptatum doloremque voluptate
                  impedit saepe, tempora temporibus nihil quos nesciunt
                  laboriosam dicta? Ipsa, eaque. Quis magni neque iste repellat
                  optio modi adipisci nihil repudiandae quos ratione excepturi
                  animi quod fuga quam quidem illo, possimus facilis voluptas
                  amet in voluptatum! Corporis, ab quae iure ut voluptatum
                  debitis eum itaque, facilis sit ipsa odio blanditiis qui totam
                  odit neque tenetur. Impedit aut quae, laboriosam quasi
                  possimus enim accusantium pariatur totam nulla, laborum
                  necessitatibus ratione labore nemo vel in ab expedita,
                  officiis nesciunt eius fugiat. Fugit vitae harum natus
                  inventore! Omnis reprehenderit fuga repellat, culpa rem
                  nostrum assumenda beatae asperiores repudiandae cumque,
                  accusamus provident molestiae sequi. Ut iure provident quos.
                  Cumque officiis sint reprehenderit veniam ipsum distinctio
                  quae dolores adipisci, unde harum nesciunt debitis officia
                  ipsam ad vero fugiat enim dignissimos a ratione! Quam,
                  corrupti eveniet. Vero eveniet perferendis, at dolorem dolores
                  nemo sed assumenda architecto eos beatae esse fugit odit
                  nesciunt dolore, totam explicabo eaque exercitationem numquam.
                  Vitae non nulla quos mollitia at ratione laborum? Quis
                  voluptatibus, perspiciatis soluta corporis reprehenderit ipsum
                  error, incidunt nostrum harum nam odit obcaecati blanditiis
                  placeat veritatis debitis in beatae excepturi nisi sint
                  repellendus eligendi explicabo sunt similique illum. Magni
                  commodi delectus facilis veritatis alias amet quas saepe
                  quisquam expedita, sit earum maiores. Qui mollitia magnam illo
                  sequi dignissimos neque labore explicabo dolor at voluptas
                  perferendis hic voluptatem repellat corrupti repudiandae,
                  commodi accusamus sed delectus, odit deleniti, placeat modi
                  temporibus impedit maxime. Commodi minus aspernatur possimus,
                  libero culpa temporibus maxime, quod dolore accusantium qui
                  debitis eum aut, dolores sequi omnis animi quae itaque
                  reprehenderit et nesciunt in consequatur recusandae. Nam,
                  labore libero magni repellat sequi inventore ipsam dolorem
                  vero ipsum ea, nemo error aspernatur assumenda quas est
                  reprehenderit culpa fugiat laborum corporis voluptates. Maxime
                  nisi deserunt quidem animi, iusto velit ullam perferendis.
                  Quam dignissimos, quo eaque nam ad doloremque dolores ipsam et
                  perferendis fuga? Dolorem soluta obcaecati pariatur natus, ab
                  amet aliquam laborum recusandae eveniet cum impedit? Commodi
                  cupiditate, repellendus enim quasi odio esse velit ipsum
                  tenetur delectus perspiciatis exercitationem perferendis saepe
                  ea ipsam debitis temporibus? Quis dignissimos nesciunt totam
                  quas, porro consectetur facere et. Maiores laborum vero iste
                  dolor nisi molestias asperiores excepturi. Voluptatum, sunt.
                  Autem nostrum laudantium similique dignissimos. Est minima
                  eligendi, at veritatis libero quas perferendis quos dolore
                  inventore repellendus aperiam numquam optio culpa deleniti vel
                  fugiat unde aliquid ipsum mollitia. Recusandae illo hic maxime
                  ullam nisi ut pariatur perspiciatis nam quod aliquam laborum
                  iste omnis repudiandae id possimus deserunt nemo impedit
                  provident repellat sequi obcaecati, necessitatibus aut!
                  Perspiciatis tempora beatae aliquid excepturi harum expedita
                  dolor iusto amet, esse soluta rerum facere laborum sit odio.
                  Qui adipisci veritatis minima ratione facere? Maiores velit,
                  accusantium quos perferendis nisi vitae, cupiditate culpa
                  laudantium natus sit odit libero? Quod aspernatur voluptates
                  ipsa quaerat et sed amet consequuntur voluptas tempora, nobis
                  dolore molestias aliquam. Perferendis numquam sequi voluptatum
                  expedita, incidunt voluptate, officiis nostrum ad dolore modi,
                  magnam esse maiores saepe aspernatur quia enim eum nam nisi
                  ipsum et rerum accusantium. Quisquam, nam? Sit iste minus,
                  corporis commodi eaque perspiciatis suscipit voluptatem
                  exercitationem optio, esse quis delectus cum? Culpa
                  necessitatibus quaerat molestias velit a commodi itaque
                  repudiandae. Quia quas ab vero, harum aliquid modi assumenda,
                  ut inventore itaque dignissimos distinctio. Deleniti dolores
                  quia, sint hic aliquid autem id dolorum asperiores. Sunt iure
                  saepe assumenda molestiae cupiditate, voluptas veritatis quae
                  placeat praesentium optio incidunt veniam alias, voluptatem
                  autem recusandae natus vero? Quisquam animi non saepe
                  dignissimos consectetur voluptatum natus quam tenetur porro
                  maxime, iusto sapiente dolorem at aperiam suscipit magnam quod
                  quae deserunt fugiat. Perspiciatis, omnis illo! Vero deserunt
                  sequi aperiam consequuntur cum temporibus deleniti
                  necessitatibus debitis nihil explicabo ullam molestiae qui
                  nemo nisi, totam fugiat aut accusamus nulla expedita
                  similique. Enim, nostrum. Error aspernatur repellendus amet.
                  Atque dolorum porro reiciendis temporibus neque in qui quia
                  assumenda esse ex sunt voluptas vero repellat, molestias
                  dolores accusamus perspiciatis sapiente fugit fugiat suscipit
                  dolor nulla iste. Assumenda eveniet tempora architecto amet
                  numquam. Nesciunt rem molestias fugit ad nulla accusamus ullam
                  ipsa illo eum, tempore, ex ipsum. Obcaecati nesciunt sed amet
                  cupiditate fugiat reiciendis inventore ratione vel cumque,
                  pariatur adipisci iusto alias velit asperiores, soluta in
                  veritatis, dicta ullam sunt voluptates consequuntur nulla
                  vitae necessitatibus quis? Tempore esse tempora neque nisi
                  assumenda, quia possimus iure perferendis adipisci enim ipsam
                  velit culpa doloremque atque fugit rerum exercitationem,
                  corrupti blanditiis, cum quo reprehenderit dolore cupiditate
                  labore? Aperiam iste saepe, nam, magni molestiae, eligendi
                  eaque eos totam impedit dicta vitae nobis! Distinctio ducimus
                  excepturi aspernatur quis tempore minus voluptatem itaque
                  totam molestiae iure, esse vero, id in assumenda omnis hic ea
                  alias! Dolorem totam odit doloremque! Voluptatibus voluptas
                  eos ab ad quia aperiam tempora voluptate commodi deserunt
                  ducimus, veniam optio repudiandae minus rem temporibus libero
                  unde! Vero et at aspernatur placeat autem enim odit, molestias
                  rem! Nulla, minima! Nihil numquam officia ullam voluptatem,
                  debitis quaerat ducimus quis! Officiis reprehenderit vitae
                  architecto dolores, dignissimos nam nulla! Culpa voluptatibus
                  necessitatibus fuga quasi! Maiores dicta, et reiciendis
                  doloribus nam aut nulla corporis, laudantium labore quaerat
                  nesciunt quidem asperiores, maxime voluptatum voluptas
                  assumenda sapiente repudiandae est ipsam neque repellat dolor
                  obcaecati? Repellendus odit sit, explicabo sint sequi nisi
                  reiciendis! Vitae adipisci mollitia id laudantium quaerat
                  quisquam necessitatibus voluptates provident assumenda tempore
                  repellat molestias nobis veniam veritatis non modi numquam
                  quia, maxime ut pariatur recusandae! Nisi quasi impedit quam
                  architecto quis aut cupiditate, sed aliquid reprehenderit
                  porro temporibus ab, maxime quos iste corporis. Dicta,
                  consequuntur. Corporis, iste, voluptates fuga aperiam sed
                  ducimus incidunt reiciendis laboriosam fugiat magnam inventore
                  omnis neque molestias hic cumque aut voluptas nostrum
                  obcaecati perferendis, recusandae voluptatum saepe aspernatur
                  corrupti possimus. Error quis voluptate, quia fugiat soluta
                  fuga suscipit quos nisi reprehenderit ex quod natus,
                  cupiditate odio non asperiores impedit, quidem sed provident
                  eaque rem. Exercitationem saepe ipsa consequuntur cumque ex
                  sit, perspiciatis, molestias ullam eos assumenda expedita
                  veritatis vel esse nulla nemo labore, odit itaque repellendus
                  quo! Ut eveniet est vitae, asperiores sit cumque voluptate quo
                  inventore assumenda alias id in optio hic laboriosam et iure
                  vero harum quidem aut nemo possimus. Deleniti eum odit
                  quibusdam ab aliquid. Quibusdam, soluta, tempore temporibus
                  porro amet id cupiditate quos iusto dolorem quidem itaque cum
                  sapiente, nisi velit? Molestiae expedita quibusdam officiis
                  eum obcaecati sed distinctio, maiores sint exercitationem
                  facilis error adipisci! Temporibus, officiis est nemo nulla,
                  dolor velit saepe voluptate, ex ullam impedit earum? Dolorum
                  rem neque, magnam commodi quis at? Pariatur mollitia
                  accusantium esse hic perspiciatis, at eligendi! Eligendi
                  dolores eveniet alias a, accusantium vel dolorem sapiente quam
                  quia at praesentium voluptatibus. Commodi nisi rerum
                  laudantium ea reprehenderit sit voluptates eveniet non
                  perspiciatis quia magnam, eum tempore sint facilis! Similique
                  quia, officia, repellendus soluta inventore voluptatibus,
                  consequatur et voluptates numquam assumenda mollitia culpa
                  delectus magni odit modi voluptatum tempora explicabo
                  doloremque quaerat! Veniam fugit, laboriosam aut praesentium
                  odio ipsum dolore amet sunt tenetur voluptatibus, nostrum
                  repudiandae a autem reiciendis eaque. Distinctio accusamus a
                  accusantium pariatur repellat non ullam tenetur quae hic
                  laboriosam voluptatem amet fugiat blanditiis odit assumenda
                  aspernatur sed recusandae est sint, nesciunt architecto. Alias
                  ab aliquam aliquid, porro molestias dolore necessitatibus
                  autem quasi quas nostrum officiis unde et neque animi labore
                  harum aspernatur amet aut culpa ut at voluptatum eum iste!
                  Aliquid nemo, debitis reiciendis laudantium beatae ex impedit,
                  dolor labore rem hic, nisi eos facere quidem numquam
                  repellendus. Repellat, officiis alias dolores aliquam maiores
                  necessitatibus sequi. Laborum quod id autem nam, quis
                  reiciendis, possimus amet assumenda odit aut expedita tempore
                  itaque numquam enim sequi a aspernatur explicabo cum
                  distinctio unde ut. Dolorem, architecto. Iusto, laudantium nam
                  quo rerum, eius quas quia eligendi sapiente expedita accusamus
                  iste amet, repellat nihil consequatur voluptate atque vel
                  praesentium quibusdam numquam! Ut provident rerum dicta eum
                  accusamus molestias fuga consequuntur autem quia nostrum
                  excepturi nisi voluptatem illum repellendus vero, rem incidunt
                  temporibus ducimus odit laudantium voluptatibus dolor non
                  veritatis? Eum nemo eligendi voluptatem rerum repudiandae
                  amet. Facere animi voluptates eum sunt, dolore enim libero
                  excepturi consectetur aut, aliquid a consequatur temporibus!
                  Assumenda hic ducimus nihil eum ut quaerat quasi, architecto
                  ex tenetur sed ad delectus consequuntur voluptatem deleniti
                  reprehenderit nemo nobis harum cum cupiditate, nisi
                  dignissimos deserunt! Aut sint animi numquam accusantium.
                  Eligendi odio blanditiis doloremque, ipsam atque, cumque totam
                  repudiandae ullam delectus quisquam veritatis saepe? Hic, id
                  repellendus? Nisi vel commodi nulla aliquam? Eligendi
                  inventore asperiores deleniti debitis repellendus, error
                  voluptas dolor commodi nobis ab nesciunt, laborum tempore
                  consequuntur illum ut ullam quisquam neque, cupiditate
                  reprehenderit quam cumque! Aspernatur alias tempore
                  perspiciatis inventore. Assumenda quos amet error ratione
                  accusantium facere sequi animi quibusdam provident voluptates
                  voluptatum rem rerum corporis veritatis adipisci harum in
                  obcaecati suscipit eveniet, facilis autem. Consequatur eos
                  debitis natus corrupti quidem aperiam dolores exercitationem
                  perspiciatis! Eligendi, ratione repellat sed aliquid
                  praesentium delectus itaque distinctio deserunt quo harum quos
                  dicta tenetur similique, nulla voluptatibus magnam assumenda
                  animi numquam eum nihil facilis non eos aut eveniet. Cum dolor
                  eos molestiae iste. Distinctio iusto sapiente explicabo
                  laboriosam rem iste officia impedit quis quia omnis in vero
                  ipsam aut maiores, nisi, sequi, reiciendis unde? Sequi
                  officiis esse cumque amet voluptates autem, dolorem vero nihil
                  aspernatur ea a ipsam expedita pariatur suscipit minima
                  mollitia. Autem provident modi impedit fugiat hic odit enim
                  alias iure velit quis rerum quod molestias ab distinctio, quae
                  culpa aliquam, harum quia ipsam. Incidunt repellendus quas
                  accusamus, harum odio sit, iusto, velit perspiciatis nulla
                  illo impedit ipsum id aliquid unde laborum autem modi atque
                  inventore ex? Sint expedita nostrum iste! Dolorem est possimus
                  sapiente modi? Necessitatibus nam earum animi molestias omnis
                  voluptatum facilis nostrum, sequi, modi harum vero iste maxime
                  ipsum? Ipsum sunt cumque modi eius hic beatae rem, nulla quae
                  debitis vitae velit inventore nobis veritatis sit, alias
                  ratione! A iste possimus, ratione quasi quis, voluptatem
                  delectus omnis eveniet dolorum repellat odit doloremque saepe
                  expedita rerum quae consequuntur perferendis officiis tempora
                  nulla labore praesentium alias rem ea. Iusto aperiam, tempore
                  eveniet in ex maiores. Ratione, soluta? Non, earum ducimus
                  iste eligendi aut fuga temporibus ut repellendus enim. Debitis
                  ratione consequuntur sequi sapiente eveniet qui, laudantium
                  fugit corporis officia eligendi incidunt consectetur alias
                  aperiam odit doloremque hic sit velit aliquid animi
                  perspiciatis? Ratione cum praesentium corporis, obcaecati
                  deleniti placeat eaque ea voluptas voluptate aspernatur
                  dignissimos adipisci quod numquam impedit unde est quas
                  corrupti. Eaque quibusdam, cumque expedita necessitatibus at
                  deleniti fugiat architecto sunt veniam aperiam enim hic
                  eveniet adipisci ullam quasi in atque laboriosam? Quia, saepe!
                  Omnis, ad? Fugiat nam mollitia necessitatibus quaerat, dolorem
                  ipsum voluptas, reiciendis sequi, asperiores nemo quia
                  blanditiis! Accusantium, quaerat quidem. Officia facilis
                  magnam error assumenda repellendus non quis quidem esse quam
                  in exercitationem ducimus recusandae, dolorem rem. Quasi harum
                  alias enim molestias, dolores facilis culpa dolorum commodi
                  tenetur velit atque! Architecto unde rerum quam, aperiam
                  temporibus doloremque dolorem dolore aut quos reiciendis ab
                  libero praesentium a maxime, deserunt atque incidunt! Eligendi
                  molestias ad eaque velit saepe minus possimus, earum, unde
                  dolorum inventore maiores expedita. Consectetur libero neque
                  facere beatae nam iure! Qui, consequatur magnam eos error
                  culpa commodi necessitatibus, molestiae iste ut facere tenetur
                  voluptate autem voluptas eaque, rem laboriosam! Excepturi nam
                  nesciunt molestiae atque id architecto. Reprehenderit, modi
                  provident ab aspernatur explicabo molestias, architecto
                  voluptatibus obcaecati praesentium voluptas, aliquam
                  similique? Impedit temporibus facere vel dolore, quia voluptas
                  maiores maxime facilis at perspiciatis magnam quisquam totam,
                  placeat commodi. Architecto hic saepe voluptatum, vero,
                  laborum inventore assumenda alias excepturi quisquam illo
                  aspernatur neque eius sapiente! Ea accusamus non maxime dolore
                  nobis consequatur! Sint neque dicta perspiciatis mollitia,
                  commodi placeat libero.
                </div>
                <Review company={company}></Review>
              </div>
              <div className="col-span-1 bg-slate-300/10 p-4 hidden md:flex flex-col items-center justify-start gap-2 h-min sticky top-20">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-full border border-black object-cover"
                />
                <Heading>{company.name}</Heading>
                <p>{company.location}</p>
                <a href={company.website} className="text-blue-400">
                  {company.website}
                </a>
                <p>Email:{company.email}</p>
                <p>Phone: {company.phoneNumber}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ServiceIdPage;
