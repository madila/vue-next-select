{
  const jsCode = Vue.computed(() =>
    isCompositionApi.value
      ? `
import { ref, createApp } from 'vue'
import VueSelect from 'vue-next-select'

createApp({
  components: {
    VueSelect
  },
  setup() {
    const model = ref(null)

    const options = [
      { language: 'JavaScript' },
      { language: 'Python' },
      { language: 'PHP' }
    ]

    return {
      model,
      options
    }
  }
}).mount('#app')
`.trim()
      : `
import { ref, createApp } from 'vue'
import VueSelect from 'vue-next-select'

const app = new Vue({
  el: '#app',
  components: {
    VueSelect
  },
  data() {
    return {
      model: null,
      options: [
        { language: 'JavaScript' },
        { language: 'Python' },
        { language: 'PHP' },
      ],
    }
  },
})
`.trim(),
  )

  const htmlCode = `
<vue-select
  v-model="model"
  :options="options"
  label-by="language"
  :min="1"
></vue-select>
`.trim()

  const { ref, createApp } = Vue

  const app = createApp({
    name: 'app',
    setup() {
      const model = ref(null)

      const options = [{ language: 'JavaScript' }, { language: 'Python' }, { language: 'PHP' }]

      return {
        model,
        options,

        jsCode,
        htmlCode,
      }
    },
    template: `
      <vue-select
        v-model="model"
        :options="options"
        label-by="language"
        :min="1"
      ></vue-select>
      <pre class="result"><code class="plaintext">{{ model }}</code></pre>

      <p><i>Code sample:</i></p>
      <pre><code class="html">{{ htmlCode }}</code></pre>
      <pre><code class="javascript">{{ jsCode }}</code></pre>
    `,
  })

  app.component('vue-select', VueNextSelect)
  app.mount('#single-select')
}
