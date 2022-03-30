import S from "@sanity/desk-tool/structure-builder";

import { Work } from "./work";
import { CV } from "./cv";

const structure = () => S.list().title("Content").items([Work, CV]);

export default structure;
