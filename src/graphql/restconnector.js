import { getFakeData } from "./mockdata";

export default class RestConnector {
  //You should call your real api here!!
  get(path) {
    return getFakeData(path);
  }
}
