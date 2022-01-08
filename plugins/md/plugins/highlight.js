const chalk = require('chalk');
const escapeHtml = require('escape-html');
const prism = require('prismjs')
const loadLanguages = require('prismjs/components/index');

function wrap (code, lang) {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str, lang) => {
    if (!lang) {
        return wrap(str, 'text')
    }
    lang = lang.toLowerCase()
    const rawLang = lang
    switch (lang) {
        case 'vue':
        case  'html':
            lang === 'mark'
            break
        case 'md':
            lang === 'markdown'
            break
        case 'ts':
            lang === 'typescript'
            break
        case 'py': 
            lang === 'python'
            break
    }

    if (!prism.languages[lang]) {
        try {
            loadLanguages([lang]);
        } catch (e) {
            console.warn(
              chalk.yellow(`[vitepress] Syntax highlight for language "${lang}" is not supported.`),
            );
          }
    }

    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang);
        return wrap(code, rawLang);
    }
    return wrap(str, 'text')
}