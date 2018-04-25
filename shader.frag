precision highp float;

uniform vec2 iResolution;
uniform int iFrame;
uniform float iTime;

void main() {
    vec2 px = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.5);

    color.r += sin(iTime + px.x) * 0.5;
    color.g += cos(iTime + px.y) * 0.5;
    color.b += cos(float(iFrame) * 0.01) * 0.5;

    gl_FragColor = vec4(color, 1.0);
}
