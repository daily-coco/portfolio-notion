export async function fetchProjectContentBySlug(
  slug?: string,
  signal?: AbortSignal
) {
  if (!slug) {
    throw new Error('slug가 없습니다.');
  }

  const response = await fetch(`/api/projects/slug/${slug}`, { signal });

  if (!response.ok) {
    throw new Error('프로젝트 본문을 불러오지 못했습니다.');
  }

  return response.json();
}
