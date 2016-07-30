# 使用说明

***
##更新说明（2016-4-6）
web安全还是很复杂的，已经买了一本`《白帽子讲安全》`在路上了。本次根据课程的讲解试着修改了以下几个问题。

- 为了防止xss的注入，主要的方式是前端做转义，后端做过滤，使用了node中的xss模块。
前端中，所有从服务器端获取数据在页面中显示的内容都是用jquery的text()方法显示的，以前使用html()显示会导致输入的脚本被显示出来。
后端使用白名单的方式直接过滤危险的 `< > script`  等等内容。

- 防止csrf注入方面，使用了node中的 `csurf` 模块，在前端产生伪造随机数，在app.js中可以看到。

##更新说明（2016-3-8）
迁移到node.js

安装方法,在根目录下执行

> npm install

服务器默认运行在`3000`端口。
主页的访问路径为：

> localhost:3000

后台的访问路径为：

> localhost:3000/admin

##更新说明（2016-02-29）

增删查改都可以实现，在修改新闻功能使用了直接回传json对象的文件头，
点击表格就能把响应的数据投射到新闻编辑器中。

***

###导入数据库
数据库导出文件为`database.sql`,将表导入mysql数据库中。

***

###配置数据库
数据库的配置在 `./moduls/db.js` 文件中。

请修改相关参数，并使用一个有完整权限的用户进行数据库操作。



***

###后台操作
进行后台操作的文件为

> localhosw:3000/admin

可以进行增删查改的操作.


