// eslint-disable-next-line no-unused-vars
import { NumberUtil, StringUtil } from "./type.util";
export default {
  prase_width(width) {
    if (NumberUtil.is_number(width)) {
      return { number: width, postfix: "px" };
    }
    // if(StringUtil.is_string(width)){

    // }
  }
};
