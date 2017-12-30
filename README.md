## ECMAScript 简介

`学习文档` `es6|入门`

---------------------------------
**javascript**是Netscape创造的语言，然后提交给国际标准化组织ECMA规定了浏览器脚本语言的标准ECMAScript

**ECMAScript5.1**以后的版本是**ES6**
es6的版本ECMAScript2015、ECMAScript2016、ECMAScript2017，每年六月发布新的ES6版本

**标准委员会**审核语言流程:
Strawman（展示阶段）=> Proposal（征求意见阶段）=>Draft（草案阶段）=>Candidate（候选人阶段）=>Finished（定案阶段）

**ECMAScript历史**
ECMAScript1.0(1997年)、ECMAScript2.0(1998年6月)、**ECMAScript3.0**(1999年12月)
**ECMAScript4.0**2000年没有通过审核，2007年没有通过审核，2008年中止开发，发布了3.1后改名为ECMAScript5，ECMAScript5.0 在2009年发布，ECMAScript5.1在2011年6月发布
**ECMAScript6**在2013年3月冻结，12月发布草案，2015年6月正式发布

###babel 转码器
（1）配置文件.babelrc转码
```
{
  "presets": ["latest", "react", "stage-2"],
  "plugins": []
}
# 规则集
# 最新规则 babel-preset-latest
# react规则 babel-preset-react
# 不同阶段语法提案的转码规则（共有4个阶段）babel-preset-stage-0
```
（2）babel-cli命令行转码
```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
（3）**babel-register、babel-core、babel-polyfill**
`babel-register`模块改写`require`命令，为它加上一个钩子。此后，每当使用`require`加载`.js、.jsx、.es`和`.es6`后缀名的文件，就会先用 Babel 进行转码。`babel-core`调用babelAPI转码，
（4）其他转码器Traceur

