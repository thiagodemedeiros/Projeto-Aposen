interface Post {
    id: number;
    title: string;
    type: string;
    content: string;
    img1080 : string;
    img1920 : string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Feliz Dia das Mães: Homenagem Especial da Aposen",
        type: "",
        content: "Neste Dia das Mães, queremos prestar uma homenagem cheia de carinho, respeito e gratidão a todas vocês que, com amor e dedicação, constroem histórias inspiradoras todos os dias.\n\nSer mãe é acolher, ensinar, proteger e amar de forma incondicional. É ter força nos momentos difíceis e espalhar ternura nos pequenos gestos. Vocês são exemplos de coragem, sabedoria e cuidado, deixando marcas eternas na vida de suas famílias e de todos ao redor.\n\nNesta data tão especial, a Aposen deseja que cada mãe receba o reconhecimento, o abraço e o amor que merece. Que nunca faltem saúde, alegria, paz e momentos felizes ao lado das pessoas que amam.\n\n\nFeliz Dia das Mães! Que este dia seja repleto de carinho e celebração, porque vocês merecem todas as homenagens hoje e sempre.\n\n\nCom carinho,\nEquipe Aposen",
        img1080 : "https://i.imgur.com/BL7vsqj.png",
        img1920 : "https://i.imgur.com/uHAZtY5.png"
    },
    {
        id: 2,
        title: "Dia Nacional do Idoso: respeito, cuidado e valorização sempre",
        type: "",
        content: "Hoje, 1º de outubro, celebramos o Dia Nacional do Idoso, uma data para reconhecer e valorizar aqueles que carregam consigo histórias, experiências e conhecimentos que atravessam gerações.\n\nEnvelhecer é também acumular conquistas, aprendizados e momentos que fazem parte da nossa história. Por isso, respeito, dignidade, cuidado e qualidade de vida devem estar presentes em todas as fases da vida.\n\nA APOSEN acredita na importância de valorizar nossos idosos, defender seus direitos e contribuir para que essa etapa seja vivida com mais segurança, respeito e bem-estar.\n\nHoje e todos os dias, nosso reconhecimento e carinho a todos os idosos.",
        img1080 : "https://i.imgur.com/miMb3Tj.jpeg",
        img1920 : "https://i.imgur.com/Wn2WNHo.png"
    },
]