import { SupabaseClient } from "@supabase/supabase-js";

export async function uploadImage(
  supabase: SupabaseClient,
  uri: string,
  mimeType: string = "image/jpeg",
) {
  const arraybuffer = await fetch(uri).then((res) => res.arrayBuffer());

  const fileExt = uri?.split(".").pop()?.toLowerCase() ?? "jpeg";
  const path = `${Date.now()}.${fileExt}`;

  const { data, error: uploadError } = await supabase.storage
    .from("images")
    .upload(path, arraybuffer, {
      contentType: mimeType,
    });

  if (uploadError) {
    console.log("Error uploading image:", uploadError);
    throw uploadError;
  }
  console.log("Image uploaded successfully:", data.path);
  return data.path;
}
