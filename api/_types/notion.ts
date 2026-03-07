export type NotionRichTextItem = {
  plain_text: string;
};

export type NotionTitleProperty = {
  type: 'title';
  title: NotionRichTextItem[];
};

export type NotionRichTextProperty = {
  type: 'rich_text';
  rich_text: NotionRichTextItem[];
};

export type NotionMultiSelectOption = {
  name: string;
};

export type NotionMultiSelectProperty = {
  type: 'multi_select';
  multi_select: NotionMultiSelectOption[];
};

export type NotionUrlProperty = {
  type: 'url';
  url: string | null;
};

export type NotionDateValue = {
  start: string | null;
  end: string | null;
};

export type NotionDateProperty = {
  type: 'date';
  date: NotionDateValue | null;
};

export type NotionExternalFile = {
  type: 'external';
  external: {
    url: string;
  };
};

export type NotionInternalFile = {
  type: 'file';
  file: {
    url: string;
  };
};

export type NotionFilesProperty = {
  type: 'files';
  files: Array<NotionExternalFile | NotionInternalFile>;
};

export type NotionProperty =
  | NotionTitleProperty
  | NotionRichTextProperty
  | NotionMultiSelectProperty
  | NotionUrlProperty
  | NotionDateProperty
  | NotionFilesProperty;

export type NotionPage = {
  properties?: Record<string, NotionProperty | undefined>;
};

export type NotionDatabaseQueryResponse = {
  results?: NotionPage[];
};
