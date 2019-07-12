export function getAdvice() {
  const endPoint = "https://api.adviceslip.com/advice";
  return fetch(endPoint, { mode: "cors" }).then(res => res.json());
}
