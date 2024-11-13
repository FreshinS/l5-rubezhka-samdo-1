export default class ObjectValidator {
  shape(props) {
    this.options = { ...props };
    return this;
  }

  isValid(obj) {
    return Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (key !== 'num' && key !== 'array') {
          const newValidator = (new ObjectValidator()).shape(this.options[key]);
          return acc && newValidator.isValid(value);
        }
        return acc && this.options[key].isValid(value);
      }, true);
  }
}
