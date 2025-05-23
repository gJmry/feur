## Prérequis

Assurez-vous d’avoir les éléments suivants installés sur votre machine :

- **PHP >= 8.0**
- **[Composer](https://getcomposer.org/)**
- **[Node.js](https://nodejs.org/)** (avec npm)

## Installation


1. **Installer les dépendances PHP avec Composer :**

   ```bash
   composer install
   ```

2. **Installer les dépendances JavaScript avec npm :**

   ```bash
   npm install
   ```

3. **Configurer l'application :**

   > Créez un fichier `.env.local` à partir du fichier `.env` si nécessaire, et configurez vos paramètres (base de données, etc.).

4. **Lancer l'installation Symfony :**

   ```bash
   php bin/console install
   ```

   > Cette commande peut inclure la création de la base de données, le chargement des fixtures, etc. Assurez-vous que tout est bien configuré dans votre code.
   

## Compilation des assets (optionnel)

Si vous utilisez Webpack Encore :

```bash
npm run dev
```

Ou pour la version de production :

```bash
npm run build
```

---

## Contribution

Les contributions sont les bienvenues ! Merci de créer une issue ou une pull request.

---

## Licence

Ce projet est sous licence MIT.

```
