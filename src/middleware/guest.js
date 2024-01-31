export default function guest({ next, store }) {
  if (localStorage.activeUser) {
    return next({ name: "home" });
  }
  return next();
}
