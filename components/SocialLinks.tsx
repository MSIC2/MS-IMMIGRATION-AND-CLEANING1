import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

export default function SocialLinks(){
  return(
    <div className="flex items-center gap-4">
      <Link
        href="#"
        className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary duration-300">
        <Facebook size={18}/>
      </Link>
      <Link
        href="#"
        className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary duration-300">
        <Instagram size={18}/>
      </Link>
      <Link
        href="#"
        className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary duration-300">
        <Linkedin size={18}/>
      </Link>
    </div>
  );
}