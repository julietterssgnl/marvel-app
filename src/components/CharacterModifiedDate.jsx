// Formatage de la date de modification du personnage afin qu'elle soit renvoyé au format "MMM d, RRRR" avec la librairie date-fns
//Afficher la date de modification du personnage (donnée modified d'un personnage) dans un format lisible par un humain
// la date de modification est au format ISO 8601 et ne doit pas être modifiée dans le fichier JSON (sauf éventuellement sur un personnage pour tester le cas d'une date non conforme)

import { format, isValid } from 'date-fns';

export const CharacterModifiedDate = ({ modified }) => {
  if (!modified) {
    return 'Date not available';
  }

  const date = new Date(modified);

  if (!isValid(date)) {
    return 'Invalid date';
  }

  return format(date, 'MMM d, yyyy');
};
