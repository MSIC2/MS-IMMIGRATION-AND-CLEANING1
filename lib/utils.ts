export function formatPhone(phone:string){
  return phone.replace(
    /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5"
  );
}

export function currentYear(){
  return new Date().getFullYear();
}

export function truncate(
  text:string,
  length:number
){
  if(text.length<=length){
    return text;
  }
  return text.substring(0,length)+"...";
}