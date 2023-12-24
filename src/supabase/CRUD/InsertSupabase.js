/** @format */
import { toast } from "react-toastify";
import { supabase } from "../SupabaseClient";
import ReadSupabase from "./ReadSupabase";
import UpdateSupabase from "./UpdateSupabase";

const InsertSupabase = async (userEmail, token, userName) => {

	try {
		const users = await ReadSupabase(userEmail);
		
		if(users.length === 0){
			const { data, error } = await supabase
				.from("JSON_WRB_TOKENS")
				.insert({
					JWT: token,
					email: userEmail,
					name: userName,
				})
				.single();
			
				return data;
		}else{
			UpdateSupabase(userEmail, token);
		}

	} catch (error) {
		toast.error(error.message);
	}
};

export default InsertSupabase;
