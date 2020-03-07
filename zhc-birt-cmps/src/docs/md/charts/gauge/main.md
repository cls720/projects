:::demo
```html
<template>
         <div class="mt30">
            <h3>图片标题</h3>

            <div class="mt30">
               <anchor id="image-title" label="图片标题" h4 ></anchor>
               <md-image-title></md-image-title>
           </div>
        </div>
</template>
<script>

    import MdImageTitle from './image-title.md'

    export default{
        name: "image-title-api",
        components: {
            MdImageTitle
        }
    }
</script>
```
:::