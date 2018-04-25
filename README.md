## GLSL utility library

```html
<canvas id="glsl-canvas"></canvas>

<script src="GlslSandbox.js"></script>
<script>
    const canvasSelector = '#glsl-canvas'
    const vertexFile = 'shader.vert'
    const fragmentFile = 'shader.frag'

    let glslSandbox = new GlslSandbox(canvasSelector, vertexFile, fragmentFile)
</script>
```

Default uniforms
```glsl
uniform vec2 iResolution;  // width, height
uniform int iFrame;        // frames since start
uniform float iTime;       // time in seconds since start
```
