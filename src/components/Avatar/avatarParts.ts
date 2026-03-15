/**
 * Avatar Parts Catalog
 * Contains all available avatar customization layers
 */

export interface AvatarPart {
  id: number;
  type: 'skin' | 'eyes' | 'eyebrow' | 'facialHair' | 'hair' | 'mouth';
  color?: string;
  image: string;
}

export const AVATAR_PARTS: AvatarPart[] = [
  // ========== SKIN ==========
  {
    id: 1,
    type: 'skin',
    color: '#62391b',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base1.png',
  },
  {
    id: 2,
    type: 'skin',
    color: '#fbdfca',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base2.png',
  },
  {
    id: 3,
    type: 'skin',
    color: '#fae1ab',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base3.png',
  },
  {
    id: 4,
    type: 'skin',
    color: '#ab8b64',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base4.png',
  },
  {
    id: 5,
    type: 'skin',
    color: '#e7bc91',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base5.png',
  },
  {
    id: 6,
    type: 'skin',
    color: '#b16b49',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/base/Base6.png',
  },

  // ========== EYES ==========
  {
    id: 1,
    type: 'eyes',
    color: '#383517',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes1.png',
  },
  {
    id: 2,
    type: 'eyes',
    color: '#65421e',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes2.png',
  },
  {
    id: 3,
    type: 'eyes',
    color: '#aa783e',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes3.png',
  },
  {
    id: 4,
    type: 'eyes',
    color: '#889e94',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes4.png',
  },
  {
    id: 5,
    type: 'eyes',
    color: '#b8a582',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes5.png',
  },
  {
    id: 6,
    type: 'eyes',
    color: '#79bbcb',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes6.png',
  },
  {
    id: 7,
    type: 'eyes',
    color: '#8e9452',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyes/Eyes7.png',
  },

  // ========== EYEBROWS ==========
  {
    id: 1,
    type: 'eyebrow',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyebrow/Eyebrow1.png',
  },
  {
    id: 2,
    type: 'eyebrow',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyebrow/Eyebrow2.png',
  },
  {
    id: 3,
    type: 'eyebrow',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyebrow/Eyebrow3.png',
  },
  {
    id: 4,
    type: 'eyebrow',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyebrow/Eyebrow4.png',
  },
  {
    id: 5,
    type: 'eyebrow',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/eyebrow/Eyebrow5.png',
  },

  // ========== FACIAL HAIR ==========
  {
    id: 1,
    type: 'facialHair',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/facialHair/FacialHair1.png',
  },

  // ========== HAIR ==========
  {
    id: 1,
    type: 'hair',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/hair/Hair1.png',
  },
  {
    id: 2,
    type: 'hair',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/hair/Hair2.png',
  },
  {
    id: 3,
    type: 'hair',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/hair/Hair3.png',
  },

  // ========== MOUTH ==========
  {
    id: 1,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth1.png',
  },
  {
    id: 2,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth2.png',
  },
  {
    id: 3,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth3.png',
  },
  {
    id: 4,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth4.png',
  },
  {
    id: 5,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth5.png',
  },
  {
    id: 6,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth6.png',
  },
  {
    id: 7,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth7.png',
  },
  {
    id: 8,
    type: 'mouth',
    image: 'https://ik.imagekit.io/svccjb2ny/emojiEdit/mouth/Mouth8.png',
  },
];

/**
 * Get avatar part by ID and type
 */
export const getAvatarPart = (id: number | undefined, type: AvatarPart['type']): AvatarPart | undefined => {
  return AVATAR_PARTS.find(part => part.id === id && part.type === type);
};

/**
 * Get all avatar parts by type
 */
export const getAvatarPartsByType = (type: AvatarPart['type']): AvatarPart[] => {
  return AVATAR_PARTS.filter(part => part.type === type);
};

/**
 * Get image URL for a part ID and type
 */
export const getAvatarPartImage = (id: number | undefined, type: AvatarPart['type']): string | null => {
  const part = getAvatarPart(id, type);
  return part?.image || null;
};
