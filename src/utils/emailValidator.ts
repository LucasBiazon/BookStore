const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{1,}){1}$/;
const domainRegex = /^(?!.*\.\.)(?!.*\.-)(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/

export function emailValidator(email:string): boolean{
  if (!emailRegex.test(email)) {
    return false;
  }

  const domain = email.split('@')[1];
  return domainRegex.test(domain);
}
