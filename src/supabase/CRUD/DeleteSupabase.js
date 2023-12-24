/** @format */
import { toast } from "react-toastify";
import { supabase } from "../SupabaseClient";
const DeleteSupabese = async (email) => {
	try {
		const { data, error } = await supabase
			.from("JSON_WRB_TOKENS")
			.delete()
			.eq("email", email);
		return data;
	} catch (error) {
		toast.error(error.message);
	}
};

export default DeleteSupabese;
