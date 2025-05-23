## ⚙️ Prérequis

Assurez-vous d’avoir les éléments suivants installés sur votre machine :

- **PHP >= 8.0**
- **[Composer](https://getcomposer.org/)**
- **[Node.js](https://nodejs.org/)** (avec npm)
- **MySQL** (ou MariaDB)

---

## 🚀 Installation

1. **Installer les dépendances PHP avec Composer :**

   ```bash
   composer install

2. **Installer les dépendances JavaScript avec npm :**

   ```bash
   npm install
   ```

3. **Configurer la base de données :**

   > **⚠️ IMPORTANT : Ne JAMAIS modifier `.env` !**
   >
   > Copiez plutôt ce fichier en `.env.local` et configurez vos paramètres locaux ici, par exemple :

   ```dotenv
   DATABASE_URL="mysql://root:@127.0.0.1:3306/feur"
   ```

4. **Lancer l'installation Symfony :**

   ```bash
   php bin/console install
   ```

   > Cette commande peut inclure la création de la base de données, la mise en place du schéma, ou le chargement de données de test (fixtures).

---

## 🎨 Compilation des assets (optionnel)

Si vous utilisez Webpack Encore :

```bash
npm run dev
```

Ou pour générer les assets optimisés pour la production :

```bash
npm run build
```

---

## 👨‍💻 Contribution

Merci de suivre les bonnes pratiques suivantes :

### 🏷️ Nommage des branches

Créez une branche à partir de `main`, en suivant ce format :

```
feature/nom-de-la-fonctionnalité
```

Exemples :

* `feature/login-system`
* `feature/user-profile-edit`

### 🔄 Toujours rebase sa branche

Avant de proposer une pull request, mettez à jour votre branche locale :

```bash
git fetch origin
git rebase origin/main
```

Cela permet de garder un historique Git propre et linéaire.

---

## 🛠️ Migrations Doctrine

Quand vous modifiez le schéma de la base de données (via les entités), exécutez les commandes suivantes :

1. **Générer une nouvelle migration :**

   ```bash
   php bin/console doctrine:migrations:diff
   ```

2. **Appliquer les migrations :**

   ```bash
   php bin/console doctrine:migrations:migrate
   ```

3. **(Optionnel) Réinitialiser la base de données :**

   ```bash
   php bin/console doctrine:database:drop --force
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   php bin/console doctrine:fixtures:load
   ```

---

## 📄 Licence

Ce projet est sous licence MIT.
