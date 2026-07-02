interface Props{
  title:string;
}

export default function Badge({
  title
}:Props){
  return(
    <span className="inline-flex px-5 py-2 rounded-full bg-secondary/10 text-secondary font-semibold tracking-wide">
      {title}
    </span>
  );
}