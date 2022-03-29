import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import work from "./documents/work";

import meta from "./objects/meta";
import mainImage from "./objects/main_image";
import empty from "./objects/empty";
import startpageImage from "./objects/startpage_image";
import blockText from "./objects/block_text";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    work,

    meta,
    mainImage,
    empty,
    startpageImage,
    blockText,
  ]),
});
