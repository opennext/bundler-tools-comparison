Bundler Tools Comparison

---
这里列出了比较常见的自动化构建工具（Task Runner、module bundler）。  
对grunt、gulp、rollup.js等工具，做了一些简单的demo。

# Grunt - The JavaScript *Task Runner*
Grunt DEMO参考grunt目录  
Sponsored by Bocoup  

|标题|内容|
|-|-|
|官方网站|https://gruntjs.com/|
|中文网站|https://github.com/lisposter/gulp-docs-zh-cn /  http://www.gruntjs.net/|
|Contributors|Ben Alman  |


# Gulp - The streaming *build system*
Automate and enhance your workflow  
Gulp DEMO内容参考gulp目录  
```
npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help
```

|标题|内容|
|-|-|
|官方网站|https://www.gulpjs.com/|
|中文网站|https://www.gulpjs.com.cn/ |
|Contributors|https://github.com/contra|
|get started|https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md|

第三方依赖  

|名称|描述|
|-|-|
|Orchestrator|Define a task using **Orchestrator**. A module for sequencing and executing tasks and dependencies in maximum concurrency  (https://github.com/robrich/orchestrator) |
|vinyl-fs|A Vinyl adapter simply exposes a src(globs) and a dest(folder) method. Each return a stream.   |

# browserify 
browserify is a tool for compiling node-flavored commonjs modules for the browser.  
https://github.com/browserify/browserify-handbook#introduction  

# webpack - a static *module bundler* for modern JavaScript applications
webpack DEMO请参考：https://github.com/opennext/webpack-guides-code

|标题|内容|
|-|-|
|官方网站|https://webpack.js.org/|
|中文网站|https://doc.webpack-china.org/|
|Contributors| Tobias Koppers(https://github.com/sokra) |
  

# Rollup - Next-generation ES6 *module bundler* 

|标题|内容|
|-|-|
|官方网站|https://rollupjs.org/|
|中文网站|https://rollupjs.org/zh|
|Contributors| Rich-Harris(https://github.com/Rich-Harris) |

# Grunt与Gulp对比

|工具|书写方式|任务划分|运行效率|
|-|-|-|-|
|grunt|一切皆配置(如option,src,dest等，不同的插件可能会有自己扩展字段)|树形结构|一般串行|
|gulp|代码采用流式的写法（gulp.src, gulp.pipe, gulp.dest, gulp.watch 接口运用简单）|没有子任务的概念|并行、中间文件只生成于内存|

附录1：[grunt vs gulp](https://www.cnblogs.com/chris-oil/p/5746427.html)  

附录2：[grunt vs gulp项目实现对比](https://zhuanlan.zhihu.com/p/20309820)

附录3：[gulp和grunt的区别](https://www.cnblogs.com/931298654yy/p/6016169.html)
# Grunt、Gulp、webpack、Rollup对比
### 1. gulp与webpack
webpack可以与gulp结合使用  

|工具|定义|相同功能|差 异|
|-|-|-|-|
|webpack|a static *module bundler* for modern JavaScript applications. 一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源|文件合并与压缩/sass/less预编译/启动server/版本控制|规范前端开发流程|
|gulp|The streaming *build system*, Automate and enhance your workflow |同上|模块化开发|

附录4：[gulp与webpack的区别](https://www.cnblogs.com/lovesong/p/6413546.html)




