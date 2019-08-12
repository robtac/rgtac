# Compiling and Bulding Tensorflow on Ubuntu 18.04
[Link to Google's instructions](https://www.tensorflow.org/install/source)  
[Link to GPU support page](https://www.tensorflow.org/install/gpu)  
This is a guide/example of compiling tensorflow on Ubuntu 18.04. If you want to run a version of tensorflow post 1.5 and you don't have a processor which supports the [AVX instruction set](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions), this is the only way to do so.  

## Versions
The version I'm using here is tensorflow 2.0 beta1, with Cuda 10.1 and graphics driver version 418.  
To check the requirements for the version you want to use, [see this page](https://docs.nvidia.com/cuda/archive/10.1/cuda-installation-guide-linux/index.html#system-requirements).

## Installing with GPU support
If you'd like to install tensorflow with GPU support, 