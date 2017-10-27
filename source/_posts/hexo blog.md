---
title: hexo blog
date: 2017-10-19
tags: hexo
---
# 步骤

>*  搭建环境准备（包括node.js和git环境，gitHub账户的配置）
>*  安装Hexo
>*  配置Hexo
>*  怎样将Hexo与github page 联系起来
>*  怎样发布文章
>*  主题 推荐
>*  主题Net的简单配置
>*  添加sitemap和feed插件
>*  添加404 公益页面

-----
## 搭建环境准备
hexo是基于node.js的博客框架，具有方便简洁的强大功能，也可以成为她是一个方便简介的静态博客生成器。需要有一些前提准备

1. node.js环境
2. git 版本管理
3. github账户

## 安装hexo
node.js中已经集成了npm包管理器，直接用npm安装即可，因为npm在国内安装比较慢，容易出错，可以先配置国内的镜像源，一般都是用`淘宝镜像`
```
npm install hexo -g
```
安装完后，验证是否安装成功
```
hexo -v
```
如果有输出hexo版本号，则说明安装成功了

------
创建项目文件夹,可以用命令行创建，也可以鼠标操作新建文件夹
```
//在E盘中创建myhexo文件夹作为项目文件夹
md e:\myHexo
//进入到项目文件中
cd e:\myhexo
```

hexo初始化
```
hexo init
```
安装依赖
```
hexo install
```
等待npm安装完成后，hexo的安装就算告一段落，现在就可以使用hexo来写博客
体验hexo
```
hexo s
```
然后会输出`INFO Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.`
在浏览器中打开[http://localhost:4000/](http://localhost:4000/),就能看到hexo的官网，也表明Hexo在本地的配置完全结束。
## 怎样将Hexo与github page 联系起来
这里需要配置个人信息，但是基本上都会在使用git和github的时候配置了个人信息和秘钥的配置，这里不做赘述，直接进入hexo和github page之间的配置
#### 配置Deployment
在_config.yml文件中，找到Deployment，然后按照如下修改：
```
deploy:
  type: git
  repo: git@github.com:yourname/yourname.github.io.git
  branch: master
```
比如我的仓库的地址是git@github.com:easycrew/easycrew.github.io.git，所以配置如下
```
deploy:
  type: git
  repo: git@github.com:easycrew/easycrew.github.io.git
  branch: master
```
## 开始使用hexo 写博客咯
创建咱们的第一篇博客
```
hexo new "my-first-blog"
```
这时候在我的 电脑的目录下 E:\myhexo\source\ _posts 将会看到 my-first-blog.md 文件
编辑文章，写入一些自己想要的内容，编辑完后，就可以执行生成、部署命令
**hexo 常用的命令和简写形式**
>   hexo n "我的博客" == hexo new "我的博客" #新建文章
    hexo p == hexo publish
    hexo g == hexo generate#生成
    hexo s == hexo server #启动服务预览
    hexo d == hexo deploy#部署
    
```
//生成博客
hexo g
//启动本地服务器，在本地预览
hexo s
//部署到github中
hexo d
//生成和部署也可以合并写在一起
//在部署前先生成博客
//  hexo d -g
```
部署成功后访问 你的地址，https://yourName.github.io（这里输入我的地址： https://easycrew.github.io ),将可以看到生成的文章。
