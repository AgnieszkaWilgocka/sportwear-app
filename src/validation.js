export function emailIsValid(email) {

    return email.includes('@') || email.length > 1;
}

export function isNotEmpty(value) {
    return value.trim() !== " ";
}

export function hasMinLength(value, minLength) {
    return value.length >= minLength;
}