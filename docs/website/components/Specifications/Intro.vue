<template>
  <div class="intro-container specification-container">
    <p class="title">简介</p>
    <section>
      <p class="title">规范的目的</p>
      <ol class="desc">
        <li>1. 可以规范用户体验的一致性，减少重复提升工作效率。</li>
        <li>2. 对用户体验设计有所限制。</li>
        <li>3. 多人协作，不同的人总会有不同的设计风格和解决方案，为其提供设计指南。</li>
        <li>4. 多平台下统一的用户体验设计，减少重复性工作。</li>
      </ol>
    </section>
    <section>
      <p class="title">谁来用</p>
      <ol class="desc">
        <li>设计师，开发人员和产品设计人员。</li>
        <li>对于设计师，提供设计的指南、设计限制和随时能调用的组件。</li>
        <li>对于开发人员，提供共用的设计组件，统一的设计规则，减少重复开发。</li>
        <li>对于产品人员，在产品需求时，要遵循设计规范的基本原则。</li>
      </ol>
    </section>
    <section>
      <p class="title">设计原则</p>
      <ol class="desc">
        <li>1. 正确的视觉逻辑</li>
        <li>2. 清晰的表达</li>
        <li>3. 用户体验一致性</li>
        <li>4. 注重细节</li>
      </ol>
    </section>
    <section>
      <p class="title">后期维护</p>
      <ol class="desc">
        <li>我们的设计规范会随着产品的变化而不断升级，对于未来的各种不同的变化，需要提供良好的扩展性。在规范实施稳定后应该有固定的人员进行维护升级，更新样式库。</li>
      </ol>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Intro'
}
</script>
<style lang="sass">

.intro-container {

  section {
    ol {
      margin-top: 10px;
      letter-spacing: 0;
    }
  }
}

</style>
