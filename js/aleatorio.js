const nomes = ["Zorg", "Xylar", "Kael", "Lyra", "Rix", "Nova", "Orion"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)


