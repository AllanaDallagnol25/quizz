const nomes = [, "Vinicius", "Caique", "Allana", "Thalia", "Otávio"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)


