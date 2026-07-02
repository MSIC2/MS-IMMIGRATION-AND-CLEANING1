interface Props{
  children:React.ReactNode;
  className?:string;
}

export default function Section({
  children,
  className=""
}:Props){
  return(
    <section className={`py-28 ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}