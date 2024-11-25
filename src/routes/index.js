import ClienteRoute from "./ClienteRoute";
import SessaoRoute from "./SessaoRoute";

export default function (app) {
  ClienteRoute(app);
  SessaoRoute(app);
}