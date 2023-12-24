/** @format */
import { toast } from "react-toastify";

export function isUndefined(value, setValue) {
	if (value === undefined) {
		return true;
	}
}
export function isNull(value) {
	if (value === null) {
		return true;
	}
}
export function isEmpty(value) {
	if (value === "") {
		return true;
	}
}
export function isValidEmail(value) {
	return String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
}
export function isValidPasswordLength(value) {
	if ((value.toString().length) >= 8) {
		return true;
	}
}
export function isValidPasswordConfirmation(password, passwordConfirmation) {
	if (password === passwordConfirmation) {
		return true;
	}
}

export function formValidation(
	value,
	setValue,
	name,
	checkEmail = false,
	checkPassword = false,
	password_c = null,
) {
	let permission = true;
	if (value === undefined) {
		toast.warning(`فیلد ${name} الزامی است `);
		setValue(null);
		permission = false;
	}
	if (value === null) {
		toast.warning(`فیلد ${name} الزامی است `);
		permission = false;
	}
	if (value === "") {
		toast.warning(`فیلد ${name} الزامی است `);
		permission = false;
	}
	if (checkEmail && !isNull(value) && !isUndefined(value) && !isEmpty(value)) {
		if (!isValidEmail(value)) {
			toast.warning("فرمت ایمیل صحیح نمیباشد.");
			permission = false;
		}
	}
	if (
		checkPassword &&
		!isNull(value) &&
		!isUndefined(value) &&
		!isEmpty(value)
	) {
		if (!isValidPasswordLength(value)) {
			toast.warning("رمز عبور باید حداقل شامل ۸ کاراکتر باشد.");
			permission = false;
		}
	}
	if (
		password_c !== null &&
		!isNull(value) &&
		!isUndefined(value) &&
		!isEmpty(value)
	) {
		if (!isValidPasswordConfirmation(value, password_c)) {
			toast.warning("رمز عبور با تکرار آن مطابقت ندارد.");
			permission = false;
		}
	}
	return permission;
}
