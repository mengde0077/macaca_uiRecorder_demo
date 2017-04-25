UI Recorder test sample project
================

It's a UI Recorder test sample project.

Save your test code here.

Get more info: [http://uirecorder.com/](http://uirecorder.com/)

How to run test case?
================

1. npm install
2. source run.sh ( Linux|Mac ) or run.bat ( Windows )

How to dock jenkins?
================

1. Add commands

        source ./install.sh
        source ./run.sh

2. Add reports

    > JUnit: reports/index.xml

    > HTML: reports/

录制：
uirecorder start --mobile sample/test.IOS3.js

回放：
source run.sh sample/test.IOS3.js

执行固化用例：
source run.sh testsuite/test.B2C.3.0.3.js