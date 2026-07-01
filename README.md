# 🔴 Une bonne branlée !

> Marre des influenceurs TikTok sur l'escalator ? Des donneurs de leçons condescendants à la pause midi ? Des kékés du tuning sous tes fenêtres à 3h du matin ? 
> 
> **Bienvenue dans le jeu de la justice digitale et populaire.** 

**Une Bonne Branlée** est un jeu de quizz satirique et insolent qui te propose 100 situations de la vie quotidienne face aux pires relous et stéréotypes de notre époque. Deux choix s'offrent à toi à chaque fois... mais un seul est logiquement acceptable. Prépare tes phalanges.

---

## ⚡ Caractéristiques du projet

*   **💥 Moteur d'Impact Tactile** : Chaque clic sur la bonne réponse déclenche une secousse d'écran (`screen shake`), une explosion de particules physiques colorées et une onomatopée géante rétro-comic (*BIM ! PAF ! TARTINE !*) générée précisément à l'endroit de ton curseur.
*   **🔊 Synthèse Sonore en Temps Réel** : Pas de fichiers audio lourds à charger ! L'application utilise la **Web Audio API** pour synthétiser un son de baffe physique instantané (combinaison d'une onde sinusoïdale descendante rapide pour l'impact sourd et d'un bruit blanc filtré pour le claquement de la peau).
*   **🔥 Combo & High Score** : Enchaîne les bonnes réponses pour faire monter ton multiplicateur de Combo et débloquer des animations d'onomatopées de plus en plus géantes. Une seule erreur et le combo retombe à zéro.
*   **🏆 Rangs de fin de partie** : Reçois ton verdict à la fin des 100 questions. Seras-tu une *"Victime professionnelle"* ou obtiendras-tu le titre suprême de *"Légende de la gifle divine"* ?
*   **📱 Design Cyberpunk & Responsive** : Une interface néon sombre de style jeu de combat, qui s'adapte parfaitement sur ordinateur comme sur téléphone mobile avec une image d'accueil immersive en plein écran.

---

## 🛠️ Stack Technique

*   **Frontend** : HTML5 sémantique, CSS3 (variables système, animations clés `@keyframes`, effets de flou et de lueur néo-brutaliste).
*   **Logique** : JavaScript ES Modules (modulaire et optimisé pour le bundling).
*   **Build Tool** : [Vite.js](https://vitejs.dev/) pour un serveur de développement ultra-rapide et une compilation de production optimisée pour les déploiements (Vercel, Netlify, etc.).
*   **Audio** : Web Audio API (oscillateurs et nœuds de gain programmés en JS).

---

## 🚀 Lancement Local

### Prérequis
Avoir installé [Node.js](https://nodejs.org/).

### Installation
1. Clone le dépôt :
   ```bash
   git clone https://github.com/Nody-G/une-bonne-branlee.git
   cd une-bonne-branlee
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```

### Démarrage du serveur de développement
```bash
npm run dev
```
Ouvre ensuite l'adresse locale fournie (généralement `http://localhost:5173`) dans ton navigateur.

### Compilation pour la production
Pour générer les fichiers de production optimisés dans le dossier `dist` :
```bash
npm run build
```
