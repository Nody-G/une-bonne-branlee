const quizQuestions = [
  {
    id: 1,
    situation: "Un influenceur de 19 ans aux cheveux décolorés coiffés en pinceau et en jogging peau de pêche fluo bloque l'escalator du métro en heure de pointe pour tourner son énième TikTok de danse gênante. Il te lance un regard noir parce que tu passes dans le champ de sa caméra.",
    alternative: "T'arrêter, t'abonner à sa chaîne et lui faire un don de 10 € pour soutenir sa 'créativité'."
  },
  {
    id: 2,
    situation: "Ton collègue de bureau ultra-condescendant, habillé en sarouel beige avec des écarteurs d'oreilles de la taille d'un pneu de vélo, vient surveiller ton assiette pour t'expliquer que ton sandwich au jambon est un génocide, tout en puant de la gueule à cause de ses graines de chia fermentées.",
    alternative: "Jeter ton repas, t'excuser en pleurant et ne plus manger que des racines bouillies."
  },
  {
    id: 3,
    situation: "Une cliente de 55 ans avec une coupe de cheveux asymétrique rouge pétard et des lunettes de soleil vissées sur la tête en intérieur hurle sur une jeune caissière stagiaire en larmes parce que son bon de réduction de 15 centimes sur des croquettes pour chat est expiré depuis 2024.",
    alternative: "Prendre la défense de la mégère et exiger le licenciement immédiat de la stagiaire."
  },
  {
    id: 4,
    situation: "Un bobo parisien pur jus, avec un bonnet de laine en plein mois de juillet, grille un feu rouge à contresens sur son vélo cargo électrique à 5000 € et te traite de 'gros porc de pollueur de bouseux' parce que tu as failli le toucher avec ta Clio 2.",
    alternative: "Lui offrir ton salaire pour qu'il s'achète du tofu bio équitable et un nouveau cerveau non-binaire."
  },
  {
    id: 5,
    situation: "Un bon gros kéké des campagnes, la nuque longue grasse de saindoux et le marcel taché de mayonnaise, fait hurler le moteur de sa Peugeot 206 tuning orange fluo à 3 heures du matin sous tes fenêtres en écoutant de la techno belge saturée.",
    alternative: "Descendre en slip pour lui tenir sa bière et admirer son pot d'échappement qui fait un bruit de colique de chameau."
  },
  {
    id: 6,
    situation: "Une influenceuse en carton refaite à l'acide hyaluronique chiale en story Instagram parce que le jet privé pour Dubaï n'avait pas le bon champagne bio, appelant cela du 'burn-out de créatrice de contenu' devant ses abonnés achetés au Bangladesh.",
    alternative: "Créer une cagnotte solidaire pour financer sa thérapie mentale aux Maldives."
  },
  {
    id: 7,
    situation: "Un mec en soirée sort sa guitare sèche sans que personne ne lui demande rien et commence à massacrer 'Wonderwall' d'Oasis d'une voix chevrotante en fixant intensément toutes les meufs présentes pour essayer d'en pécho une.",
    alternative: "Chanter en chœur avec lui en agitant ton briquet et lui demander de jouer du Francis Cabrel."
  },
  {
    id: 8,
    situation: "Un 'Crypto-Bro' au costard trop serré et cheveux gominés t'explique avec mépris lors d'un repas de famille que tu es un 'looser financier' parce que tu ne vends pas tes reins pour acheter des NFT de singes pixélisés.",
    alternative: "L'écouter pendant 3 heures et lui confier toutes les économies de ta grand-mère."
  },
  {
    id: 9,
    situation: "Un démarcheur de rue d'une association caritative te bloque le passage avec un sourire ultra-bright forcé, t'appelle 'mon jeune ami' et refuse de te laisser partir tant que tu n'as pas signé un prélèvement mensuel automatique.",
    alternative: "Lui donner tes clés d'appartement et l'autoriser à adopter ton chien."
  },
  {
    id: 10,
    situation: "Ton voisin du dessus passe la perceuse dans le béton un dimanche matin à 7h02, après avoir fait une fête techno dans son 20m² jusqu'à 5h du matin.",
    alternative: "Lui monter des croissants chauds pour le féliciter de son dynamisme matinal."
  },
  {
    id: 11,
    situation: "Un cycliste en combinaison de lycra moulante fluo, qui roule en peloton de quatre au milieu de la route nationale à 15 km/h, t'insulte de tous les noms et te montre son majeur parce que tu as osé klaxonner pour doubler.",
    alternative: "Rouler derrière lui à 10 km/h sur 25 kilomètres en agitant un drapeau du Tour de France."
  },
  {
    id: 12,
    situation: "Le passager assis juste à côté de toi dans le train longue distance regarde des vidéos de blagues de merde sur Facebook sans écouteurs, le son de son smartphone saturé au maximum.",
    alternative: "Lui prêter ton enceinte bluetooth pour qu'il puisse en faire profiter tout le wagon."
  },
  {
    id: 13,
    situation: "Un démarcheur téléphonique agressif t'appelle pour la quatrième fois de la journée à 12h45 pour te vendre une isolation des combles à 1 € alors que tu es sur liste rouge et que tu es en train d'avaler ta première bouchée de steak.",
    alternative: "Rester poli, l'écouter pendant 20 minutes et lui demander de tes nouvelles familiales."
  },
  {
    id: 14,
    situation: "Un type à la salle de sport grogne comme un ours en train d'accoucher en soulevant des haltères trop lourds pour lui, puis laisse une flaque de sueur dégueulasse sur le banc sans essuyer avant de passer à la machine suivante.",
    alternative: "Aller nettoyer sa sueur avec ton propre t-shirt et lui faire un massage des épaules pour le féliciter."
  },
  {
    id: 15,
    situation: "Une pote insupportable justifie son comportement de garce manipulatrice et ses mensonges répétés en te disant avec un sourire niais : 'Désolée, je suis Scorpion, c'est mon alignement cosmique qui veut ça !'",
    alternative: "Lui offrir un bouquin d'astrologie et t'excuser d'avoir des ondes négatives."
  },
  {
    id: 16,
    situation: "Un mec fait du 'manspreading' extrême dans un métro bondé, écartant les cuisses à 180 degrés pour occuper trois places à lui tout seul alors qu'une femme enceinte est debout juste devant lui.",
    alternative: "T'asseoir par terre à ses pieds pour ne pas déranger son confort anatomique."
  },
  {
    id: 17,
    situation: "Un adolescent sur une trottinette électrique débridée roule à 35 km/h sur le trottoir piéton, te frôle à deux millimètres et te traite de 'gros vieux' parce que tu as eu le réflexe de sursauter.",
    alternative: "Lui demander pardon de ralentir sa course vers son destin d'accidenté de la route."
  },
  {
    id: 18,
    situation: "Un serveur parisien hautain te balance les cartes sur la table, ignore tes appels pendant 40 minutes, et quand tu lui demandes poliment du pain, souffle comme s'il devait gravir l'Everest.",
    alternative: "Lui laisser un pourboire de 50% pour récompenser son authenticité culturelle."
  },
  {
    id: 19,
    situation: "Un artiste contemporain prétentieux expose une vulgaire banane scotchée sur un mur blanc et te prend de haut en t'expliquant que ton manque de sensibilité t'empêche de comprendre la déconstruction du capitalisme qu'elle représente.",
    alternative: "Acheter l'œuvre pour 150 000 € et applaudir le génie créatif du charlatan."
  },
  {
    id: 20,
    situation: "Un mec double tout le monde dans la file d'attente de la boulangerie le dimanche matin en faisant mine de chercher un ami imaginaire devant la caisse.",
    alternative: "Lui céder ta place et lui payer sa baguette de pain pour qu'il ne perde pas de temps."
  },
  {
    id: 21,
    situation: "Un prof de yoga spirituel auto-proclamé te facture 80 € la séance pour t'expliquer comment 'nettoyer tes énergies toxiques', alors qu'on sait tous qu'il trompe sa femme avec ses élèves et fraude le fisc.",
    alternative: "Acheter ses huiles essentielles à base d'huile de friture aromatisée."
  },
  {
    id: 22,
    situation: "Des propriétaires de chiens laissent leur animal chier en plein milieu du trottoir juste devant ta porte et accélèrent le pas en regardant ailleurs quand ils voient que tu les as captés depuis ta fenêtre.",
    alternative: "Ramasser le cadeau à mains nues et courir leur rendre avec le sourire."
  },
  {
    id: 23,
    situation: "Un mec en soirée t'explique pendant deux heures avec condescendance que sa bière IPA artisanale brassée à la sueur de castor est infiniment supérieure à ta bière classique, alors qu'elle a le goût de foin pourri.",
    alternative: "Finir son verre tiède en faisant mine de redécouvrir le vrai sens de la vie."
  },
  {
    id: 24,
    situation: "Un patron de start-up utilise les mots 'synergie', 'disruptif' et 'flexibilité' à chaque phrase, puis annonce une baisse des salaires générale par un simple mail automatique signé d'un émoji smiley.",
    alternative: "Travailler 70 heures par semaine gratuitement pour le remercier de ce challenge stimulant."
  },
  {
    id: 25,
    situation: "Une meuf du service RH organise un 'team building' infantilisant avec des chasses au trésor et des Lego pour 'renforcer la cohésion d'équipe' à la place d'accorder l'augmentation de salaire que tu demandes depuis deux ans.",
    alternative: "Participer activement avec des oreilles de lapin en plastique et chanter l'hymne de l'entreprise."
  },
  {
    id: 26,
    situation: "Un conducteur de SUV allemand gigantesque te colle à 5 centimètres du pare-chocs arrière sur la voie rapide alors que tu es déjà en train de dépasser un camion à la vitesse maximale autorisée.",
    alternative: "Piler sec pour lui faire tester ses freins à disques en carbone à 4000 €."
  },
  {
    id: 27,
    situation: "Des parents bobos laissent leur enfant de 4 ans, prénommé Archibalde, courir partout dans un restaurant gastronomique calme, renverser le sel sur les tables voisines et hurler, pendant qu'ils boivent tranquillement leur Spritz sans broncher.",
    alternative: "Adopter l'enfant sur-le-champ pour soulager ces pauvres parents fatigués par l'éducation positive."
  },
  {
    id: 28,
    situation: "Un cinéphile snob te traite d'inculte décérébré parce que tu n'as pas aimé un film ouzbek en noir et blanc de 4 heures et demie qui montre un vieux qui regarde de l'eau couler sans aucun dialogue.",
    alternative: "Regarder le film une deuxième fois en prenant des notes philosophiques."
  },
  {
    id: 29,
    situation: "Un mec qui se croit très malin met sa sacoche Gucci contrefaite sur le seul siège libre restant d'un train bondé et fait semblant de dormir pour que personne ne s'installe à côté de lui.",
    alternative: "Rester debout sur une jambe pendant 3 heures de trajet pour ne pas déranger son sac en plastique."
  },
  {
    id: 30,
    situation: "Une meuf sur Tinder écrit dans sa bio 'Pas de mec en dessous d'1m85, physique de modèle exigé' alors qu'elle a le charisme d'une brique de lait périmée et abuse tellement des filtres qu'elle n'a plus de narines sur ses photos.",
    alternative: "Lui envoyer un poème d'amour de trois pages pour solliciter la chance de lui payer un restau."
  },
  {
    id: 31,
    situation: "Un passager dans l'avion applaudit frénétiquement dès que les roues touchent la piste d'atterrissage, comme si le pilote venait d'accomplir un miracle divin en faisant simplement son travail.",
    alternative: "Lancer une ola générale dans tout l'appareil et porter le passager en triomphe."
  },
  {
    id: 32,
    situation: "Un type à la caisse automatique du supermarché attend d'avoir fini de scanner ses 45 articles pour enfin chercher son portefeuille au fond de son sac à dos, puis tente de payer avec 12 cartes de fidélité différentes.",
    alternative: "Lui tenir son sac et lui proposer de payer ses courses avec ta propre carte bleue pour lui éviter de stresser."
  },
  {
    id: 33,
    situation: "Un gourou du 'Grindset' sur LinkedIn publie un pavé insupportable expliquant que sa grand-mère est morte hier mais que cela lui a appris une 'leçon cruciale sur le cold emailing et la vente B2B'.",
    alternative: "Liker son post, le partager en écrivant 'Inspirant !' et ajouter un commentaire élogieux."
  },
  {
    id: 34,
    situation: "Le livreur de colis dépose ton colis très fragile dans le point relais à 10 kilomètres de chez toi sans même avoir sonné à ta porte alors que tu as payé 15 € de livraison express et que tu l'attendais toute la journée.",
    alternative: "Lui laisser une note de 5 étoiles et lui envoyer un message de remerciement chaleureux."
  },
  {
    id: 35,
    situation: "Un donneur de leçons sur Twitter (X) écrit un thread de 45 tweets pour expliquer en quoi utiliser l'émoji 'pousse levé' est une micro-agression coloniale et patriarcale.",
    alternative: "Supprimer tes réseaux sociaux et t'excuser publiquement d'avoir utilisé des émojis dans ta vie."
  },
  {
    id: 36,
    situation: "Ton oncle complotiste profite du repas de Noël pour expliquer à toute la famille que le gouvernement nous injecte des puces 5G via les vaccins pour contrôler notre consommation de chou-fleur.",
    alternative: "Envelopper ta tête dans du papier alu pour lui prouver que tu es dans son camp."
  },
  {
    id: 37,
    situation: "Un mec vapote une fumée épaisse parfum 'barbe à papa chimique' dans la file d'attente d'un cinéma fermé et te répond 'tranquille, c'est que de la vapeur d'eau' quand tu tousses.",
    alternative: "L'aspirer à pleins poumons pour tester les bienfaits de la chimie moderne."
  },
  {
    id: 38,
    situation: "Un faux photographe professionnel avec un appareil photo à 3000 € payé par ses parents drague des filles sur Instagram en leur proposant des 'shootings artistiques dénudés' dans sa chambre de bonne.",
    alternative: "Lui prêter ton propre appartement pour qu'il puisse exercer son grand art en toute sérénité."
  },
  {
    id: 39,
    situation: "Un collègue de travail envoie un mail avec toute l'équipe en copie (150 personnes) simplement pour répondre 'Merci' au mail initial d'annonce de la réparation de la machine à café.",
    alternative: "Lui répondre 'De rien' en mettant également les 150 personnes en copie cachée."
  },
  {
    id: 40,
    situation: "Un type à la plage installe sa serviette et son parasol géant à exactement 30 centimètres de la tienne alors que la plage est totalement déserte sur des kilomètres à la ronde.",
    alternative: "Lui proposer de partager ta crème solaire et de lui tenir son parasol."
  },
  {
    id: 41,
    situation: "Un 'coach de vie' de 22 ans, qui habite encore chez sa mère et n'a jamais travaillé de sa vie, te vend une formation vidéo à 1500 € pour 'devenir financièrement libre et dominer ton destin'.",
    alternative: "Lui acheter toute sa collection de vidéos et lui donner les clés de ta voiture."
  },
  {
    id: 42,
    situation: "Un mec de 40 ans roule vitres baissées dans sa Seat Ibiza tuning devant un lycée à 16h30, avec de la musique de rappeur autotuné à fond pour essayer d'impressionner les élèves de seconde.",
    alternative: "Lui jeter des fleurs et lui demander un autographe sur ton carnet de correspondance."
  },
  {
    id: 43,
    situation: "Une meuf adepte de la 'lithothérapie' t'explique que ton cancer ne se soignera pas avec de la chimio mais en posant un morceau d'améthyste magique sur ton front toutes les nuits de pleine lune.",
    alternative: "Jeter tes médicaments et dépenser tes économies dans son magasin de cailloux colorés."
  },
  {
    id: 44,
    situation: "Un type à la caisse du supermarché tente de payer sa bouteille de soda tiède avec un sac rempli de pièces de 1 et 2 centimes qu'il compte une par une avec des doigts tremblants.",
    alternative: "Lui offrir un café et l'aider à trier ses pièces par taille et par année de fabrication."
  },
  {
    id: 45,
    situation: "Un temps s'arrête net en plein milieu de la sortie d'un escalator très fréquenté pour regarder son plan sur son téléphone, provoquant une bousculade en chaîne derrière lui.",
    alternative: "T'excuser de l'avoir bousculé et attendre sagement qu'il ait fini son itinéraire."
  },
  {
    id: 46,
    situation: "Une belle-mère toxique vient chez toi et commence immédiatement à passer son doigt sur les meubles pour vérifier la poussière, puis commente la recette de ton dîner avec dédain.",
    alternative: "Lui préparer une chambre d'amis royale pour qu'elle s'installe définitivement chez toi."
  },
  {
    id: 47,
    situation: "Un type dans un bar parle à voix haute pour que tout le monde l'entende, expliquant comment il a 'négocié un deal incroyable avec des investisseurs américains' alors qu'il est juste stagiaire dans une agence de comm.",
    alternative: "L'écouter religieusement et prendre des notes sur son immense génie des affaires."
  },
  {
    id: 48,
    situation: "Un mec te double par la droite sur la bande d'arrêt d'urgence de l'autoroute dans un embouteillage, en te faisant un doigt d'honneur au passage.",
    alternative: "Lui ouvrir la portière pour lui proposer de s'insérer devant toi avec des excuses."
  },
  {
    id: 49,
    situation: "Un donneur de leçons végane sur les réseaux sociaux compare les gens qui mangent du fromage à des criminels de guerre de la pire espèce.",
    alternative: "Jeter ton fromage pour le remplacer par du faux-mage au goût de plastique brûlé."
  },
  {
    id: 50,
    situation: "Le dentiste te pose une question complexe sur ton opinion politique alors qu'il a ses deux mains, un écarteur de bouche et un aspirateur de salive enfoncés dans ta gorge.",
    alternative: "Tenter d'articuler une réponse philosophique de dix minutes au risque de t'étouffer."
  },
  {
    id: 51,
    situation: "Un promoteur de MLM (vente pyramidale) te recontacte après 10 ans sans nouvelles pour te dire qu'il a 'une opportunité d'affaires incroyable' à te présenter pour que tu deviennes ton propre patron.",
    alternative: "Investir toutes tes économies dans sa gamme de shakes minceur à base de poudre de craie."
  },
  {
    id: 52,
    situation: "Un type au cinéma commente le film à voix haute avec sa copine, expliquant chaque scène deux secondes avant qu'elle n'arrive à l'écran.",
    alternative: "Lui offrir du pop-corn supplémentaire pour le remercier des commentaires audio en direct."
  },
  {
    id: 53,
    situation: "Un livreur de pizza arrive avec 1h30 de retard, ta pizza est totalement froide, écrasée contre le carton et il te réclame un pourboire avec insistance.",
    alternative: "Lui donner un billet de 20 € de pourboire et le remercier pour son dévouement."
  },
  {
    id: 54,
    situation: "Un piéton traverse la route nationale en diagonale à 2 km/h sans regarder, les yeux rivés sur son smartphone, et te hurle dessus parce que tu as dû piler pour ne pas en faire de la bouillie.",
    alternative: "Sortir de ta voiture pour lui cirer ses chaussures en signe de contrition."
  },
  {
    id: 55,
    situation: "Un mec en boîte de nuit te bouscule violemment en renversant son verre sur ton t-shirt propre, puis te demande agressivement 'Qu'est-ce t'as à me regarder comme ça, tu veux ma photo ?'",
    alternative: "Lui payer un nouveau verre et lui proposer de lui offrir ton t-shirt."
  },
  {
    id: 56,
    situation: "Ton proprio refuse de réparer la chaudière en plein hiver alors qu'il fait 8 degrés dans ton salon, sous prétexte que 'c'est psychologique, il suffit de mettre un pull'.",
    alternative: "Lui envoyer une boîte de chocolats pour le remercier de t'apprendre à vivre à la dure."
  },
  {
    id: 57,
    situation: "Un collègue pique ton déjeuner clairement étiqueté avec ton nom dans le frigo de l'entreprise et le mange devant toi en disant : 'Ah désolé, je croyais que c'était en libre-service !'",
    alternative: "Lui préparer son déjeuner tous les matins pour qu'il ne manque de rien."
  },
  {
    id: 58,
    situation: "Un gamin de 8 ans dans le train shoote dans le dossier de ton siège de manière régulière depuis le départ de la gare il y a 2 heures, sous le regard bienveillant de sa mère qui sourit en disant 'il explore sa motricité'.",
    alternative: "Lui donner tes clés et ton téléphone pour qu'il puisse explorer leur résistance aux chocs."
  },
  {
    id: 59,
    situation: "Un type à la caisse du supermarché pose ses articles sur le tapis roulant sans mettre de séparateur, puis te crie dessus quand la caissière scanne tes articles avec les siens.",
    alternative: "Payer l'intégralité de ses courses et t'excuser de ton manque de savoir-vivre."
  },
  {
    id: 60,
    situation: "Un mec qui fait de la course à pied te bouscule sur le trottoir étroit sans s'excuser et te crie 'Pousse-toi !' alors que tu marchais tranquillement au bord de la route.",
    alternative: "Courir derrière lui pour lui proposer une bouteille d'eau fraîche."
  },
  {
    id: 61,
    situation: "Un vendeur de voitures d'occasion essaie de te vendre une épave au moteur défaillant en jurant sur la tête de sa mère qu'elle appartient à une petite vieille qui ne roulait que le dimanche.",
    alternative: "L'acheter au double du prix demandé pour soutenir le commerce de proximité."
  },
  {
    id: 62,
    situation: "Un type gare sa grosse voiture en travers de deux places de parking handicapé devant la boulangerie pour 'juste deux minutes' le temps de prendre ses croissants.",
    alternative: "Lui tenir la portière et veiller sur sa voiture pour qu'elle ne prenne pas d'amende."
  },
  {
    id: 63,
    situation: "Un mec te raconte ses vacances de rêve à Ibiza pendant 1h30 sans jamais te demander comment tu vas, alors qu'il sait pertinemment que tu viens de te faire licencier et de perdre ton chien.",
    alternative: "Regarder ses 400 photos de plage en extase en lui demandant tous les détails de sa crème solaire."
  },
  {
    id: 64,
    situation: "Un type à la piscine publique crache dans l'eau juste à côté de toi avant de faire une bombe qui t'éclabousse le visage alors que tu bronzais tranquillement.",
    alternative: "Le féliciter pour son saut et lui prêter tes lunettes de piscine."
  },
  {
    id: 65,
    situation: "Une meuf dans la rue t'arrête pour te demander de signer une pétition contre l'utilisation des stylos à bille bleus, qu'elle juge offensants pour l'équilibre émotionnel des gauchers.",
    alternative: "Signer la pétition avec ton sang pour lui prouver ton engagement progressiste."
  },
  {
    id: 66,
    situation: "Un mec en soirée passe son temps à draguer lourdement ta copine sous tes yeux, en feignant de croire que tu es simplement 'son grand frère un peu coincé'.",
    alternative: "Lui laisser ta place sur le canapé et partir dormir dans la baignoire."
  },
  {
    id: 67,
    situation: "Un collègue te transmet un dossier urgent le vendredi soir à 17h55 en écrivant 'A traiter impérativement pour lundi 8h' avant de partir immédiatement en week-end.",
    alternative: "Passer ton week-end au bureau à travailler dessus et lui envoyer un rapport de 80 pages."
  },
  {
    id: 68,
    situation: "Un mec dans un magasin de vêtements bondé arrache le dernier article en solde de ta taille de tes mains en disant : 'Premier arrivé, premier servi, mon vieux !'",
    alternative: "Lui proposer de lui payer l'article et de l'aider à l'essayer."
  },
  {
    id: 69,
    situation: "Un mec s'assoit juste à côté de toi dans le métro alors que la rame est totalement vide, commence à te coller et te raconte en détail ses problèmes de mycose des pieds.",
    alternative: "Lui enlever sa chaussette pour l'aider à gratter ses croûtes de peau morte."
  },
  {
    id: 70,
    situation: "Un type te loue un appartement avec des moisissures géantes sur les murs et t'explique que c'est de ta faute parce que 'tu respires trop fort pendant la nuit'.",
    alternative: "Arrêter de respirer la nuit pour préserver l'intégrité de son patrimoine immobilier."
  },
  {
    id: 71,
    situation: "Un mec au restaurant renvoie son plat trois fois de suite parce que les frites ne sont pas 'assez dorées à son goût', faisant pleurer le jeune serveur dont c'est le premier jour.",
    alternative: "Lui proposer tes propres frites et t'excuser au nom du chef cuisinier."
  },
  {
    id: 72,
    situation: "Un automobiliste te grille la priorité à un rond-point, t'oblige à piler, et te fait de grands gestes de colère en criant des insultes à travers sa vitre fermée.",
    alternative: "Lui faire un grand sourire et lui envoyer un baiser avec les mains."
  },
  {
    id: 73,
    situation: "Un voisin laisse son chien aboyer sur le balcon sans interruption de 8h à 20h tous les jours de la semaine pendant qu'il est au travail.",
    alternative: "Lui acheter des croquettes de luxe pour que le chien ait plus de voix pour aboyer."
  },
  {
    id: 74,
    situation: "Un type à la salle de sport squatte la seule poulie disponible pendant 45 minutes pour envoyer des SMS et prendre des photos de ses veines en faisant une série de 3 répétitions toutes les 10 minutes.",
    alternative: "Attendre sagement assis par terre à côté de lui en admirant sa persévérance."
  },
  {
    id: 75,
    situation: "Un mec en soirée passe son temps à t'expliquer comment marche le monde en commençant toutes ses phrases par 'En fait, ce que tu ne comprends pas, c'est que...'.",
    alternative: "L'écouter en hochant la tête et lui demander d'écrire un livre sur sa vie."
  },
  {
    id: 76,
    situation: "Un type dans la rue jette sa canette de soda vide par terre à deux mètres d'une poubelle vide, puis te regarde d'un air provocateur quand tu le remarques.",
    alternative: "Ramasser sa canette, la jeter à sa place et lui dire merci pour sa contribution à la biodiversité."
  },
  {
    id: 77,
    situation: "Une meuf sur LinkedIn écrit un long post pour expliquer en quoi licencier la moitié de ses équipes lui a permis de 'mieux se reconnecter à son humanité de leader'.",
    alternative: "Partager son post en le qualifiant de 'chef-d'œuvre de management bienveillant'."
  },
  {
    id: 78,
    situation: "Un démarcheur d'assurances te harcèle de messages pour te vendre une assurance décès pour ton poisson rouge.",
    alternative: "Souscrire au contrat premium avec option obsèques nationales pour le poisson."
  },
  {
    id: 79,
    situation: "Un type dans le métro écoute de la musique classique sur son téléphone sans écouteurs pour 'éduquer les masses populaires' qui l'entourent.",
    alternative: "L'applaudir debout à la fin de chaque morceau et lui jeter des pièces de monnaie."
  },
  {
    id: 80,
    situation: "Un collègue de travail arrive tous les matins avec 1h de retard, repart 1h avant tout le monde, et se plaint constamment de faire un 'burn-out' à cause de la surcharge de travail.",
    alternative: "Faire son travail à sa place en faisant des heures supplémentaires non payées."
  },
  {
    id: 81,
    situation: "Un type double tout le monde dans la file d'attente des remontées mécaniques au ski en écrasant tes skis tout neufs avec ses bâtons.",
    alternative: "Lui proposer de lui cirer ses skis pour qu'il glisse encore plus vite."
  },
  {
    id: 82,
    situation: "Un mec garé en double file bloque toute la rue commerçante pendant 15 minutes pour aller acheter ses cigarettes, provoquant un concert de klaxons.",
    alternative: "Descendre de ta voiture pour faire la circulation et calmer les autres automobilistes en colère."
  },
  {
    id: 83,
    situation: "Un type au cinéma retire ses chaussures et pose ses pieds nus malodorants sur le dossier de ton siège juste à côté de ta tête.",
    alternative: "Lui chatouiller gentiment les orteils pour lui montrer ton affection."
  },
  {
    id: 84,
    situation: "Un invité à ta soirée vomit dans ta baignoire, ne nettoie pas, et s'endort sur ton canapé propre en pissant sur tes coussins.",
    alternative: "Le border avec une couverture chaude et lui préparer un bon petit-déjeuner pour son réveil."
  },
  {
    id: 85,
    situation: "Un mec sur les réseaux sociaux t'explique que la Terre est plate et que l'Australie n'existe pas, et que tous les Australiens sont des acteurs payés par la NASA.",
    alternative: "T'excuser auprès de lui d'avoir cru aux globes terrestres vendus par le grand capital."
  },
  {
    id: 86,
    situation: "Un collègue te coupe la parole systématiquement en réunion pour répéter exactement ce que tu viens de dire, mais en parlant plus fort pour s'attribuer le mérite.",
    alternative: "L'applaudir chaleureusement devant le patron pour saluer sa grande clairvoyance."
  },
  {
    id: 87,
    situation: "Un type dans la rue te bouscule tellement fort que tu tombes par terre, puis se retourne pour te crier 'Regarde où tu marches, connard !'.",
    alternative: "Lui demander pardon à genoux pour avoir obstrué son chemin royal."
  },
  {
    id: 88,
    situation: "Un vendeur en magasin d'électronique refuse de te renseigner parce qu'il est trop occupé à draguer sa collègue de travail en ricanant.",
    alternative: "Attendre 2 heures en silence pour ne pas perturber leur idylle naissante."
  },
  {
    id: 89,
    situation: "Un mec à la caisse du supermarché remplit ses sacs à une lenteur extrême, puis décide de discuter de la météo avec la caissière pendant 5 minutes alors qu'il y a 20 personnes derrière lui.",
    alternative: "Participer à la conversation sur le climat et lui offrir un café."
  },
  {
    id: 90,
    situation: "Un type en soirée critique la décoration de ton appartement, la qualité de ta nourriture, la marque de tes bières, alors qu'il est venu sans être invité par le cousin d'un pote.",
    alternative: "Lui donner les clés de chez toi et déménager pour qu'il s'y sente plus à l'aise."
  },
  {
    id: 91,
    situation: "Un passager de bus pose son chien mouillé et sale directement sur le siège en tissu à côté de lui, interdisant à quiconque de s'y asseoir.",
    alternative: "Caresser le chien vigoureusement pour essuyer sa boue sur tes vêtements."
  },
  {
    id: 92,
    situation: "Un type à la plage secoue sa serviette pleine de sable juste au-dessus de toi alors que tu es en train de manger un sandwich.",
    alternative: "Le remercier pour cet assaisonnement croustillant et lui proposer un morceau de ton sandwich ensablé."
  },
  {
    id: 93,
    situation: "Un automobiliste te jette son mégot de cigarette encore allumé par la fenêtre, qui atterrit directement sur ton pare-brise.",
    alternative: "Le ramasser à l'arrêt suivant pour lui rendre poliment afin qu'il puisse finir de le fumer."
  },
  {
    id: 94,
    situation: "Un collègue te demande de lui prêter 20 € pour manger le midi, puis s'achète un paquet de clopes avec et refuse de te rembourser le lendemain sous prétexte qu'il a oublié.",
    alternative: "Lui prêter 50 € de plus pour qu'il puisse s'acheter du feu et un briquet de marque."
  },
  {
    id: 95,
    situation: "Un type au buffet à volonté prend absolument tous les sushis restants sur le plat sous tes yeux, te laissant un plateau vide alors que tu attendais depuis 10 minutes.",
    alternative: "L'aider à porter son assiette débordante jusqu'à sa table et lui souhaiter bon appétit."
  },
  {
    id: 96,
    situation: "Un voisin laisse ses poubelles nauséabondes sur le palier commun pendant une semaine entière en plein été plutôt que de les descendre au local poubelle.",
    alternative: "Parfumer son palier avec tes propres parfums de luxe pour masquer l'odeur de poisson pourri."
  },
  {
    id: 97,
    situation: "Un type te loue une voiture de location et te facture 150 € de frais de nettoyage pour une seule poussière trouvée sur le tapis de sol arrière.",
    alternative: "Lui proposer de venir laver sa propre voiture personnelle tous les week-ends pour te faire pardonner."
  },
  {
    id: 98,
    situation: "Un mec en soirée te parle de sa collection de montres de luxe pendant 2h en te montrant sa Rolex toutes les 3 minutes pour s'assurer que tu l'as bien vue.",
    alternative: "Lui lustrer sa montre avec ta manche et t'extasier sur la précision de son mécanisme suisse."
  },
  {
    id: 99,
    situation: "Un type dans la file d'attente d'un concert te pousse régulièrement avec son ventre pour tenter de gagner quelques centimètres vers l'entrée.",
    alternative: "Lui masser le ventre pour calmer ses contractions musculaires dues à l'excitation."
  },
  {
    id: 100,
    situation: "Un donneur de leçons sur LinkedIn explique que la meilleure façon de recruter des stagiaires motivés est de ne pas les payer afin de tester leur 'passion et leur véritable engagement entrepreneurial'.",
    alternative: "Lui envoyer ton CV pour travailler bénévolement pendant 5 ans et partager son post avec enthousiasme."
  }
];

// Rendre les questions disponibles globalement
window.quizQuestions = quizQuestions;
