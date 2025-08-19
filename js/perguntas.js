export const perguntas = [
    {
        enunciado: "Ao terminar os estudos, você se vê diante da grande questão: qual será o próximo passo da sua vida?",
        alternativas: [
            {
                texto: "Seguir diretamente para a faculdade.",
                afirmacao: [
                    "Você decidiu investir em conhecimento e dar continuidade aos estudos, acreditando que a base acadêmica será um diferencial para conquistar boas oportunidades no futuro.",
                    "Mesmo sabendo que a jornada não será fácil, entende que se dedicar a uma área específica permitirá que você se aprofunde em um tema e construa uma carreira sólida e respeitada.",
                    "Percebe também que a vida universitária pode abrir portas não apenas para o mercado de trabalho, mas também para amizades, experiências e aprendizados que vão muito além da sala de aula."
                ],
                proxima: 1,
            },
            {
                texto: "Dar um tempo e começar a trabalhar.",
                afirmacao: [
                    "Você prefere colocar os pés na realidade prática antes de mergulhar novamente em livros e provas.",
                    "Decidiu que ganhar experiência no mercado de trabalho pode ensinar tanto quanto a sala de aula, além de permitir maior independência financeira.",
                    "Apesar dos desafios, acredita que começar a trabalhar cedo ajudará a amadurecer, lidar com responsabilidades e até clarear quais caminhos profissionais seguir no futuro."
                ],
                proxima: 2, // este agora leva para uma nova pergunta antes de casar
            },
        ]
    },
    {
        enunciado: "Alguns anos depois, você começa a refletir sobre relacionamentos e família. O que pensa sobre casar?",
        alternativas: [
            {
                texto: "Casar e construir uma família.",
                afirmacao: [
                    "Você acredita que dividir a vida com alguém é uma das maiores fontes de alegria e segurança que uma pessoa pode ter.",
                    "Na sua visão, o casamento representa parceria, cumplicidade e a chance de enfrentar as dificuldades de forma conjunta.",
                    "Para você, formar uma família significa não apenas construir laços afetivos, mas também deixar um legado, transmitindo valores, sonhos e tradições às próximas gerações."
                ],
                proxima: 3,
            },
            {
                texto: "Não casar, mas viver relacionamentos livres.",
                afirmacao: [
                    "Você prefere a liberdade de experimentar diferentes fases da vida sem se prender a compromissos formais.",
                    "Acredita que relacionamentos podem ser profundos e significativos mesmo sem a necessidade de um papel ou uma cerimônia.",
                    "Para você, a verdadeira felicidade está em viver o presente de maneira autêntica, aproveitando as conexões sem se sentir limitado por padrões sociais."
                ],
                proxima: 4, // vai para uma nova pergunta exclusiva
            },
        ]
    },
    {
        enunciado: "Você decidiu começar a trabalhar cedo. Como deseja guiar sua vida profissional?",
        alternativas: [
            {
                texto: "Focar em estabilidade e crescer dentro da empresa.",
                afirmacao: [
                    "Você valoriza segurança e acredita que o crescimento passo a passo dentro de uma empresa é uma forma sólida de construir sua carreira.",
                    "Ter um emprego fixo oferece tranquilidade para planejar o futuro com mais segurança.",
                    "Mesmo que isso signifique abrir mão de aventuras, você sente que consistência pode levar ao sucesso a longo prazo."
                ],
                proxima: 3, // vai para o fluxo do casamento
            },
            {
                texto: "Experimentar diferentes áreas e buscar liberdade.",
                afirmacao: [
                    "Você acredita que a vida profissional deve ser explorada sem pressa, testando diferentes caminhos.",
                    "Mesmo que a estabilidade demore a chegar, você valoriza o aprendizado que cada nova experiência pode trazer.",
                    "A variedade de vivências é, para você, um investimento em autoconhecimento e independência."
                ],
                proxima: 3, // também segue para o casamento
            },
        ]
    },
    {
        enunciado: "Ao pensar sobre filhos, qual decisão toma?",
        alternativas: [
            {
                texto: "Ter filhos e dedicar-se a educá-los.",
                afirmacao: [
                    "Você enxerga os filhos como uma oportunidade de perpetuar sua história e passar adiante seus ensinamentos.",
                    "Embora saiba que criar uma criança exige paciência, renúncia e muito esforço, acredita que o amor recebido em troca compensa qualquer dificuldade.",
                    "Na sua visão, educar os filhos não é apenas prover, mas também guiar, inspirar e preparar alguém para enfrentar o mundo."
                ],
                proxima: 6,
            },
            {
                texto: "Não ter filhos, focando em outras realizações.",
                afirmacao: [
                    "Você compreende que a vida oferece muitas formas de realização, e ter filhos não precisa ser a única delas.",
                    "Prefere investir tempo e energia em projetos pessoais, viagens, amizades, carreira ou até mesmo em causas sociais que lhe tragam propósito.",
                    "Na sua visão, felicidade é algo individual e pode ser encontrada tanto no cuidado com outras pessoas quanto na busca por sonhos pessoais."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você optou por viver relacionamentos livres. Em certo momento, surge a reflexão: como deseja conduzir sua vida emocional?",
        alternativas: [
            {
                texto: "Construir uma rede de amigos que funcione como família escolhida.",
                afirmacao: [
                    "Você acredita que família não é apenas sangue, mas sim os laços que criamos ao longo da vida.",
                    "Amizades profundas e sinceras são, para você, a verdadeira base de apoio e felicidade.",
                    "Essa visão amplia sua ideia de pertencimento, permitindo sentir-se completo mesmo sem seguir modelos tradicionais."
                ],
                proxima: 3, // segue para filhos
            },
            {
                texto: "Priorizar conquistas pessoais e manter independência.",
                afirmacao: [
                    "Você acredita que seu crescimento individual é prioridade.",
                    "Prefere manter o foco em experiências próprias, descobertas e realizações sem depender de vínculos afetivos fixos.",
                    "Para você, felicidade é viver intensamente cada momento sem amarras."
                ],
                proxima: 6, // leva para final
            },
        ]
    },
    {
        enunciado: "Depois de todas essas escolhas, você olha para trás e pensa: o que realmente importa?",
        alternativas: [
            {
                texto: "Ter construído laços fortes com pessoas que ama.",
                afirmacao: [
                    "Ao refletir sobre sua vida, percebe que nenhum sucesso profissional ou conquista material teve mais valor do que as conexões humanas.",
                    "Entende que os momentos de afeto, apoio e convivência com família e amigos foram os que realmente marcaram sua trajetória.",
                    "Para você, o verdadeiro sentido da vida está no amor compartilhado e nas lembranças criadas ao lado de quem esteve ao seu lado."
                ],
            },
            {
                texto: "Ter seguido seus próprios sonhos sem se prender às expectativas.",
                afirmacao: [
                    "Ao olhar para trás, sente orgulho por não ter vivido a vida que os outros esperavam de você, mas sim a vida que realmente desejava.",
                    "Mesmo diante de críticas ou julgamentos, manteve-se fiel aos seus valores e buscou experiências que refletissem sua essência.",
                    "Para você, a liberdade de ser quem realmente é foi a sua maior conquista, provando que felicidade está em viver sua própria verdade."
                ],
            },
        ]
    }
];
