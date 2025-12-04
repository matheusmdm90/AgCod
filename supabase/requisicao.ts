import { supabase } from "./supabseCliebt";

export const fazerLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export const fazerCadastro = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { data: { name } },
  });
  return { data, error };
};

export const fazerCadastroApp = async ({
  nome,
  telefone,
  email,

  cidade,
  estado,
  data_nasc,
  user,
}: {
  nome: string;
  telefone: string;
  email: string;

  data_nasc: string;

  cidade: string;
  estado: string;
  cep: string;
  user: any;
}) => {
  const { data: usuarioApp, error: erroApp } = await supabase
    .from("usuarios")
    .insert([
      {
        user_id: user?.id,
        nome: nome,
        email: email,
        telefone: telefone,
        date_nasc: data_nasc,

        cidade: cidade,
        estado: estado,
      },
    ]);
  return { usuarioApp, erroApp };
};

export const fazerCadastroEmpresa = async ({
  nomeEmpresa,
  cnpj,
  telefone,
  email,
  tipoestetica,
  assinatura,
  endereco,
  cidade,
  estado,
  cep,
  user,
}: {
  nomeEmpresa: string;
  cnpj: string;
  telefone: string;
  email: string;
  confirmEmail: string;
  tipoestetica: string;
  assinatura: string;
  password: string;
  confirmPassword: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  user: any;
}) => {
  const { data, error } = await supabase.from("empresas").insert([
    {
      user_id: user?.id,
      nome: nomeEmpresa,
      cnpj: cnpj,
      email: email,
      telefone: telefone,
      tipo_estetica: tipoestetica,
      assinatura: assinatura,
      cep: cep,
      endereco: endereco,
      cidade: cidade,
      estado: estado,
    },
  ]);
  return { data, error };
};

export const planoUser = async ({ user }: { user: any; empresa: any }) => {
  const { data: empresa, error } = await supabase
    .from("empresas")
    .select("*")
    .eq("user_id", user?.id);
  return { empresa, error };
};

export const enviarImagem = async ({ img }: { img: File }) => {
  const nomeUnico = `${Date.now()}-${img.name}`;
  const { data, error } = await supabase.storage
    .from("imagens")
    .upload(nomeUnico, img);

  if (error || !data) {
    console.error("Erro ao enviar imagem:", error);
    return { error, url: null };
  }

  const { data: urlData } = supabase.storage
    .from("imagens")
    .getPublicUrl(nomeUnico);

  return { error: null, url: urlData?.publicUrl || null };
};

export const criarFuncionario = async ({
  nome,
  email,
  telefone,
  foto_url,
  empresa_id,
}: {
  nome: string;
  email: string;
  telefone: string;
  foto_url: string | null;
  empresa_id: number | null;
}) => {
  const { data, error: erroaoCadastrar } = await supabase
    .from("funcionarios")
    .insert([
      {
        nome: nome,
        email: email,
        telefone: telefone,
        foto_url: foto_url,
        empresa_id: empresa_id,
      },
    ]);
  return { data, erroaoCadastrar };
};

export const listarFuncionarios = async ({
  empresa_id,
}: {
  empresa_id: number | null;
}) => {
  const { data: funcionarios, error } = await supabase
    .from("funcionarios")
    .select("*")
    .eq("empresa_id", empresa_id)
    .limit(100);

  return { funcionarios, error };
};
