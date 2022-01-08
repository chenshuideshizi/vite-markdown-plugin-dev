import MarkdownIt from 'markdown-it'

export const markdownRender = (src) => {
    const md = MarkdownIt({
        html:  true,
        linkify: false
    })

    const  html = md.render(src)
    return ({
        html,
        data: {}
    })
}