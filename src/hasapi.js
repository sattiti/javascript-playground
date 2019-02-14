// sessionStorage support oor not.
let hasAPI = (api)=>{
  return ((typeof api !== undefined) && (window[API] !== null)) ? true : false;
}
