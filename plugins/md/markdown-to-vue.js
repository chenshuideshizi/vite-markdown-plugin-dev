import matter from 'gray-matter'
import  {markdownRender} from './markdown-render'

import fetchCode from './utils/fetchCode'

export const markdownToVue = (src, id) => {
    const { content, data } = matter(src);

    const pageData = {}

    let { html, preData } = markdownRender(content);

    const newContent = data.vueCode
    ? genComponentCode(md, preData, pageData)
    : `
<template><article class="markdown">${html}</article></template>

<script>
export default { pageData: ${JSON.stringify(pageData)} }
</script>
${fetchCode(content, 'style')}
`;


    const result = {
        vueSrc: newContent?.trim(),
        pageData,
    };

    return result;
}

function genComponentCode () {

}