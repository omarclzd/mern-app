export function getAdvice() {
  // const endPoint = "https://api.adviceslip.com/advice";
  // const endPoint = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const endPoint = "https://ergast.com/api/f1/2019/last/results.json";
  return fetch(endPoint, { mode: "cors" }).then(res => res.json());
}
