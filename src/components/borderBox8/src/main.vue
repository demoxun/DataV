<template>
  <div class="dv-border-box-8" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <defs>
        <path
          :id="path"
          :d="pathD"
          fill="transparent"
        />
        <radialGradient
          :id="gradient"
          cx="50%" cy="50%" r="50%"
        >
          <stop
            offset="0%" stop-color="#fff"
            stop-opacity="1"
          />
          <stop
            offset="100%" stop-color="#fff"
            stop-opacity="0"
          />
        </radialGradient>

        <mask :id="mask">
          <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
            <animateMotion
              :dur="`${dur}s`"
              :path="pathD"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <polygon :fill="backgroundColor" :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`" />

      <use
        :stroke="mergedColor[0]"
        stroke-width="1"
        :xlink:href="`#${path}`"
      />

      <use
        :stroke="mergedColor[1]"
        stroke-width="3"
        :xlink:href="`#${path}`"
        :mask="`url(#${mask})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import autoResize from '../../../mixin/autoResize'
import { uuid } from '../../../util/index'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

interface Data {
  ref: string;
  path: string;
  gradient: string;
  mask: string;
  defaultColor: string[];
  mergedColor: string[];
}

export default defineComponent({
  name: 'DvBorderBox8',
  mixins: [autoResize],
  props: {
    color: {
      type: Array as PropType<string[]>,
      default: () => ([])
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data (): Data {
    const id = uuid()
    return {
      ref: 'border-box-8',
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,
      defaultColor: ['#235fa7', '#4fd2dd'],
      mergedColor: []
    }
  },
  computed: {
    length (): number {
      // Make sure width and height are treated as numbers
      const width = (this as any).width as number;
      const height = (this as any).height as number;
      return (width + height - 5) * 2;
    },
    pathD (): string {
      const reverse = this.reverse as boolean;
      const width = (this as any).width as number;
      const height = (this as any).height as number;

      if (reverse) return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`;

      return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`;
    }
  },
  watch: {
    color () {
      this.mergeColor();
    }
  },
  methods: {
    mergeColor (): void {
      const { color, defaultColor } = this;
      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || []) as string[];
    }
  },
  mounted (): void {
    this.mergeColor();
  }
})
</script>

<style lang="less">
.dv-border-box-8 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
