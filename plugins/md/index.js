
import { markdownToVue } from './markdown-to-vue'

export default (options = {}) => {
    const {root, markdown} = options

    return {
        name: 'mdToVue',
        transform(code, id) {
            // 把 .md 文件转为 vue 文件
            if (id.endsWith('.md')) {
                console.log('id',  id)
                return ({ 
                    code: markdownToVue(code, id).vueSrc, 
                    map:  null
                })
            }
        }
    }

}