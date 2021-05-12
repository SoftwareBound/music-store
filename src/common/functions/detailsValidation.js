export function isNameValid(name) {
  if (!name || name.length > 30) {
    return false;
  }
  return true;
}

export function isDescriptionValid(description) {
  return description.length > 200 ? false : true;
}

export function isPriceValid(price) {
  return price > 0 ? true : false;
}

export function isDateValid(date) {}
