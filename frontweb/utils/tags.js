//compile CONTROL + ALT + N

const tags = 
    {
        bussines: [
            'administracao', 'logistica', 'marketing', 'educacao', 'agronomia','engenharia civil',
            'engenharia eletrica','engenharia de materiais','engenharia de producao', 
            'engenharia mecanica',  'biomedicina',
            'medicina veterinaria', 'educador', 'enfermagem', 'fisioterapia', 'farmacia', 'fonoaudiologia',
            'odontologia', 'psicologia', 'astronomia', 'computacao', 'estatisca', 'fisica', 'geologia','matematica',
            'meteorologia', 'oceanografia', 'quimica', 'filosofia', 'teologia', 'arquitetura e urbanismo',
            'ciencias contabeis', 'direito', 'jornalismo', 'publicidade e propaganda', 'radio e tv',
            'relacoes internacionais', 'turismo', 'artes cenicas', 'cinema','danca', 'design', 'letras',
            'moda', 'musica', 'traducao', 'ingles', 'nutricao', 'biomedicina', 'eletrica'
        ],
        photograph: [
            'casamento','festa','formatura','eventos','praia','modelo','natureza','viagem','canon',
            'comida','bebes','gravidez','bandas','cantor','cerimonias','nikon','sony','4k','HD','Full HD','variedades de lentes',
            'iluminacao', 'videoclipe', 'clipe musical', 'indie', 'artistica', 'conceitual', 'neon', 'zoom', 'filtro',
            'tratamento', 'edicao', 'design', 'curso', 'conteudo adulto', 'nudismo','formado','pinterest','casal','namoro',
            'documentacao', 'album', 'book', 'poster', 'quadro', 'camisas','moletom','canecas','cadernos', 'almofadas'
        ],
        video: [
            'youtuber', 'criador de conteudo', 'canal pequeno', 'canal grande', 'roteirista', 'editor', 'producao',
            'marketing','vinheta','abertura', 'cg', 'conteudo infantil', 'cristao', 'musica',
            'conteudo de jogos', 'conteudo de maquiagem', 'vlog', 'daily vlog', 'podcast', 'adulto','network', 'produtora',
            'tv', 'tv aberta', 'tv fechada', 'propaganda', 'politica', 'economia', 'opiniao', 'react', 'tik tok', 'instagram',
            'kwai', 'esportes', 'animes', 'gamer', 'comedia', 'terror', 'jumpscare', 'analises', 'review', 'cinema',
            'documentario', 'tutorial', 'do yourself', 'trends', 'desafios', 'violento', 'policial', 'noticias'
        ],
        music: [
            'autoral', 'cover', 'musico', 'produtor', 'tecnico de som', 'mixagem', 'remasterizacao', 'empresario',
            'casa de eventos', 'pub', 'musico de bar', 'musico de estudio', 'banda', 'cordas', 'metais', 'percussao',
            'voz', 'vocalista', 'backing vocal', 'orquestra', 'musica classica', 'dj', 'mc', 
            'gospel', 'sertanejo','funk', 'trap', 'rock', 'metal', 'bossa nova', 'axe', 'anos 60', 'anos 70', 'anos 80', 'anos 90',
            'indie', 'pop', 'nacional', 'internacional', 'rap', 'hip hop', 'jazz', 'samba', 'pagode', 'black music', 'blues',
            'country', 'emocore', 'folk', 'grunge', 'lo-fi','new age','mpb', 'punk', 'r&b', 'reggae', 'infantil', 'trap', 'soul music',
            'surf music'
        ],
        education:[
            'professor', 'instrutor', 'escola','ensino fundamental', 'ensino medio' ,'faculdade', 'pos graduacao', 'mestrado', 'pos doutorado',
            'exatas', 'humanas', 'biologicas', 'tecnologia', 'historia', 'geografia', 'engenharia', 'letras',
            'portugues','matematica', 'ciencias', 'educacao fisica', 'fisica','artes', 'quimica',
            'ingles', 'espanhol', 'frances','alemao','mandarim', 'italiano', 'linguas extrangeiras' , 
            'area da saude', 'educacao musical', 'educacao financeira', 'etiqueta', ''
        ],
        food:[
            'comida japonesa', 'comida indiana', 'comida brasileira','comida chinesa', 'comida mexicana', 
            'comida alema', 'comida americana', 'comida espanhola', 'comida tailandesa', 'comida candense',
            'comida italiana', 'comida francesa', 'comida portuguesa', 'comida mineira', 'comida nordestina',
            'restaurante', 'rodizio', 'comida vegana', 'comida vegetariana', 'comida natural', 'salada',
            'cafe', 'suco', 'sorvete', 'feira', 'vitamina','smooth', 'acai', 'agua', 'refrigerante', 'cerveja',
            'chopp', 'vinho', 'uisque', 'vodka','bacardi', 'licor', 'caipirinha', 'pinga', 'absinto', 'tequila',
            'frutas', 'verduras', 'pao', 'bolacha', 'biscoito', 'carnes', 'queijo', 'doces', 'salgados'

        ],
        trip:[
            'agencia', 'hotel', 'pousada', 'passagem', 'carona', 'pontos turisticos', 'ferias', 'natureza',
            'praia', 'hotel fazenda', 'parque tematico', 'parque aquatico', 'america latina', 'america central',
            'america do norte', 'europa', 'africa', 'oceania', 'turismo brasil', 'disney', 'acampamento',
            'airbnb', 'hostel', 'pesca', 'cruzeiro', 'radical', 'paz interior',
            'passaporte', 'safari', 'turismo historico', 'turismo estados unidos', 'turismo inglaterra', 
            'turismo japao', 'turismo australia', 'turismo italia', 'turismo alemanha', 'turismo espanha', 
            'turismo portugal', 'turismo chernobil', 'turismo india', 'turismo russia', 'turismo argentina',
            'turismo holanda', 'turismo egito', 'turismo africa do sul', 'turismo china', 'turismo tailandia',
            'trem', 'onibus', 'aviao'
        ],
        events:[
            'balada', 'festa', 'festival musical', 'exposicao', 'encontros', 'passeata', 'manifestacoes',
            'carnaval', 'halloween', 'natal', 'pascoa', 'eventos corporativos', 'casamentos', 
            'aniversarios', 'happy hour', 'churrascos', 'formaturas', 'feira', 'conferencia',
            'encontros networking', 'treinamento', 'eventos religiosos', 'eventos beneficentes',
            'simposio', 'palestra', 'seminario', 'curso', 'workshop', 'congresso', 'webinar',
            'exposicao artistica', 'sarau', 'corrida', 'maratona', 'campeonato', 'jogos', 'bazar',
            'caca ao tesouro', 'cabare', 'comemoracao', 'comicio', 'confex', 'coquetel', 'debate',
            'desfile de moda', 'encontro fandom', 'entrevista', 'feira gastronomica', 'flash mob',
            'forum'
        ],
        games:[
            'sony playstation','nintendo',  'microsoft' ,'xbox', 'level up',
            'acao', 'moba', 'estrategia', 'rpg', 'esporte', 'corrida', 'mmorpg', 'simulacao', 'rts',
            'luta','stealth',
            'battle royale', 'aventura', 'pc', 'pc gamer', 'nvidea', 'cadeira gamer', 'teclado gamer', 'mouse gamer',
            'mousepad gamer', 'monitor', 'steam', 'origin', 'epic games', 'counter strike', 'fortnite', 'minecraft',
            'pubg', 'league of legends', 'dota 2', 'pokemon go', 'free fire', 'roblox', 'subway surfers',
            'battlefield', 'call of duty', 'worldl of tanks', 'dungeon fighter online', 'among us', 'runescape',
            'apex legends', 'hearthstone', 'overwatch', 'valorant' , 'rainbow six'
        ],
        fashion:[
            
        ],
        artist:[
            'visuais', 'literarias', 'perfomaticas', 'musica', 'artes cenicas', 'pintura',
            'escultura', 'arquitetura', 'literatura', 'cinema', 'fotografia', 'historia em quadrinhos',
            'mangaka', 'design de jogos', 'concept art', 'modelagem 3D', 'coreografo', 'danca',
            'atuacao', 'cordel', 'desenhista', 'ilustrador', 'quadros', 'museu', 'comedia', 'drama',
            'terror', 'arte pre historica', 'arte na antiguidade', 'arte medieval', 'arte renascentista',
            'arte contemporanea', 'arte moderna', 'arte pos moderna', 'arte brasileira', 'arte internacional',
            'tecnicas de pintura', 'tecnicas de traco', 'curso de artes', 'arte grega', 'arte egipcia', 'arte romana',
            'arte bizantina', 'arte romanica', 'surrealismo', 'arte gotica', 'neoclassicismo',
            'romantismo', 'modernismo', 'arte indigena'
        ],
        geek:[
            'loja geek', 'comic con', 'evento de anime','anime', 'cosplay', 'rpg de mesa', 'D&D',
            'batalha campal', 'harry potter', 'filmes', 'series', 'colecoes', 'livros geek', 'tokusatsu',
            'hq', 'manga', 'gameboard', 'trade card games', 'yu gi oh', 'pokemon', 'magic the gathering',
            'herois', 'action figure', 'steam punk', 'e esports', 'star trek' , 'avengers',
            'cubo magico', 'video game', 'posters geek', 'camisas geek', 'moletom geek', 'replicas geek', 
            'star wars', 'senhor dos aneis', 'game of thrones', 'guardioes da galaxia', 'the big bang theory',
            'doctor who', 'mr robot', 'blade runner', 'matrix', 'de volta para o futuro', 'indiana jones',
            'black mirror', 'stranger things', 'a origem',
            'bonecos pop', 'colares geek', 'nerd'
            
        ]
    }


console.log(tags.geek.length)