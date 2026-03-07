import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import LazyImg from '../../../../shared/ui/LazyImg';
import * as m from '../../../../styles/markdownStyles.css';

type Props = {
  markdown: string;
};

export default function ProjectMarkdown({ markdown }: Props) {
  return (
    <article className={m.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [rehypeHighlight, { detect: true, ignoreMissing: true }],
        ]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 {...props} className={m.h1}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 {...props} className={m.h2}>
              {children}
            </h2>
          ),
          p: ({ children, ...props }) => (
            <p {...props} className={m.p}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul {...props} className={m.ul}>
              {children}
            </ul>
          ),
          img: ({ src = '', alt = '', ...props }) => (
            <LazyImg src={src} alt={alt} {...props} />
          ),
          a: ({ children, ...props }) => (
            <a
              {...props}
              className={m.link}
              target='_blank'
              title='새창열림'
              rel='noreferrer'
            >
              {children}
            </a>
          ),
          table: ({ ...props }) => (
            <div className={m.tableScroll}>
              <table {...props} />
            </div>
          ),
          // 핵심: inline code vs code block 분리
          code: ({ className, children, ...props }) => {
            const isBlock = className?.includes('language-');
            if (!isBlock) {
              return (
                <code {...props} className={m.markInlineCode}>
                  {children}
                </code>
              );
            }
            // rehype-highlight가 pre/code 구조에 class를 붙여 하이라이트함
            return (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },

          // quote → 카드 스타일
          blockquote: ({ children, ...props }) => {
            return (
              <blockquote {...props} className={m.quoteCard}>
                {children}
              </blockquote>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
