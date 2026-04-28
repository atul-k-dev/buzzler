const gl = require('gl')(256, 256);

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;
uniform float uIsLight;
uniform vec3 uColor;
uniform float uUseColor;

vec4 buf[8];
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}

mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);

vec3 hueShiftRGB(vec3 col,float deg){
    vec3 yiq=rgb2yiq*col;
    float rad=radians(deg);
    float cosh=cos(rad),sinh=sin(rad);
    vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);
    return clamp(yiq2rgb*yiqShift,0.0,1.0);
}

vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}

vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
    return vec4(1.0); // Simplified for testing
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 uv=fragCoord/uResolution.xy*2.-1.;
    uv.y*=-1.;
    uv+=uWarp*vec2(sin(uv.y*6.283+uTime*0.5),cos(uv.x*6.283+uTime*0.5))*0.05;
    fragColor=cppn_fn(uv,0.1*sin(0.3*uTime),0.1*sin(0.69*uTime),0.1*sin(0.44*uTime));
}

void main(){
    vec4 col;mainImage(col,gl_FragCoord.xy);
    col.rgb=hueShiftRGB(col.rgb,uHueShift);
    float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.5+0.5;
    col.rgb*=1.-(scanline_val*scanline_val)*uScan;
    col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
    
    if (uUseColor > 0.5) {
        float lum = dot(col.rgb, vec3(0.299, 0.587, 0.114));
        if (uIsLight > 0.5) {
            lum = 1.0 - lum;
            col.rgb = mix(vec3(1.0), uColor, (1.0 - lum) * 1.5);
        } else {
            col.rgb = mix(vec3(0.0), uColor, lum * 1.5);
        }
    } else {
        if (uIsLight > 0.5) {
            col.rgb = 1.0 - col.rgb;
        }
    }
    
    gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);
}
`;

const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vertex);
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error("VS:", gl.getShaderInfoLog(vs));
}

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fragment);
gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error("FS:", gl.getShaderInfoLog(fs));
} else {
    console.log("SUCCESS!");
}
