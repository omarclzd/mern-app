export function getAdvice() {
  const endPoint = "https://ergast.com/api/f1/2019/last/results.json";
  return fetch(endPoint, { mode: "cors" }).then(res => res.json());
}
