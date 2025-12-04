import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://huzvrahvaspztsudshcy.supabase.co"; // Substitua pelo seu URL do Supabase
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1enZyYWh2YXNwenRzdWRzaGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjU0NTEsImV4cCI6MjA2NzEwMTQ1MX0.HsZtaeLpsge9DeAVK9fbwr0SU6W0nYs5XXqJWdo2bHo"; // Substitua pela sua chave anon do Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
