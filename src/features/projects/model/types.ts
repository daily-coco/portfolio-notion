export type SortKey = 'date_desc' | 'date_asc' | 'title_asc';

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  url?: string;
  startDate?: string;
  endDate?: string;
  thumbnailUrl?: string;
  summary?: string;
};
