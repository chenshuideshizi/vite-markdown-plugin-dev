import { vueToMarkdown } from './vue-to-markdown'
import { markdownToVue} from '../md/markdown-to-vue'

export default () => {
  const checkCondition = (id) => {
    console.log('id', id)
    return (id.endsWith('.vue') && id.indexOf('/demo/') > -1 && id.indexOf('index.vue') === -1) ||
    id.indexOf('/examples/App.vue') > -1
  }
  return {
    name: 'vueToMdToVue',
    async transform(code, id) {
      if (checkCondition(id)) {
        const res = vueToMarkdown(code, id); // 1. 把 vue 文件转成 markdown
        console.log('res', res)
        return {
          code: res.ignore ? res.vueSrc : markdownToVue(res.vueSrc, id).vueSrc, // 2. markdown 转为 vue
          map: null,
        };
      }
    },
  };
};
