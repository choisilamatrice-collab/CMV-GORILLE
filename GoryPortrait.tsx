// Gory officiel : une illustration par stade d'évolution.
// Les images sont dans public/gory/ (bebe, jeune, guerrier, legendaire, + versions -f).
import type { GorySex, StageId } from './progression';
import type { GoryMood } from './GoryAvatar';

// Mâle : bebe.webp… / Femelle : bebe-f.webp…
export function goryImage(stage: StageId, sex: GorySex = 'male'): string {
  return `/gory/${stage}${sex === 'female' ? '-f' : ''}.webp`;
}

interface Props {
  stage: StageId;
  sex?: GorySex;
  name: string;
  mood?: GoryMood;
  glow?: boolean; // récompense : halo lumineux
  size?: number;
  onClick?: () => void;
}

export default function GoryPortrait({ stage, sex = 'male', name, mood = 'idle', glow = false, size = 300, onClick }: Props) {
  const classes = ['gp', `gp--${mood}`, glow ? 'gp--glow' : '', stage === 'legendaire' ? 'gp--legend' : '', onClick ? 'gory--clickable' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes} style={{ width: size }} onClick={onClick} role="img" aria-label={name}>
      <img src={goryImage(stage, sex)} alt="" draggable={false} />
    </div>
  );
}
