import Image from "next/image";
import nextImage from "../../assets/kenny-eliason-kdwahpWYfQo-unsplash.jpg";
const Gallery = () => {
  return (
    <div>
      <h1>normal html image</h1>
      <img
        src="https://png.pngtree.com/png-clipart/20210225/ourmid/pngtree-wooden-stick-wooden-machete-rectangular-cricket-bat-clipart-png-image_2957555.jpg"
        alt="home-image"
        className="mx-auto w-[500px] h-[500px] mt-10"
      />
      <h1>next js image component</h1>
      <Image
        src="https://png.pngtree.com/png-clipart/20210225/ourmid/pngtree-wooden-stick-wooden-machete-rectangular-cricket-bat-clipart-png-image_2957555.jpg"
        alt="next-home-img"
        height={500}
        width={500}
        className="mx-auto mt-5"
      ></Image>
      <h1>next js image component 2</h1>
      <Image
        src="https://png.pngtree.com/png-clipart/20210225/ourmid/pngtree-wooden-stick-wooden-machete-rectangular-cricket-bat-clipart-png-image_2957555.jpg"
        alt="next-home-img"
        height={500}
        width={500}
        className="mx-auto mt-5"
      ></Image>
      <h1>local image</h1>
      <Image
        src={nextImage}
        alt="next-home-img"
        height={500}
        width={500}
        className="mx-auto mt-5"
      ></Image>
    </div>
  );
};

export default Gallery;
