interface News {
    id: number;
    title: string;
    content: string;
    img : string;
    link : string;
}

export const News: News[] = [
    {
        id: 1,
        title: "Operadores das usinas de Angra 1 e Angra 2 recebem treinamento no Reator Argonauta do IEN/CNEN",
        content: "Pelo segundo ano seguido, o Instituto ministra o Curso Introdutório para Operadores de Reator de Pesquisa (CIORP) como parte do treinamento dos profissionais operadores das usinas nucleares de Angra dos Reis.",
        img : "https://www.gov.br/ien/pt-br/assuntos/noticias/operadores-das-usinas-de-angra-1-e-angra-2-recebem-treinamento-no-reator-argonauta-do-ien-cnen/@@images/image-2048-e7551d470e9477fd7b51e0e6980f92ce.jpeg",
        link : "https://www.gov.br/ien/pt-br/assuntos/noticias/operadores-das-usinas-de-angra-1-e-angra-2-recebem-treinamento-no-reator-argonauta-do-ien-cnen"
    },
    {
        id: 2,
        title: "Inscrições para o TINS 2026 estarão abertas a partir de 29 de setembro",
        content: "Comitê do Congresso de Tecnologia e Inovação no Setor Nuclear receberá a submissão de trabalhos em formato de Resumo Estendido até 1º de novembro.",
        img : "https://www.gov.br/ien/pt-br/assuntos/noticias/inscricoes-para-o-tins-2026-estarao-abertas-a-partir-de-29-de-setembro/@@images/image-1600-455115c30225389698a5753f41067136.jpeg",
        link : "https://www.gov.br/ien/pt-br/assuntos/noticias/inscricoes-para-o-tins-2026-estarao-abertas-a-partir-de-29-de-setembro"
    },
    {
        id: 3,
        title: "Radioatividade natural das bananas é tema de pesquisa do IEN/CNEN",
        content: "Trabalho assinado por aluna de mestrado da Instituição utiliza o procedimento de espectrometria gama para analisar a propriedade radioativa dessa fruta.",
        img : "https://www.gov.br/ien/pt-br/assuntos/noticias/radioatividade-natural-das-bananas-e-tema-de-pesquisa-do-ien-cnen/@@images/image-2048-f6c2cccbe47491e6f2a02eddfc8fcda7.jpeg",
        link : "https://www.gov.br/ien/pt-br/assuntos/noticias/radioatividade-natural-das-bananas-e-tema-de-pesquisa-do-ien-cnen"
    },
]