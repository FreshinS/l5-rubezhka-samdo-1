export default class ArrayValidator {
  allIntegers() {
    this.intCheck = true;
    return this;
  }

  custom(cb) {
    this.customCallBack = cb;
    return this;
  }

  isCustomValid(array) {
    if (!this.customCallBack) return true;
    return array.every(this.customCallBack);
  }

  isAllIntegers(array) {
    if (!this.intCheck) return true;
    return array.reduce((acc, i) => acc && Number.isInteger(i), true);
  }

  isValid(array) {
    return Array.isArray(array) && this.isAllIntegers(array) && this.isCustomValid(array);
  }
}
