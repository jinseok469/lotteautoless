import Image from "next/image";
import body from "/assets/body.png";
import { useEffect } from "react";

export default function Body() {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);
        return () => document.removeEventListener('contextmenu', handleContextMenu);
      }, []);
    
  return (
    <div>
    <Image src={body} alt="body" width={420} height={4269.33} />
    </div>
  );
}