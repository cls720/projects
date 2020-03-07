:::demo
```html
<template>
         <div class="mt30">
            <h3>TextLabel 文本标签</h3>
            <div class="mt30">
               <anchor id="text-label" label="标签内容" h4 ></anchor>
               <text-label></text-label>
           </div>
            <div class="mt30">
                <anchor id="text-label-style" label="inject dataset" h4 ></anchor>
                <text-label-dataset></text-label-dataset>
            </div>
        </div>
</template>
<script>

    import textLabel from './text-label.md'
    import textLabelDataset from './text-label-dataset.md'

    export default{
        name: "text-label-api",
        components: {
            textLabel,
            textLabelDataset
        }
    }
</script>
```
:::