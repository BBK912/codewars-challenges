// url: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
  let str = this instanceof String ? this.toString() : '';
  return str.split(/\s+/)
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' ')
};
