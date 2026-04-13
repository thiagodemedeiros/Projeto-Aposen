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
        title: "Encontro promovido pela AIEA reúne especialistas para discutir avanços em gestão da informação nuclear",
        content: "Centro de Informações Nucleares da Comissão Nacional de Energia Nuclear (CIN/CNEN) representou o Brasil na 43ª Reunião de Oficiais de Ligação do INIS, de 8 a 10 de outubro, na sede da Agência Internacional de Energia Atômica (IAEA), em Viena, Áustria.",
        img : "https://www.gov.br/cnen/pt-br/assunto/ultimas-noticias/encontro-promovido-pela-aiea-reune-especialistas-para-discutir-avancos-em-gestao-da-informacao-nuclear/169a5932.jpg/@@images/cab23b39-dc0e-4932-9f57-c334bcce01de.jpeg",
        link : "https://www.gov.br/cnen/pt-br/assunto/ultimas-noticias/encontro-promovido-pela-aiea-reune-especialistas-para-discutir-avancos-em-gestao-da-informacao-nuclear"
    },
    {
        id: 2,
        title: "CNEN realiza cerimônia de boas-vindas aos novos servidores",
        content: "Servidoras e servidores recém-nomeados e que ingressaram no mais recente concurso público para a CNEN participaram na sede da autarquia, no Rio de Janeiro, nesta quinta dia 12 de fevereiro, de apresentações sobre as atividades do órgão.",
        img : "https://www.gov.br/cnen/pt-br/assunto/ultimas-noticias/cnen-realiza-cerimonia-de-boas-vindas-aos-novos-servidores/dsc0672.jpg/@@images/26a2b639-6412-496e-afac-194345a14163.jpeg",
        link : "https://www.gov.br/cnen/pt-br/assunto/ultimas-noticias/cnen-realiza-cerimonia-de-boas-vindas-aos-novos-servidores"
    },
    {
        id: 3,
        title: "Energia nuclear no Brasil: ciência estratégica a serviço da sociedade",
        content: "Quando o tema é energia nuclear, muita gente ainda pensa em grandes armas de destruição em massa. Imaginar isso é até compreensível, mas chega a ser injusto com algo que está tão presente e é tão fundamental para o desenvolvimento de tecnologias importantes.",
        img : "https://www.gov.br/ien/pt-br/assuntos/noticias/energia-nuclear-no-brasil-ciencia-estrategica-a-servico-da-sociedade/samara-mendes-segurando-nanoparticulas-de-ouro.jpeg/@@images/f84b77bc-e67c-4330-9f29-f0ab5c633a77.jpeg",
        link : "https://www.gov.br/ien/pt-br/assuntos/noticias/energia-nuclear-no-brasil-ciencia-estrategica-a-servico-da-sociedade"
    },
]