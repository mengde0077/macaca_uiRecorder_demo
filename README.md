UI Recorder test demo
================

It's a UI Recorder test sample project.

Save your test code here.

Get more info: [http://uirecorder.com/](http://uirecorder.com/)

How to run test case?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows )

#录制官方app
/Users/caolinming/Desktop/githubDir/macaca-sample/macaca-java-biz-sample/app/android-app-bootstrap.zip

如：
# 开启 Macaca 服务
$ macaca server --port 4444 --verbose

#打开元素查看器
app-inspector -u f4301fe8

录制：
uirecorder start --mobile sample/test.IOS3.js

回放：
source run.sh sample/test.IOS3.js

执行固化用例：
source run.sh testsuite/test.B2C.3.0.4.js

How to dock jenkins?
================

1. Add commands

        source ./install.sh
        source ./run.sh

2. Add reports

    > JUnit: reports/index.xml

    > HTML: reports/







