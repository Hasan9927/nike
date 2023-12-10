import Button from '../Components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red"> Super Quality</span>{' '}
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfont and style, our meticulously crafted fottwear
          is designed to elevate your expreience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details"></Button>
        </div>
      </div>
      <div className="flex-1  flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
