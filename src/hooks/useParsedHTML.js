/* eslint-disable no-param-reassign */
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

const classMapping = {
  h2: 'title',
  h3: 'subtitle',
  p: 'paragraph',
  ul: 'list-marked',
  ol: 'list-ordered',
  li: 'item',
  blockquote: 'quote',
  pre: 'pre',
  a: 'link',
};

function useParsedHTML(description, classNameBlock) {
  const [parsedHTML, setParsedHTML] = useState(null);

  useEffect(() => {
    if (description) {
      const updatedHTML = parse(description, {
        replace: (domNode) => {
          if (domNode.type === 'tag') {
            const tag = domNode.name;
            if (classMapping[tag]) {
              const className = `${classNameBlock}__${classMapping[tag]}`;
              if (domNode.attribs && domNode.attribs.class) {
                domNode.attribs.class += ` ${className}`;
              } else {
                domNode.attribs = { class: className };
              }
            }
          }
          return domNode;
        },
      });
      setParsedHTML(updatedHTML);
    }
  }, [description]);

  return parsedHTML;
}

export default useParsedHTML;
