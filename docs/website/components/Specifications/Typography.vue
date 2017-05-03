<template>
  <div class="typography-container specification-container">
    <p class="title">字体排版</p>
    <section>
      <header class="title">字体</header>
      <p class="desc">开发字体主要以主流操作系统字体为准。</p>
      <div class="gallery">
        <div class="board">
          <p class="os">iOS</p>
          <p class="zh-cn">默认中文：<span>苹方黑体</span></p>
          <p class="en-us">默认英文：<span>Helvetica Neue</span></p>
        </div>
        <div class="board">
          <p class="os">Android</p>
          <p class="zh-cn">默认中文：<span>思源黑体</span></p>
          <p class="en-us">默认英文：<span>Roboto</span></p>
        </div>
        <div class="board">
          <p class="os">H5</p>
          <p class="zh-cn">默认中文：<span>以系统为准</span></p>
          <p class="en-us">默认英文：<span>以系统为准</span></p>
        </div>
      </div>
    </section>
    <section>
      <header class="title">字体样式</header>
      <p class="desc">APP内字体有两种使用样式，常规体（Regular）和加粗体（Bold）。</p>
      <div class="gallery">
        <div class="board-weight">
          <span class="weight-example regular">Aa</span>
          <span class="weight-type regular">Regular</span>
        </div>
        <div class="board-weight">
          <span class="weight-example bold">Aa</span>
          <span class="weight-type bold">Bold</span>
        </div>
      </div>
    </section>
    <section>
      <header class="title">字体排版</header>
      <p class="desc">字体排版是一个集合，提供了文字使用的扩展情况。使用较多的字体大小集中在18pt，16pt，14pt，12pt之中。文字之间的组合在相应的组件中会有所体现。</p>
    </section>
    <section>
      <header class="title">字体大小</header>
      <ul class="size">
        <li>
          <div class="info">
            <header>Display1</header>
            <p>字号：48pt，48sp</p>
            <p>行高：60pt，60sp</p>
          </div>
          <div class="size-desc">
            <p>支付SDK，价格等</p>
          </div>
          <div class="example" style="font-size: 48px;">苹方/思源 96px</div>
        </li>
        <li>
          <div class="info">
            <header>Display2</header>
            <p>字号：36pt，36sp</p>
            <p>行高：44pt，44sp</p>
          </div>
          <div class="size-desc">
            <p>特殊文字，价格等</p>
          </div>
          <div class="example" style="font-size: 48px;">苹方/思源 72px</div>
        </li>
        <li>
          <div class="info">
            <header>Display3</header>
            <p>字号：32pt，32sp</p>
            <p>行高：44pt，44sp</p>
          </div>
          <div class="size-desc">
            <p>特殊文字，价格，特殊标题等</p>
          </div>
          <div class="example" style="font-size: 48px;">苹方/思源 64px</div>
        </li>
        <li>
          <div class="info">
            <header>Headline1</header>
            <p>字号：24pt，24sp</p>
            <p>行高：32pt，32sp</p>
          </div>
          <div class="size-desc">
            <p>文章标题</p>
          </div>
          <div class="example" style="font-size: 48px;">苹方/思源 48px</div>
        </li>
        <li>
          <div class="info">
            <header>Headline2</header>
            <p>字号：20pt，20sp</p>
            <p>行高：28pt，28sp</p>
          </div>
          <div class="size-desc">
            <p>文章标题，特殊文字</p>
          </div>
          <div class="example" style="font-size: 40px;">苹方/思源 40px</div>
        </li>
        <li>
          <div class="info">
            <header>Title</header>
            <p>字号：18pt，18sp</p>
            <p>行高：26pt，26sp</p>
          </div>
          <div class="size-desc">
            <p>列表，文章正文，按钮，弹窗</p>
            <p>Topbar Title（最常用字号）</p>
          </div>
          <div class="example" style="font-size: 36px;">苹方/思源 36px</div>
        </li>
        <li>
          <div class="info">
            <header>Body1</header>
            <p>字号：16pt，16sp</p>
            <p>行高：24pt，24sp</p>
          </div>
          <div class="size-desc">
            <p>正文，子标题，正文标题，按钮，列表</p>
            <p>弹窗（最常用的字号）</p>
          </div>
          <div class="example" style="font-size: 32px;">苹方/思源 32px</div>
        </li>
        <li>
          <div class="info">
            <header>Body2</header>
            <p>字号：14pt，14sp</p>
            <p>行高：20pt，20sp</p>
          </div>
          <div class="size-desc">
            <p>正文，正文标题，按钮，弹窗</p>
            <p>列表（最常用的字号）</p>
          </div>
          <div class="example" style="font-size: 28px;">苹方/思源 28px</div>
        </li>
        <li>
          <div class="info">
            <header>Caption1</header>
            <p>字号：12pt，12sp</p>
            <p>行高：18pt，18sp</p>
          </div>
          <div class="size-desc">
            <p>辅助文字，描述性文字</p>
          </div>
          <div class="example">
            <span style="font-size: 24px;">苹方/思源 24px</span>
            <span class="extra">（H5最小可用字号）</span>
          </div>
        </li>
        <li>
          <div class="info">
            <header>Caption2</header>
            <p>字号：10pt，10sp</p>
            <p>行高：16pt，16sp</p>
          </div>
          <div class="size-desc">
            <p>辅助文字，描述性文字</p>
          </div>
          <div class="example">
            <span style="font-size: 20px;">苹方/思源 20px</span>
            <span class="extra">（H5不可用字号）</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Typography'
}
</script>
<style lang="sass">

