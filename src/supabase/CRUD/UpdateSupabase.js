/** @format */

import { toast } from "react-toastify";
import { supabase } from "../SupabaseClient";
const UpdateSupabase = async (email, token) => {
	try {
		const { data, error } = await supabase
			.from("JSON_WRB_TOKENS")
			.update({
                JWT: token
            })
			.eq("email", email);

		return data;
	} catch (error) {
		toast.error(error.message);
	}
};

export default UpdateSupabase;