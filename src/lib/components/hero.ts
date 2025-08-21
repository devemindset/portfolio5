import fs from 'fs';
import path from 'path';

// Chemin vers le fichier JSON
const heroFilePath = path.join(process.cwd(), 'src/content/components/hero.json');

export function getHeroData() { // Renommé pour plus de clarté
  try {
    const fileContents = fs.readFileSync(heroFilePath, 'utf8');
    const heroData = JSON.parse(fileContents);
    return heroData;
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier hero.json:", error);
    return null; // Ou une valeur par défaut
  }
}