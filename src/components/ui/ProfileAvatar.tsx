import { useState } from 'react';
import { getInitials } from '../../lib/text';
import type { ProfilePhoto } from '../../types/portfolio';
import { Cursor } from '../terminal/Cursor';

interface ProfileAvatarProps {
  photo: ProfilePhoto;
  /** Nome usado para gerar as iniciais do avatar alternativo. */
  name: string;
}

const AVATAR_SIZE = 'size-32 sm:size-40';

/**
 * Foto de perfil circular. Sem `photo.src` (ou se a imagem falhar ao carregar),
 * exibe as iniciais com cursor de terminal.
 */
export function ProfileAvatar({ photo, name }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(photo.src) && !hasError;

  return (
    <div className="rounded-full border border-term-border-strong p-1.5">
      {showImage ? (
        <img
          src={`${import.meta.env.BASE_URL}${photo.src}`}
          alt={photo.alt}
          width={160}
          height={160}
          fetchPriority="high"
          onError={() => setHasError(true)}
          className={`${AVATAR_SIZE} rounded-full object-cover`}
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className={`${AVATAR_SIZE} grid place-items-center rounded-full border border-term-border bg-linear-to-b from-term-surface-raised to-term-surface`}
        >
          <span className="text-3xl font-bold text-term-bright sm:text-4xl">
            {getInitials(name)}
            <Cursor />
          </span>
        </div>
      )}
    </div>
  );
}
