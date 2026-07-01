const quizQuestions = [
  {
    id: 1,
    situation: "Un influenceur de 19 ans avec une coupe de cheveux en forme de pinceau à rechampir et un jogging fluo bloque l'escalator du métro en heure de pointe pour filmer sa douzième danse TikTok ridicule. Il ose te lancer un regard noir parce que ta présence 'gâche sa vidéo'.",
    alternative: "T'arrêter pour faire le back-up sur sa chorégraphie et lui donner ton code de carte bleue pour l'encourager."
  },
  {
    id: 2,
    situation: "Ton collègue de bureau ultra-condescendant, vêtu d'un sarouel en lin non lavé et arborant des écarteurs d'oreilles massifs, vient inspecter ton assiette de midi pour t'expliquer que manger du fromage fait de toi un criminel, tout en exhalant une odeur de soja fermenté insoutenable.",
    alternative: "Jeter ton repas, t'excuser à genoux et promettre de ne plus te nourrir que de rosée du matin et de graines de chanvre."
  },
  {
    id: 3,
    situation: "Une cliente quinquagénaire avec une coupe asymétrique rouge vif hurle sur une jeune caissière stagiaire en larmes parce qu'un bon de réduction de 10 centimes sur des croquettes pour chat est expiré depuis trois ans.",
    alternative: "Prendre le parti de la cliente en exigeant que la stagiaire soit bannie de la société civile."
  },
  {
    id: 4,
    situation: "Un cycliste parisien en trottinette ou vélo cargo à 5000 € grille un feu rouge majeur, manque de renverser une poussette, et t'insulte copieusement car tu as eu l'audace de traverser sur le passage piéton au feu vert.",
    alternative: "Lui présenter tes excuses les plus plates et lui cirer ses baskets en cuir végétal."
  },
  {
    id: 5,
    situation: "Un kéké du tuning local fait vrombir le moteur de sa Peugeot 206 modifiée au pot d'échappement percé à 3h du matin sous tes fenêtres, en diffusant de la techno saturée à fond les ballons.",
    alternative: "Descendre lui offrir une bière tiède et le féliciter pour la finesse des réglages de son moteur."
  },
  {
    id: 6,
    situation: "Une starlette des réseaux sociaux totalement siliconée filme une vidéo en larmes parce que sa chambre d'hôtel de luxe à Dubaï n'avait pas la bonne marque d'eau minérale pour laver son chihuahua, appelant cela 'le pire drame de sa vie'.",
    alternative: "Lancer une cagnotte nationale pour lui payer une thérapie d'urgence aux Seychelles."
  },
  {
    id: 7,
    situation: "En pleine soirée sympa, un mec sort une guitare acoustique désaccordée sans que personne ne lui demande rien et commence à chanter 'Wonderwall' d'une voix chevrotante en fixant lourdement toutes les filles de la pièce.",
    alternative: "T'asseoir à ses pieds en agitant un briquet et chanter les chœurs en pleurant d'émotion."
  },
  {
    id: 8,
    situation: "Un 'Crypto-Bro' autoproclamé au costard trop serré et dents trop blanches monopolise le repas de Noël pour expliquer à ta grand-mère qu'elle est 'has-been' parce qu'elle n'a pas investi sa retraite dans des images numériques de singes en pixel art.",
    alternative: "L'écouter en hochant la tête et lui signer une procuration sur tous tes comptes bancaires."
  },
  {
    id: 9,
    situation: "Un démarcheur de rue agressif te barre la route avec un sourire forcé, t'appelle 'mon jeune ami' et refuse de te laisser passer tant que tu ne t'engages pas à donner 20 € par mois à son association d'aide aux pigeons urbains.",
    alternative: "Lui donner tes clés de maison et ton mot de passe de téléphone pour lui prouver ta bonté."
  },
  {
    id: 10,
    situation: "Ton voisin du dessus commence à percer des trous dans la dalle en béton armé un dimanche matin à 7h05, après avoir hurlé et dansé sur du rap jusqu'à 5h du matin.",
    alternative: "Lui monter un plateau de viennoiseries chaudes pour le remercier d'animer ton week-end."
  },
  {
    id: 11,
    situation: "Un peloton de cyclistes du dimanche en combinaison de lycra moulante fluo roule de front à 15 km/h sur une route nationale sinueuse et t'adresse des gestes obscènes lorsque tu oses klaxonner pour doubler.",
    alternative: "Rester sagement derrière eux pendant 30 kilomètres pour admirer leurs tenues colorées."
  },
  {
    id: 12,
    situation: "Le passager assis à côté de toi dans le TGV regarde une série de vidéos humoristiques stupides sur son téléphone sans écouteurs, le haut-parleur poussé au maximum de sa saturation.",
    alternative: "Lui prêter ton enceinte bluetooth portable pour que tout le wagon profite du spectacle."
  },
  {
    id: 13,
    situation: "Un démarcheur téléphonique te rappelle pour la cinquième fois de la journée en insistant lourdement pour te vendre une isolation des combles alors que tu habites au troisième étage d'un immeuble.",
    alternative: "Rester en ligne pendant une heure pour lui raconter les détails de tes dernières vacances."
  },
  {
    id: 14,
    situation: "Un frimeur à la salle de sport hurle comme s'il soulevait une montagne en déplaçant des haltères bien trop lourds, puis abandonne le banc recouvert d'une flaque de sueur sans l'essuyer.",
    alternative: "Nettoyer le banc avec ta serviette personnelle et aller lui masser les trapèzes pour le féliciter."
  },
  {
    id: 15,
    situation: "Une connaissance toxique justifie son comportement insupportable, ses mensonges et ses trahisons répétés en te disant avec un sourire niais : 'Désolée, je suis Scorpion, c'est mon thème astral qui m'y oblige !'",
    alternative: "L'aider à analyser sa carte du ciel et t'excuser de n'être qu'un pauvre Capricorne rigide."
  },
  {
    id: 16,
    situation: "Un homme pratique un 'manspreading' extrême dans un métro bondé, occupant deux sièges supplémentaires à lui tout seul alors que plusieurs personnes âgées voyagent debout.",
    alternative: "T'excuser de respirer son air et t'asseoir par terre à ses pieds pour ne pas le gêner."
  },
  {
    id: 17,
    situation: "Un adolescent sur une trottinette électrique débridée roule à 35 km/h sur le trottoir piéton, manque de faucher un aveugle et insulte les passants qui sursautent.",
    alternative: "L'encourager à accélérer et lui céder la priorité absolue sur les zones piétonnes."
  },
  {
    id: 18,
    situation: "Un serveur parisien te jette la carte au visage, t'ignore pendant trois quarts d'heure et soupire bruyamment quand tu lui demandes poliment une carafe d'eau.",
    alternative: "Lui laisser un pourboire équivalent à ton loyer pour saluer son authenticité typique."
  },
  {
    id: 19,
    situation: "Un artiste contemporain snob expose une brique de lait vide sur un socle en bois et t'explique avec mépris que ton manque de culture t'empêche de voir la déconstruction de la société industrielle qu'elle incarne.",
    alternative: "Acheter l'objet d'art pour 80 000 € et le remercier d'avoir ouvert tes yeux profanes."
  },
  {
    id: 20,
    situation: "Un resquilleur se glisse discrètement devant tout le monde dans la file d'attente de la boulangerie en prétendant qu'il voulait 'juste voir s'il restait des chouquettes'.",
    alternative: "Lui payer sa commande et lui proposer de passer devant toi pour le reste de sa journée."
  },
  {
    id: 21,
    situation: "Un gourou de la spiritualité te demande 120 € pour une séance de méditation cosmique visant à 'purifier ton portefeuille des énergies négatives du matérialisme'.",
    alternative: "Lui signer un chèque en blanc et acheter ses pierres de lune magiques faites en plastique recyclé."
  },
  {
    id: 22,
    situation: "Un propriétaire de chien laisse son animal faire ses besoins au milieu du passage devant ton entrée de garage et s'en va en sifflotant en faisant semblant de regarder les nuages.",
    alternative: "Ramasser le dépôt à mains nues pour aller le jeter proprement à sa place."
  },
  {
    id: 23,
    situation: "Un connaisseur autoproclamé de bières passe deux heures à t'expliquer que ta boisson est une insulte au palais mondial, alors que sa bière artisanale sent le purin et le vieux carton mouillé.",
    alternative: "Boire son breuvage immonde en le remerciant de t'avoir éduqué au bon goût."
  },
  {
    id: 24,
    situation: "Un jeune cadre dynamique utilise les mots 'synergie', 'disruptif' et 'mindset' dans chaque phrase pour finalement annoncer que les heures supplémentaires ne seront plus payées mais 'valorisées en expérience humaine'.",
    alternative: "Travailler les week-ends bénévolement pour lui prouver ton alignement avec les valeurs de l'entreprise."
  },
  {
    id: 25,
    situation: "Le service des ressources humaines refuse ton augmentation légitime mais installe une table de baby-foot cassée dans la salle de pause pour 'favoriser le bien-être au travail'.",
    alternative: "Passer tes pauses à cirer les barres du baby-foot en souriant béatement."
  },
  {
    id: 26,
    situation: "Un conducteur de grosse berline allemande te colle au pare-chocs arrière à 130 km/h sur l'autoroute sous une pluie battante en te faisant des appels de phares frénétiques.",
    alternative: "Te rabattre d'un coup sec sur la droite quitte à percuter une barrière pour lui laisser le passage libre."
  },
  {
    id: 27,
    situation: "Un couple de bobos laisse ses enfants hurler et courir partout dans un restaurant feutré, jetant de la nourriture sur les autres tables pendant qu'ils débattent de l'éducation positive sans intervenir.",
    alternative: "Proposer de faire le poney pour amuser les enfants afin que les parents finissent leur repas au calme."
  },
  {
    id: 28,
    situation: "Un cinéphile prétentieux te traite d'analphabète culturel parce que tu as trouvé ennuyeux un film muet lituanien de 5 heures sur la fabrication artisanale de sabots en bois.",
    alternative: "Te forcer à le revoir en boucle en prenant des notes philosophiques d'une page par plan."
  },
  {
    id: 29,
    situation: "Un passager dépose sa valise sale sur le dernier siège libre d'un train bondé et ferme les yeux en faisant semblant de dormir profondément pour que personne ne lui demande de faire de la place.",
    alternative: "Rester debout pendant tout le voyage en veillant à ce que sa valise ne prenne pas la poussière."
  },
  {
    id: 30,
    situation: "Un utilisateur d'applications de rencontre exige un profil athlétique et un salaire à six chiffres alors que son propre profil montre un niveau d'orthographe déplorable et des photos floues avec des filtres déformants.",
    alternative: "Lui écrire un poème d'amour médiéval pour obtenir la faveur d'un rendez-vous rapide."
  },
  {
    id: 31,
    situation: "Un groupe de passagers applaudit frénétiquement à l'atterrissage d'un vol commercial classique de 45 minutes par beau temps sans aucun incident.",
    alternative: "Lancer une standing ovation et exiger que le commandant de bord vienne signer des autographes dans la cabine."
  },
  {
    id: 32,
    situation: "Un client à la caisse du supermarché attend que le montant total soit affiché pour commencer à chercher péniblement ses lunettes, son chéquier et ses bons de réduction périmés au fond d'un sac désordonné.",
    alternative: "Lui proposer de lui offrir ses courses et de lui ranger ses affaires dans ses poches."
  },
  {
    id: 33,
    situation: "Un entrepreneur LinkedIn écrit un post larmoyant pour expliquer en quoi la perte de son animal de compagnie lui a inspiré une nouvelle stratégie de croissance pour ses ventes en ligne.",
    alternative: "Liker, partager avec enthousiasme et commenter : 'Tellement inspirant et humain !'."
  },
  {
    id: 34,
    situation: "Un livreur prétend être passé chez toi alors que tu as attendu toute la journée collé à l'interphone, et dépose ton colis fragile dans un point relais à l'autre bout de la ville.",
    alternative: "Lui envoyer une lettre de remerciement et lui laisser une note maximale sur l'application."
  },
  {
    id: 35,
    situation: "Un internaute militant écrit un article de dix pages pour expliquer en quoi l'usage du mot 'bonjour' est une agression culturelle oppressive et excluante pour les personnes du soir.",
    alternative: "T'excuser publiquement en supprimant ton vocabulaire et en ne communiquant plus que par signes."
  },
  {
    id: 36,
    situation: "Un membre de ta famille profite du repas de fête pour t'expliquer que la lune est un hologramme projeté par des élites secrètes pour dissimuler le fait que la Terre est plate.",
    alternative: "Construire une réplique de la lune en carton pour lui montrer que tu as enfin compris la vérité."
  },
  {
    id: 37,
    situation: "Un passager vapote une brume épaisse parfumée à la fraise chimique dans un espace clos et te lance 'c'est pas de la fumée, c'est de la vapeur d'eau' quand tu te mets à tousser.",
    alternative: "L'inhaler profondément pour apprécier les arômes artificiels de sa confiserie mobile."
  },
  {
    id: 38,
    situation: "Un photographe amateur contacte des jeunes femmes pour leur proposer des séances de pose gratuites en sous-vêtements chez lui pour 'l'art et la sensibilité du nu académique'.",
    alternative: "L'aider à installer ses spots d'éclairage et lui prêter tes propres vêtements pour ses modèles."
  },
  {
    id: 39,
    situation: "Un collègue clique sur 'Répondre à tous' pour envoyer un simple 'ok merci' à un e-mail d'information générale adressé à 300 personnes.",
    alternative: "Lui répondre à ton tour en mettant tout le monde en copie pour lui dire 'de rien'."
  },
  {
    id: 40,
    situation: "Un touriste installe sa serviette de plage et son parasol géant à moins d'un mètre de la tienne alors que la plage est totalement déserte sur des kilomètres.",
    alternative: "Lui proposer de s'asseoir directement sur tes genoux pour gagner encore plus de place."
  },
  {
    id: 41,
    situation: "Un adolescent de 20 ans vivant chez ses parents s'improvise 'coach en liberté financière' et tente de te vendre une formation payante pour t'apprendre à devenir riche sans effort.",
    alternative: "Lui céder toutes tes économies et le supplier de devenir ton mentor spirituel."
  },
  {
    id: 42,
    situation: "Un conducteur roule fenêtres grandes ouvertes avec la musique saturée au maximum à proximité d'un hôpital ou d'une zone résidentielle calme à minuit.",
    alternative: "Danser sur le trottoir pour l'encourager à monter encore plus le volume."
  },
  {
    id: 43,
    situation: "Une adepte des médecines alternatives te conseille d'arrêter ton traitement médical sérieux pour le remplacer par l'application d'argile verte et de cailloux magiques sur ta poitrine.",
    alternative: "Jeter tes médicaments à la poubelle et vider ton compte d'épargne dans sa boutique ésotérique."
  },
  {
    id: 44,
    situation: "Un client paie un achat de 2 euros avec des pièces de 1 et 2 centimes qu'il compte une par une à la caisse d'un tabac bondé aux heures de pointe.",
    alternative: "L'aider à aligner ses pièces et lui offrir un café pour le remercier de ce moment de calme."
  },
  {
    id: 45,
    situation: "Un piéton s'arrête brusquement pile à la sortie d'un escalator très encombré pour lire ses messages, bloquant tout le flux de personnes derrière lui.",
    alternative: "Attendre patiemment en tas avec les autres passagers qu'il ait fini d'envoyer son émoji."
  },
  {
    id: 46,
    situation: "Ta belle-mère passe son doigt sur les cadres de tes portes pour traquer la poussière dès son arrivée, avant de critiquer l'éducation de tes enfants.",
    alternative: "Lui donner ton balai et t'excuser de ton incompétence crasse en matière de ménage."
  },
  {
    id: 47,
    situation: "Un type parle fort dans un bar pour s'assurer que tout le monde l'entend raconter ses faux succès professionnels et ses fausses soirées avec des célébrités.",
    alternative: "Prendre des notes sur un calepin en lui demandant de parler encore plus fort pour ne rien rater."
  },
  {
    id: 48,
    situation: "Un automobiliste te dépasse par la droite sur la bande d'arrêt d'urgence lors d'un ralentissement routier, puis te coupe la route brusquement.",
    alternative: "Lui faire des appels de phares amicaux et lui laisser une large place pour s'insérer."
  },
  {
    id: 49,
    situation: "Un internaute donneur de leçons t'explique sur les réseaux sociaux que consommer du miel est une exploitation intolérable et cruelle envers la classe ouvrière des abeilles.",
    alternative: "Arrêter le miel et t'excuser par écrit auprès de la ruche la plus proche."
  },
  {
    id: 50,
    situation: "Un dentiste te pose des questions pointues sur l'économie mondiale alors qu'il a placé trois pinces, un tuyau d'aspiration et ses deux mains dans ta bouche.",
    alternative: "Essayer de disserter malgré les instruments au risque de repeindre son cabinet avec ta salive."
  },
  {
    id: 51,
    situation: "Une ancienne connaissance d'école disparue depuis 12 ans t'écrit un message pour te proposer de 'devenir ton propre patron' en vendant des poudres énergétiques magiques.",
    alternative: "Acheter un stock de 500 boîtes de poudre et recruter tes propres parents pour les vendre."
  },
  {
    id: 52,
    situation: "Un spectateur commente chaque rebondissement du film à voix haute dans la salle de cinéma en expliquant les blagues à sa compagne qui a l'air de vouloir disparaître sous son siège.",
    alternative: "Lui demander son avis sur la fin du film pour avoir son analyse complète en avant-première."
  },
  {
    id: 53,
    situation: "Un livreur de repas arrive avec deux heures de retard, te livre un plat froid et renversé, puis exige que tu lui laisses un pourboire en liquide pour le trajet.",
    alternative: "Lui donner un billet supplémentaire et le remercier chaleureusement pour l'exercice physique imposé."
  },
  {
    id: 54,
    situation: "Un piéton traverse à pas lents en dehors des passages protégés les yeux fixés sur son écran, et t'insulte parce que tu as dû freiner d'urgence pour l'éviter.",
    alternative: "Sortir de ta voiture pour lui proposer de le porter sur ton dos jusqu'au trottoir d'en face."
  },
  {
    id: 55,
    situation: "Un fêtard ivre te bouscule dans un bar, renverse son verre sur ton pull propre et te demande agressivement si tu cherches la bagarre.",
    alternative: "Lui acheter un nouveau verre et lui proposer de nettoyer ses chaussures avec ta manche."
  },
  {
    id: 56,
    situation: "Ton propriétaire refuse d'intervenir pour l'absence d'eau chaude sanitaire en hiver, affirmant que prendre des douches froides renforce les défenses immunitaires.",
    alternative: "Le remercier par écrit de veiller ainsi sur ta santé et payer ton loyer en avance."
  },
  {
    id: 57,
    situation: "Un collègue mange ton plat préparé dans le réfrigérateur de l'entreprise malgré ton nom écrit en gros marqueur rouge sur la boîte.",
    alternative: "Lui préparer ses repas tous les jours pour lui éviter d'avoir à chercher dans le frigo."
  },
  {
    id: 58,
    situation: "Un enfant donne des coups répétés dans le dossier de ton siège d'avion pendant tout un vol long-courrier, sous le regard attendri de ses parents impassibles.",
    alternative: "Lui prêter tes clés pour qu'il puisse s'amuser à rayer tes affaires sans s'ennuyer."
  },
  {
    id: 59,
    situation: "Un client retire le séparateur de caisse au supermarché et pousse tes articles pour mélanger ses achats avec les tiens avant de s'énerver contre la caissière.",
    alternative: "Payer l'intégralité de ses achats en t'excusant d'avoir encombré son espace."
  },
  {
    id: 60,
    situation: "Un joggeur refuse de s'écarter sur un chemin étroit et te bouscule de l'épaule en te criant de libérer le passage pour sa séance d'entraînement.",
    alternative: "Courir à ses côtés pour lui servir de garde du corps et lui ouvrir le chemin."
  },
  {
    id: 61,
    situation: "Un vendeur de voitures d'occasion te certifie qu'un véhicule au moteur bruyant et à la carrosserie rouillée appartenait à un médecin retraité qui ne faisait que des trajets courts.",
    alternative: "Acheter le véhicule au prix fort sans demander de contrôle technique pour ne pas le froisser."
  },
  {
    id: 62,
    situation: "Un conducteur gare sa berline sur deux places réservées aux personnes à mobilité réduite pour 'juste acheter un paquet de chewing-gums'.",
    alternative: "Surveiller sa voiture pendant son absence pour lui éviter la moindre rayure."
  },
  {
    id: 63,
    situation: "Un ami te parle de ses vacances luxueuses pendant des heures sans jamais prendre de tes nouvelles alors que tu traverses une passe difficile.",
    alternative: "Écouter en souriant ses anecdotes sur les hôtels cinq étoiles en hochant la tête."
  },
  {
    id: 64,
    situation: "Un baigneur crache de l'eau dans la piscine publique juste à côté de ta tête avant de plonger sans ménagement en t'éclaboussant.",
    alternative: "Le féliciter pour son style de nage et lui proposer ta serviette de bain."
  },
  {
    id: 65,
    situation: "Un militant t'interpelle dans la rue pour te demander de signer une pétition interdisant la commercialisation des choux de Bruxelles pour préserver le bien-être gustatif des enfants.",
    alternative: "Signer la pétition et t'engager à ne plus cuisiner aucun légume vert."
  },
  {
    id: 66,
    situation: "Un invité à ta soirée commence à critiquer ouvertement ton appartement, tes goûts musicaux et la qualité des boissons que tu as achetées.",
    alternative: "Lui proposer de choisir la musique, de commander ce qu'il veut à tes frais et lui laisser ton lit."
  },
  {
    id: 67,
    situation: "Un collègue te confie une tâche complexe le vendredi soir à 17h50 en insistant sur le fait que le dossier doit être finalisé pour lundi matin première heure.",
    alternative: "Passer ton week-end complet au bureau pour lui rendre un travail parfait le lundi à 7h."
  },
  {
    id: 68,
    situation: "Un client s'empare du dernier article disponible en solde au moment exact où tu allais le prendre, en te lançant un regard victorieux.",
    alternative: "Lui proposer de lui porter son panier jusqu'à la caisse pour l'aider."
  },
  {
    id: 69,
    situation: "Un inconnu s'installe juste à côté de toi dans un bus vide, te serre contre la vitre et commence à te raconter ses problèmes personnels de santé intime.",
    alternative: "L'écouter attentivement en lui proposant des conseils d'ami pour ses soucis médicaux."
  },
  {
    id: 70,
    situation: "Ton bailleur t'explique que la présence de moisissures vertes sur les murs de ta chambre est due au fait que tu respires de manière trop humide pendant la nuit.",
    alternative: "Promettre de moins respirer et acheter des absorbeurs d'humidité à tes frais."
  },
  {
    id: 71,
    situation: "Un client renvoie son assiette trois fois de suite dans un petit restaurant en critiquant la forme des frites et en humiliant le serveur débutant.",
    alternative: "Lui présenter les excuses de l'assemblée et lui proposer de partager ton propre plat."
  },
  {
    id: 72,
    situation: "Un conducteur te refuse la priorité dans un carrefour, t'oblige à piler, puis te montre son poing d'un air menaçant.",
    alternative: "Lui faire un signe amical de la main pour le remercier d'avoir testé tes réflexes de freinage."
  },
  {
    id: 73,
    situation: "Un voisin laisse son chien hurler à la mort sur son balcon toute la journée pendant ses absences régulières.",
    alternative: "Lui offrir des jouets pour chien pour l'aider à s'occuper pendant ses longues heures de solitude."
  },
  {
    id: 74,
    situation: "Un adepte de la musculation occupe le seul banc disponible pendant une heure pour regarder des vidéos sur son téléphone portable entre deux séries d'exercices légers.",
    alternative: "Attendre debout en silence en évitant de troubler sa concentration numérique."
  },
  {
    id: 75,
    situation: "Un invité commence toutes ses phrases par 'En fait, ce que tu n'as pas l'air de comprendre...' pour t'expliquer des sujets simples que tu connais par cœur.",
    alternative: "Prendre l'air émerveillé devant son immense savoir et le remercier pour ces explications."
  },
  {
    id: 76,
    situation: "Un passant jette sa bouteille vide sur la pelouse du parc à proximité d'une corbeille publique, puis te lance un regard de défi.",
    alternative: "Ramasser le déchet en t'excusant d'avoir perturbé sa promenade."
  },
  {
    id: 77,
    situation: "Une responsable d'entreprise écrit un article pour expliquer en quoi la réduction drastique des salaires de ses équipes a permis de recréer du lien et de la motivation interne.",
    alternative: "Partager l'article avec le commentaire : 'Une vision managériale pleine de bon sens et d'humanité !'."
  },
  {
    id: 78,
    situation: "Un agent d'assurances te contacte à plusieurs reprises pour tenter de te vendre une assurance contre le vol de tes plantes de balcon.",
    alternative: "Souscrire à son offre d'assurance premium avec assistance téléphonique 24h/24."
  },
  {
    id: 79,
    situation: "Un passager du métro diffuse de la musique classique sur ses haut-parleurs sans écouteurs pour 'élever le niveau culturel du wagon'.",
    alternative: "L'applaudir chaleureusement à chaque fin de morceau et lui jeter quelques pièces de monnaie."
  },
  {
    id: 80,
    situation: "Un collègue arrive systématiquement en retard, confie toutes ses tâches aux autres membres de l'équipe et se plaint continuellement de surmenage auprès de la direction.",
    alternative: "Prendre en charge son travail en effectuant des heures supplémentaires régulières."
  },
  {
    id: 81,
    situation: "Un skieur passe devant tout le monde dans la file d'attente des remontées mécaniques en marchant lourdement sur tes skis neufs.",
    alternative: "Lui proposer de lui tenir ses bâtons pour faciliter sa progression rapide vers le télésiège."
  },
  {
    id: 82,
    situation: "Un automobiliste stationne en double file dans une rue commerçante étroite pour acheter ses journaux, bloquant complètement le passage des bus.",
    alternative: "Aider à guider les autres voitures pour organiser la circulation en attendant son retour calme."
  },
  {
    id: 83,
    situation: "Un spectateur retire ses chaussures dans le train et pose ses pieds nus sur l'accoudoir de ton siège à hauteur de ton épaule.",
    alternative: "Lui proposer une lingette rafraîchissante pour s'assurer qu'il voyage de la manière la plus confortable."
  },
  {
    id: 84,
    situation: "Un invité endommage ton mobilier lors d'une fête chez toi, puis s'en va sans te prévenir ni s'excuser le lendemain.",
    alternative: "Lui envoyer un message pour le remercier d'être venu et lui proposer de réorganiser une soirée."
  },
  {
    id: 85,
    situation: "Un internaute t'explique avec aplomb que la lune est habitée par des êtres de lumière qui contrôlent la météo mondiale depuis leur station spatiale.",
    alternative: "L'encourager dans ses théories en lui demandant de t'expliquer l'origine des tempêtes."
  },
  {
    id: 86,
    situation: "Un collègue s'approprie tes idées présentées lors d'une réunion en les répétant avec plus d'assurance devant le directeur général de l'entreprise.",
    alternative: "Le féliciter publiquement pour la clarté de sa présentation et son esprit d'initiative."
  },
  {
    id: 87,
    situation: "Un passant te bouscule vigoureusement sur le trottoir, te fait tomber, puis se retourne pour te crier de regarder où tu marches.",
    alternative: "Lui demander pardon depuis le sol et lui souhaiter une excellente fin de journée."
  },
  {
    id: 88,
    situation: "Un conseiller de vente refuse de répondre à tes questions dans un magasin car il discute de ses projets de soirée avec sa collègue de travail.",
    alternative: "Attendre poliment en écoutant leur discussion sans interrompre leur conversation amicale."
  },
  {
    id: 89,
    situation: "Un client à la caisse du supermarché engage une longue discussion avec le personnel de caisse sur la météo de la semaine alors qu'une longue file d'attente s'est formée.",
    alternative: "Prendre part à la conversation sur le climat avec enthousiasme en lui offrant tes articles."
  },
  {
    id: 90,
    situation: "Un invité non sollicité lors d'un dîner critique la préparation des plats, le choix des vins et l'ambiance générale de la soirée.",
    alternative: "Lui proposer de cuisiner la prochaine fois à ta place et lui offrir tes meilleures bouteilles de vin."
  },
  {
    id: 91,
    situation: "Un passager installe son chien mouillé sur un siège libre du bus en refusant de le descendre pour laisser s'asseoir une personne âgée.",
    alternative: "Caresser l'animal pour l'essuyer sur tes propres vêtements et rester debout."
  },
  {
    id: 92,
    situation: "Un vacancier secoue sa serviette de plage pleine de sable juste au-dessus de toi alors que tu es en train de lire un livre.",
    alternative: "Le remercier pour cette animation naturelle et dépoussiérer ses affaires pour l'aider."
  },
  {
    id: 93,
    situation: "Un conducteur jette son emballage de restauration rapide vide par la portière de sa voiture, qui termine sa course sur ton pare-brise.",
    alternative: "Récupérer le déchet pour aller le jeter dans une poubelle à sa place."
  },
  {
    id: 94,
    situation: "Un collègue de bureau te demande de lui avancer de l'argent pour le repas, puis s'achète des confiseries personnelles avec et refuse de te rembourser le lendemain.",
    alternative: "Lui proposer une nouvelle avance de fonds pour ses futurs achats gourmands."
  },
  {
    id: 95,
    situation: "Un client prend les derniers morceaux de choix au buffet à volonté sous tes yeux, te laissant un plat vide alors que tu patientais derrière lui.",
    alternative: "L'aider à équilibrer son assiette bien garnie et lui souhaiter un excellent appétit."
  },
  {
    id: 96,
    situation: "Un voisin dépose ses poubelles ménagères sur le palier commun pendant plusieurs jours d'affilée en pleine période de forte chaleur estivale.",
    alternative: "Parfumer le palier à tes frais pour atténuer les effluves nauséabonds de ses déchets."
  },
  {
    id: 97,
    situation: "Une agence de location de voitures te facture des frais exorbitants pour une infime poussière invisible sur la moquette intérieure du véhicule.",
    alternative: "Payer la facture sans broncher et leur proposer de repasser l'aspirateur toi-même pour la prochaine location."
  },
  {
    id: 98,
    situation: "Un invité monopolise la conversation pendant toute une soirée pour parler de sa réussite financière et de ses investissements boursiers imaginaires.",
    alternative: "L'écouter avec un intérêt de façade et lui demander des conseils pour tes placements futurs."
  },
  {
    id: 99,
    situation: "Un spectateur dans la file d'attente d'une salle de spectacle te pousse régulièrement du coude pour tenter de gagner quelques places vers l'entrée.",
    alternative: "Lui céder le passage avec un sourire amical pour soulager son impatience pressante."
  },
  {
    id: 100,
    situation: "Un utilisateur de réseaux professionnels explique que les stagiaires ne devraient pas recevoir d'indemnités financières pour pouvoir prouver leur véritable passion entrepreneuriale sans mercantilisme.",
    alternative: "Partager son post avec enthousiasme en qualifiant son approche de 'brillante démonstration de leadership désintéressé'."
  }
];

// Rendre les questions disponibles globalement
window.quizQuestions = quizQuestions;
