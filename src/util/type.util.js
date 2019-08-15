export default {
  NumberUtil() {
    const number_util = {
      is_number(num) {
        if (Object.prototype.toString.call(num) === "[object Number]") {
          return true;
        }
        return false;
      },
      not_number(num) {
        return !number_util.is_number(num);
      }
    };
    return number_util;
  },
  StringUtil() {
    const string_util = {
      is_string(num) {
        if (Object.prototype.toString.call(num) === "[object String]") {
          return true;
        }
        return false;
      },
      not_string(num) {
        return !string_util.is_string(num);
      }
    };
    return string_util;
  }
};
