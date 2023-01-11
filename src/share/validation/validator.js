const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';

const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_NUNBER = 'NUMBER';
const VALIDATOR_ISRAELI_ID_TYPE = 'ID';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });

export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_NUNBER = () => ({ type: VALIDATOR_TYPE_NUNBER });
export const VALIDATOR_ISRAELI_ID = () => ({ type: VALIDATOR_ISRAELI_ID_TYPE });
export const isValidIsraeliID = (id)=> {

  let strId = String(id).trim();
    if (strId.length > 9) {

        return false;
    }
    if (strId.length < 9) {
        while (strId.length < 9) strId = "0" + strId;
    }
    let counter = 0, rawVal, actualVal;
    for (let i = 0; i < strId.length; i++) {
        rawVal = Number(strId[i]) * ((i % 2) + 1);
        actualVal = rawVal > 9 ? (rawVal - 9) : rawVal;
        counter += actualVal;
    }

    console.log(counter % 10 === 0);
    if(counter >2){

      return (counter % 10 === 0);
     
    }
   return false;
}

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
   
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_NUNBER) {
      isValid = isValid && /^\d+$/.test(value) ;
    }
    if (validator.type === VALIDATOR_ISRAELI_ID_TYPE) {
      isValid = isValid && isValidIsraeliID(value) ;
    }
   
  }
  return isValid;
};
