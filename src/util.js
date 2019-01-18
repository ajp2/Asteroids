const Util = {
  inherits(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass);
    childClass.prototype.constructor = childClass;
  }
}

module.exports = Util;