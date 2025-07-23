"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export default async function register(FormData: FormData) {
    const name = FormData.get('name');
    const email = FormData.get('email');
    const password = FormData.get('password');
    
    console.log("data from FormData",name,"-",email,"-",password);

    const cookie = cookies();
    const supabase = await createClient();


    const { data, error } = await supabase.from('users').insert([
        {
            name: name,
            email: email,
            password: password
        },
    ]).select()

    if (error) {
        return console.log("register error" , error);
    }

    console.log("register success",data);
}