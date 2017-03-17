<template>
  <button
  :type="nativeButtonType"
  :disabled="disabled"
  :class="['wd-button', `wd-button-${type}`, {
    'wd-button-ghost': ghost
  }]">
    <label class="wd-button-text"><slot></slot></label>
  </button>
</template>

<script>

/*
 * wd-button
 * @desc 按钮
 * @param nativeButtonType {string} button 原生类型
 * @param type {string} 样式类型
 * @param disabled {boolean} 是否为禁用状态
 * @param ghost {boolean} 是否为幽灵按钮
 */

export default {
  name: 'wd-button',
  props: {
    nativeButtonType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'gray',
          'default',
          'dark'
        ].indexOf(value) > -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">

$button-default-width: 690px;
$button-default-height: 88px;
$button-text-size: 36px;
$button-text-primary-color-normal: #fff;
$button-text-primary-color-pressed: #fff;
$button-text-default-color-normal: #c60a1e;
$button-text-default-color-pressed: #fff;
$button-text-gray-color-normal: #222;
$button-text-gray-color-pressed: #222;
$button-text-dark-color-normal: #fff;
$button-text-dark-color-pressed: #fff;
$button-background-color-primary-normal: #c60a1e;
$button-background-color-primary-pressed: #a50516;
$button-background-color-primary-border: #c60a1e;
$button-background-color-default-normal: #f7f7f7;
$button-background-color-default-pressed: #c60a1e;
$button-background-color-default-border: #c60a1e;
$button-background-color-gray-normal: #f7f7f7;
$button-background-color-gray-pressed: #dddddd;
$button-background-color-gray-border: #9a9a9a;
$button-background-color-dark-normal: transparent;
$button-background-color-dark-pressed: rgba(255,255,255,0.4);
$button-background-color-dark-border: #fff;
$button-border-radius: 8px;
$button-disabled-opacity: 0.4;

.wd-button {
  display: inline-block;
  padding: 0;
  width: $button-default-width;
  border: none;
  height: $button-default-height;
  line-height: $button-default-height;
  text-align: center;
  appearance: none;
  outline: none;
  border-radius: $button-border-radius;
  box-sizing: border-box;

  &-primary {
    background-color: $button-background-color-primary-normal;
    border: 1px solid $button-background-color-primary-border; /* no */
    color: $button-text-primary-color-normal;

    &:active {
      background-color: $button-background-color-primary-pressed;
      color: $button-text-primary-color-pressed;
    }
  }

  &-default {
    background-color: $button-background-color-default-normal;
    border: 1px solid $button-background-color-default-border; /* no */
    color: $button-text-default-color-normal;

    &:active {
      background-color: $button-background-color-default-pressed;
      color: $button-text-default-color-pressed;
    }
  }

  &-gray {
    background-color: $button-background-color-gray-normal;
    border: 1px solid $button-background-color-gray-border; /* no */
    color: $button-text-gray-color-normal;

    &:active {
      background-color: $button-background-color-gray-pressed;
      color: $button-text-gray-color-pressed;
    }
  }

  &-dark {
    background-color: $button-background-color-dark-normal;
    border: 1px solid $button-background-color-dark-border; /* no */
    color: $button-text-dark-color-normal;

    &:active {
      background-color: $button-background-color-dark-pressed;
      color: $button-text-dark-color-pressed;
    }
  }

  &.wd-button-ghost:not(:active) {
    background-color: transparent;
  }

  &[disabled] {
    opacity: $button-disabled-opacity;
  }

  label {
    font-size: $button-text-size; /* px */
  }
}
</style>
