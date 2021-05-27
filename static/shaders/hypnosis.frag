---
name: hypnosis
type: fragment
uniform.width: { "type": "1f", "value": "0.0" }
uniform.height: { "type": "1f", "value": "0.0" }
uniform.left: { "type": "1f", "value": "0.0" }
uniform.top: { "type": "1f", "value": "0.0" }
---

#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform float width;
uniform float height;
uniform float left;
uniform float top;

void main( void ) {
    vec2 position = vec2(gl_FragCoord.x, height - gl_FragCoord.y) / vec2(width, height) - vec2(left / width, -top / height);
    vec2 xy = cos(gl_FragCoord.xy / resolution.xy + time);

    float l1=length(position);
    float l2=step(0.5,fract(1.0/l1+time/1.8));

    float a=step(0.5,fract(0.1*sin(20.*l1+time*1.)/l1+atan(position.x, position.y)*3.));

    if(a!=l2 && l1>0.05){
        gl_FragColor=vec4(1.0, xy.x, xy.y, 0.3);
    }
}