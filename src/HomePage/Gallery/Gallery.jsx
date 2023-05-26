import Marquee from "react-fast-marquee";
import galleryImg from '../../assets/images/gallery_img.jpg'
import galleryImg1 from '../../assets/images/gallery_img (1).jpg'
import galleryImg2 from '../../assets/images/gallery_img (2).jpg'
import galleryImg3 from '../../assets/images/gallery_img (3).jpg'
import galleryImg4 from '../../assets/images/gallery_img (4).jpg'
import galleryImg5 from '../../assets/images/gallery_img (5).jpg'
import galleryImg6 from '../../assets/images/gallery_img (6).jpg'
import galleryImg7 from '../../assets/images/gallery_img (7).jpg'
const Gallery = () => {
    return (
        <div data-aos="zoom-in-down" data-aos-delay="110" data-aos-duration="2300" className="mb-44">
            <div className="md:flex hidden mt-20 overflow-hidden ">
                <Marquee speed={54} pauseOnHover='true' direction="up">
                    <img className="w-96" src={galleryImg} alt="" />
                    <img className="w-96" src={galleryImg1} alt="" />
                </Marquee>
                <Marquee speed={54} pauseOnHover='true' direction="down">
                    <img className="w-96" src={galleryImg5} alt="" />
                    <img className="w-96" src={galleryImg6} alt="" />
                    <img className="w-96" src={galleryImg7} alt="" />
                </Marquee>
                <Marquee speed={54} pauseOnHover='true' direction="up">
                    <img className="w-96" src={galleryImg2} alt="" />
                    <img className="w-96" src={galleryImg3} alt="" />
                    <img className="w-96" src={galleryImg4} alt="" />
                </Marquee>
            </div>
            <div className="md:hidden mt-20 overflow-hidden">
                <Marquee speed={54} pauseOnHover='true' direction="left">
                    <img className="w-96" src={galleryImg} alt="" />
                    <img className="w-96" src={galleryImg1} alt="" />
                </Marquee>
                <Marquee speed={54} pauseOnHover='true' direction="right">
                    <img className="w-96" src={galleryImg5} alt="" />
                    <img className="w-96" src={galleryImg6} alt="" />
                    <img className="w-96" src={galleryImg7} alt="" />
                </Marquee>
                <Marquee speed={54} pauseOnHover='true' direction="left">
                    <img className="w-96" src={galleryImg2} alt="" />
                    <img className="w-96" src={galleryImg3} alt="" />
                    <img className="w-96" src={galleryImg4} alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;