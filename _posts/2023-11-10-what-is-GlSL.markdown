---
layout: post
title:  What is GLSL?
categories: ["GLSL","GPU","Graphics"] 
---

## What is a Shader?
A GPU Shader is a special type of program crafted specifically to run via the GPU. The advantage of running a program on the GPU is that unlike the CPU, the GPU excels at high-throughput parallel processing. In non-fancy words, this means programs run on the GPU can run massive amounts of computations that run at the same time. This is a perfect process for intensive mathematical operations that are needed in fields like computer graphics and scientific simulation.  Shaders are also just fun because they make you think much more low level, and allow you to utilize the power of the gpu to make really cool visuals.

## What is GLSL?
GLSL (OpenGL Shader Language) is a gpu shader language developed for the openGL graphics api developed by the khronos group. This language closely resembles C in syntax, but otherwise is very different. 

## What is a .frag file?
A .frag file is a fragment shader file, there are multiple types of shaders that relate to their function in the graphics pipeline. A fragment shader is meant to operate on and for and individual pixel of the end image, meaning that a copy of the fragment shader is ran for each individual pixel in the defined image, whether that be a image file, or the screen you wish to output to.

### A collection of my shaders can be viewed in effect [here](https://www.shadertoy.com/profile/?show=shaders).
### [my GLSL github repo](https://github.com/Jakersnell/GLSL)
