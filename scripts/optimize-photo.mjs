/**
 * Gera a foto de perfil otimizada para a web.
 *
 * Uso: coloque a foto original em `media/profile-original.jpg` e rode
 *   npm run optimize:photo
 *
 * Saída: `public/profile.webp` (320x320, recorte quadrado centralizado).
 * 320px = 2x o maior tamanho exibido (160px), nítido em telas de alta densidade.
 */
import { stat } from 'node:fs/promises';
import sharp from 'sharp';

const INPUT = 'media/profile-original.jpg';
const OUTPUT = 'public/profile.webp';
const SIZE = 320;

await sharp(INPUT)
  .rotate() // respeita a orientação EXIF de fotos de celular
  .resize(SIZE, SIZE, { fit: 'cover', position: 'attention' })
  .webp({ quality: 80, effort: 6 })
  .toFile(OUTPUT);

const kb = async (path) => ((await stat(path)).size / 1024).toFixed(1);
console.log(`${INPUT} (${await kb(INPUT)} KB) -> ${OUTPUT} (${await kb(OUTPUT)} KB)`);