.typography-container {
  section {
    .gallery {
      display: flex;
      flex-wrap: wrap;

      .board {
        margin-top: 10px;
        margin-right: 30px;
        padding: 16px 27px;
        flex: 1;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 2px;
        box-sizing: border-box;
        color: #737373;

        .os {
          font-size: 18px;
          line-height: 25px;
        }
        .zh-cn {
          margin-top: 8px;
          font-size: 14px;
          line-height: 24px;

          span {
            color: #222222;
            font-weight: bold;
          }
        }
        .en-us {
          font-size: 14px;
          line-height: 24px;

          span {
            color: #222222;
            font-weight: bold;
          }
        }
      }

      .board-weight {
        display: flex;
        margin-top: 10px;
        margin-right: 30px;
        padding: 16px 27px;
        flex: 1;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 2px;
        box-sizing: border-box;
        color: #737373;
        alien-items: center;

        .weight-example {
          margin-right: 30px;
          font-size: 80px;
          color: #737373;
          line-height: 80px;
        }
        .weight-type {
          margin-top: 10px;
        }
        .bold {
          font-weight: bold;
        }
      }
    }

    .size {
      margin-top: 35px;

      li {
        display: flex;
        min-height: 123px;
        border-bottom: 1px solid #cacaca;

        &:first-child {
          border-top: 1px solid #cacaca;
        }

        .info {
          width: 170px;

          header {
            margin-top: 20px;
            font-size: 18px;
            color: #eb4935;
            line-height: 25px;
          }
          p {
            font-size: 14px;
            color: #222;
            line-height: 24px;

            &:first-of-type {
              margin-top: 10px;
            }
          }
        }
        .size-desc {
          flex: 1.2;

          p {
            font-size: 14px;
            line-height: 24px;

            &:first-child {
              color: #666;
              margin-top: 55px;
            }
            &:nth-child(2) {
              color: #212121;
            }
          }
        }
        .example {
          display: flex;
          flex: 1.5;
          align-items: center;
          margin: 20px 0 20px 20px;
          color: #404040;

          span:first-child {
            min-width: 120px;
          }
          .extra {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #eb4935;
          }
        }
      }
    }
  }
}

</style>
