
<template>
    <div>Home</div>
    <MdIntroduce />
    <DemoBanner />
</template>

<script>
import MdIntroduce from './docs/introduce.md'
import DemoBanner from './demo/banner.vue'
console.log(MdIntroduce)
import { defineComponent } from 'vue'

export default {
    components: {
        MdIntroduce,
        DemoBanner
    },

}
</script>
