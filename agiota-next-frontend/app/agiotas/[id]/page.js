import Link from "next/link";
import { carregarAgiota } from "@/app/lib/funcoes";

export default async function FindAgiota({params}) {
    const agiota = await carregarAgiota(params.id);
      return (
        <main className="flex flex-col items-center">
            <h1>Cliente {params.id}</h1>
            <p>Nome: {agiota.nome}</p>
            <h1>Login {agiota.login.id}</h1>
            <p>Email: {agiota.login.email}</p>
            <p>Senha: {agiota.login.senha}</p>
            <h1>Endereço {agiota.endereco.id}</h1>
            <p>CEP: {agiota.endereco.cep}</p>
            <p>Número: {agiota.endereco.numero}</p>
            <p>Rua: {agiota.endereco.rua}</p>
            <p>Bairro: {agiota.endereco.bairro}</p>
            <p>Cidade: {agiota.endereco.cidade}</p>
            <p>Estado: {agiota.endereco.estado}</p>
            <Link href="#">Cadastrar Empréstimo</Link>
            <Link href="#">Ver Empréstimos</Link>
            <Link href="#">Atualizar</Link>
            <Link href="#">Apagar</Link>
        </main>
      );
}