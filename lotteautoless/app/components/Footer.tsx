import footer from "/assets/footer.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <Image src={footer} alt="footer" width={430} height={1500} />
        </div>
    )
}

export default Footer;