import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_SUPABASE_URL: z.string().min(1, "Supabase url not found!"),
  EXPO_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "Supabase anon key not found!"),
});

export default envSchema.parse(process.env);
