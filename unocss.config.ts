import {
    defineConfig,
    extractorSvelte,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss';

export default defineConfig({
    extractors: [extractorSvelte],
    presets: [
        presetUno(),
        presetAttributify({}),
        presetIcons({
            prefix: 'i-',
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],

})