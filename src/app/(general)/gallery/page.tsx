import Heading from "@/components/Heading";

const GalleryPage = () => {
  return (
    <section className="py-10 px-10 flex items-center justify-center flex-col gap-4 h-full w-full">
      <Heading>Gallery</Heading>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4 ">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-4 ">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full group-hover:scale-110 duration-300 transition-all ease-in-out transition-transform "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">hello</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
