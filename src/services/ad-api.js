export function getAdvice() {
  // const endPoint = "https://api.adviceslip.com/advice";
  const endPoint = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  return fetch(endPoint, { mode: "cors" }).then(res => res.json());
}
