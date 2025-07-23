"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from 'uuid';

export default async function register(FormData: FormData) {
    const name = FormData.get('name');
    const email = FormData.get('email');
    const password = FormData.get('password');
    const avatar_url = FormData.get('avatar_url') as File;
    const file_uuid_name = uuidv4();
    
    console.log("data from FormData",name,"-",email,"-",password,"-",avatar_url);

    const cookie = cookies();
    const supabase = await createClient();


    const { error: uploadError } = await supabase.storage.from('attachments').upload(file_uuid_name, avatar_url)
    if (uploadError) {
        return console.log("Upload error" , uploadError.message);
    }
    const Picture_url = supabase.storage.from('attachments').getPublicUrl(file_uuid_name)
    console.log("upload success",Picture_url.data.publicUrl);
    const { data, error: insertError } = await supabase.from('users').insert([
        {
            name: name,
            email: email,
            password: password,
            avatar_url: Picture_url.data.publicUrl
        },
    ]).select()

    if (insertError) {
        return console.log("register error" , insertError.message);
    }

    console.log("register success",data);
}