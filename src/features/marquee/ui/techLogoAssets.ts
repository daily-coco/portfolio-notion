const techLogoAsstes = import.meta.glob('/src/assets/images/logo/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

export function getTechLogoSrc(id: string) {
  const src = techLogoAsstes[`/src/assets/images/logo/${id}.png`];

  if (!src) {
    throw new Error(
      `[TechMarquee] ${id} 로고 파일을 찾을 수 없습니다.\n확장자 및 파일 유무 확인해주세요.`
    );
  }

  return src;
}
