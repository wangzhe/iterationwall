app.controller('MainController', ['$scope', function ($scope) {

    var millisecondInOneDay = (1000 * 60 * 60 * 24);
    var daysOfEntireCycle = 49;

    var year = '2016'
    var month = '01' //oct
    var day = '24'
    var initDayOfXSLWorld = new Date(year, month, day);
    var today = Date.now();
    var daysInEntireCycle = Math.floor((today - initDayOfXSLWorld) / millisecondInOneDay % daysOfEntireCycle);

    $scope.day_of_week = today;
    $scope.iterations = [
        {
            iteration_day: "星期三",
            ptl_task: "新迭代数据目标",
            pm_task: "kick-off邀请运营",
            ue_task: "新迭代UI设计工作",
            dev_task: "记得要给测试Showcase",
            test_task: "上迭代回归／新用例",
        },
        {
            iteration_day: "星期四",
            ptl_task: "本职工作／推进方案",
            pm_task: "正常产品规划",
            ue_task: "新迭代UI设计工作",
            dev_task: "记得要给测试Showcase",
            test_task: "上迭代回归完成／新用例",
        },
        {
            iteration_day: "星期五",
            ptl_task: "本质工作",
            pm_task: "正常产品规划",
            ue_task: "正常设计开发",
            dev_task: "今天开发有什么困难及时聊",
            test_task: "测试用例应该差不多了吧",
        },
        {
            iteration_day: "星期六",
            ptl_task: "如果有问题，还是要及时解决",
            pm_task: "没有好不好，只有更适合",
            ue_task: "文艺青年一起high吧",
            dev_task: "来一场旅行",
            test_task: "今天去充电？！",
        },
        {
            iteration_day: "星期日",
            ptl_task: "一天好心情",
            pm_task: "没有好不好，只有更适合",
            ue_task: "文艺青年一起high吧",
            dev_task: "来一场旅行",
            test_task: "今天去充电？！",
        },
        {
            iteration_day: "星期一",
            ptl_task: "Developing",
            pm_task: "Next Iteration Plan",
            ue_task: "This Iteration Design",
            dev_task: "This Iteration Developing",
            test_task: "Warning Dev Showcase",
        },
        {
            iteration_day: "星期二",
            ptl_task: "Developing",
            pm_task: "Next Iteration Plan",
            ue_task: "This Iteration Design",
            dev_task: "This Iteration Developing",
            test_task: "Warning Dev Showcase",
        },
        {
            iteration_day: "星期三",
            ptl_task: "Warning Dev Solution Review",
            pm_task: "Next Iteration Plan",
            ue_task: "This Iteration Design",
            dev_task: "This Iteration Developing",
            test_task: "Warning Dev Showcase",
        },
        {
            iteration_day: "星期四",
            ptl_task: "Warning Dev Integration Review",
            pm_task: "Next Iteration Plan",
            ue_task: "This Iteration Design",
            dev_task: "This Iteration Developing",
            test_task: "Warning Dev Showcase",
        },
        {
            iteration_day: "星期五",
            ptl_task: "Warning Dev Integration Issue",
            pm_task: "Next Iteration Plan",
            ue_task: "Final UX Adjustment",
            dev_task: "Integration Development",
            test_task: "Functional Test",
        },
        {
            iteration_day: "星期六",
            ptl_task: "Everything OK？",
            pm_task: "Think about User Feedback",
            ue_task: "Good Weather, let's photographing",
            dev_task: "No overwork, fingers-cross",
            test_task: "Have a good rest",
        },
        {
            iteration_day: "星期日",
            ptl_task: "kick-off invite Ops",
            pm_task: "Happy Sunday",
            ue_task: "Happy Sunday",
            dev_task: "Happy Sunday",
            test_task: "Happy Sunday",
        },
        {
            iteration_day: "星期一",
            ptl_task: "下迭代技术与设计联合方案",
            pm_task: "下迭代技术与设计联合方案",
            ue_task: "下迭代技术与设计联合方案",
            dev_task: "上线目标临近",
            test_task: "上个迭代回归",
        },
        {
            iteration_day: "星期二",
            ptl_task: "方案落定／下迭代目标编写",
            pm_task: "方案落定",
            ue_task: "方案落定／开始设计",
            dev_task: "客户端封板／其他上线",
            test_task: "封板／上线测试",
        },
        {
            iteration_day: 1,
            ptl_task: "本周进行调整总结",
            pm_task: "缺陷、改善、创新",
            ue_task: "缺陷、改善、创新",
            dev_task: "缺陷、改善、创新",
            test_task: "缺陷、改善、创新",
        }
    ]

    if (daysInEntireCycle >= 42) {
        $scope.iterationsNumber = 4;
        $scope.iteration_days_from_start = (daysInEntireCycle - 42) % 7 + 1;
        $scope.iteration_days_left = 7 - $scope.iteration_days_from_start;
        $scope.iteration = $scope.iterations[14];
    } else {
        $scope.iterationsNumber = Math.floor(daysInEntireCycle / 14) % 3;
        $scope.iteration_days_from_start = daysInEntireCycle % 14 + 1;
        $scope.iteration_days_left = 14 - $scope.iteration_days_from_start;
        $scope.iteration = $scope.iterations[$scope.iteration_days_from_start - 1];
    }
}]);