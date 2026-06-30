import Link from "next/link";

interface Props{
  title:string;
  href:string;
  primary?:boolean;
}

export default function Button({
  title,
  href,
  primary=true
}:Props){
  return(
    <Link
      href={href}
      className={`btn ${primary?"btn-primary":"btn-secondary"}`}>
      {title}
    </Link>
  );
}