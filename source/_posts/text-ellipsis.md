---
title: css单行、多行超出文本显示省略号
date: 2017-07-11 14:50:00
tags:
- css
---
## 单行超出显示省略号
```
  width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
```
## 多行超出显示省略号

```
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
```
