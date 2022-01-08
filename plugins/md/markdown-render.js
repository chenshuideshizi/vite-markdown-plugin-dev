import MarkdownIt from 'markdown-it'
// import { highlight } from './plugins/highlight';
import { componentPlugin } from './plugins/component';
import { highlightLinePlugin } from './plugins/highlightLines';

export const markdownRender = (src) => {
    const markdownIt = MarkdownIt({
        html:  true,
        linkify: false,
        // highlight
    })

    markdownIt.use(componentPlugin)
        .use(highlightLinePlugin)
        // .use(componentPlugin)
        // .use(preWrapperPlugin)
        // .use(snipperPlugin)
        // .use(hoistPlugin)
        // .use(containerPlugin)
        // .use(extractHeaderPlugin)
        // .use(linkPlugin, {
        //     target: '_blank',
        //     rel: 'noopener noreferrer'
        // })

    const  html = markdownIt.render(src)
    return ({
        html,
        data: {}
    })
}