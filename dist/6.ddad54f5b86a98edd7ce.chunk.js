webpackJsonp([6],{1046:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),Dashboard=function(){function Dashboard(){}return Dashboard=__decorate([core_1.Component({selector:"dashboard",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1109)],template:__webpack_require__(1134)}),__metadata("design:paramtypes",[])],Dashboard)}();exports.Dashboard=Dashboard},1047:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),theme_1=__webpack_require__(77),LineChartService=function(){function LineChartService(_baConfig){this._baConfig=_baConfig}return LineChartService.prototype.getData=function(){var layoutColors=this._baConfig.get().colors,graphColor=this._baConfig.get().colors.custom.dashboardLineChart;return{type:"serial",theme:"blur",marginTop:15,marginRight:15,responsive:{enabled:!0},dataProvider:[{date:new Date(2012,11),value:0,value0:0},{date:new Date(2013,0),value:15e3,value0:19e3},{date:new Date(2013,1),value:3e4,value0:2e4},{date:new Date(2013,2),value:25e3,value0:22e3},{date:new Date(2013,3),value:21e3,value0:25e3},{date:new Date(2013,4),value:24e3,value0:29e3},{date:new Date(2013,5),value:31e3,value0:26e3},{date:new Date(2013,6),value:4e4,value0:25e3},{date:new Date(2013,7),value:37e3,value0:2e4},{date:new Date(2013,8),value:18e3,value0:22e3},{date:new Date(2013,9),value:5e3,value0:26e3},{date:new Date(2013,10),value:4e4,value0:3e4},{date:new Date(2013,11),value:2e4,value0:25e3},{date:new Date(2014,0),value:5e3,value0:13e3},{date:new Date(2014,1),value:3e3,value0:13e3},{date:new Date(2014,2),value:1800,value0:13e3},{date:new Date(2014,3),value:10400,value0:13e3},{date:new Date(2014,4),value:25500,value0:13e3},{date:new Date(2014,5),value:2100,value0:13e3},{date:new Date(2014,6),value:6500,value0:13e3},{date:new Date(2014,7),value:1100,value0:13e3},{date:new Date(2014,8),value:17200,value0:13e3},{date:new Date(2014,9),value:26900,value0:13e3},{date:new Date(2014,10),value:14100,value0:13e3},{date:new Date(2014,11),value:35300,value0:13e3},{date:new Date(2015,0),value:54800,value0:13e3},{date:new Date(2015,1),value:49800,value0:13e3}],categoryField:"date",categoryAxis:{parseDates:!0,gridAlpha:0,color:layoutColors.defaultText,axisColor:layoutColors.defaultText},valueAxes:[{minVerticalGap:50,gridAlpha:0,color:layoutColors.defaultText,axisColor:layoutColors.defaultText}],graphs:[{id:"g0",bullet:"none",useLineColorForBulletBorder:!0,lineColor:theme_1.colorHelper.hexToRgbA(graphColor,.3),lineThickness:1,negativeLineColor:layoutColors.danger,type:"smoothedLine",valueField:"value0",fillAlphas:1,fillColorsField:"lineColor"},{id:"g1",bullet:"none",useLineColorForBulletBorder:!0,lineColor:theme_1.colorHelper.hexToRgbA(graphColor,.15),lineThickness:1,negativeLineColor:layoutColors.danger,type:"smoothedLine",valueField:"value",fillAlphas:1,fillColorsField:"lineColor"}],chartCursor:{categoryBalloonDateFormat:"MM YYYY",categoryBalloonColor:"#4285F4",categoryBalloonAlpha:.7,cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5},dataDateFormat:"MM YYYY",export:{enabled:!0},creditsPosition:"bottom-right",zoomOutButton:{backgroundColor:"#fff",backgroundAlpha:0},zoomOutText:"",pathToImages:theme_1.layoutPaths.images.amChart}},LineChartService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof theme_1.BaThemeConfigProvider&&theme_1.BaThemeConfigProvider)&&_a||Object])],LineChartService);var _a}();exports.LineChartService=LineChartService},1048:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),SiteStatisticsService=function(){function SiteStatisticsService(){}return SiteStatisticsService.prototype.getData=function(){return[{description:"今日浏览人数",stats:"57,820",icon:"person"},{description:"今日留言数",stats:"89,745",icon:"money"},{description:"今天新文章",stats:"178,391",icon:"face"},{description:"我也不知道",stats:"32,592",icon:"refresh"}]},SiteStatisticsService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],SiteStatisticsService)}();exports.SiteStatisticsService=SiteStatisticsService},1049:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),TodoService=function(){function TodoService(){this._todoList=[{text:"标签项，需要增加icon自定义字段"},{text:"发布文章页，在标签和分类为空时缺少提示信息，文章的默认缩略图需调整"},{text:"仪表盘信息聚合（系统信息聚合、百度统计api信息聚合、多说信息聚合）"},{text:"文章发布后自动ping给搜索引擎xml"},{text:"所有无用组件/代码的清理"},{text:"程序截图 + 文档撰写"},{text:"Get in touch with akveo team"},{text:"..."}]}return TodoService.prototype.getTodoList=function(){return this._todoList},TodoService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],TodoService)}();exports.TodoService=TodoService},1109:function(module,exports){module.exports="@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n"},1110:function(module,exports){module.exports=".dashboard-line-chart {\n  width: 100%;\n  height: 340px;\n  margin-top: -10px; }\n"},1111:function(module,exports){module.exports=".pie-charts {\n  color: #ffffff; }\n  .pie-charts .pie-chart-item-container {\n    position: relative;\n    padding: 0 15px;\n    float: left;\n    box-sizing: border-box; }\n    .pie-charts .pie-chart-item-container .card {\n      height: 115px; }\n      .pie-charts .pie-chart-item-container .card .card-body {\n        padding: 15px; }\n  @media screen and (min-width: 1325px) {\n    .pie-charts .pie-chart-item-container {\n      width: 25%;\n      flex: 0 0 25%; } }\n  @media screen and (min-width: 700px) and (max-width: 1325px) {\n    .pie-charts .pie-chart-item-container {\n      width: 50%;\n      flex: 0 0 50%; } }\n  @media screen and (max-width: 700px) {\n    .pie-charts .pie-chart-item-container {\n      width: 100%;\n      flex: 0 0 100%; } }\n  .pie-charts .pie-chart-item {\n    position: relative; }\n    .pie-charts .pie-chart-item .chart-icon {\n      position: absolute;\n      right: 0;\n      top: 3px; }\n  @media screen and (min-width: 1325px) and (max-width: 1650px), (min-width: 700px) and (max-width: 830px), (max-width: 400px) {\n    .pie-charts .chart-icon {\n      display: none; } }\n  .pie-charts .description {\n    display: inline-block;\n    padding: 15px 0 0 20px;\n    font-size: 18px;\n    opacity: 0.9; }\n    .pie-charts .description .description-stats {\n      padding-top: 20px;\n      font-size: 24px; }\n  .pie-charts .angular {\n    margin-top: 100px; }\n  .pie-charts .angular .chart {\n    margin-top: 0; }\n"},1112:function(module,exports){module.exports="input.task-todo {\n  margin-bottom: 8px; }\n\nul.todo-list {\n  margin: 0;\n  padding: 0; }\n  ul.todo-list li {\n    margin: 0 0 -1px 0;\n    padding: 12px;\n    list-style: none;\n    position: relative;\n    border: 1px solid #32373c;\n    cursor: grab;\n    height: 42px; }\n    ul.todo-list li i.remove-todo {\n      position: absolute;\n      cursor: pointer;\n      top: 0px;\n      right: 12px;\n      font-size: 32px;\n      transition: color 0.2s;\n      color: rgba(50, 55, 60, 0.5);\n      visibility: hidden;\n      line-height: 42px; }\n      ul.todo-list li i.remove-todo:hover {\n        color: #32373c; }\n    ul.todo-list li:hover i.remove-todo {\n      visibility: visible; }\n    ul.todo-list li.checked .todo-text {\n      color: #ffffff; }\n    ul.todo-list li.checked:before {\n      background: #32373c !important; }\n    ul.todo-list li i.mark {\n      display: block;\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      height: 42px;\n      min-width: 4px;\n      background: #32373c;\n      cursor: pointer;\n      transition: min-width 0.3s ease-out; }\n    ul.todo-list li.active i.mark {\n      min-width: 40px; }\n    ul.todo-list li.active label.todo-checkbox > span:before {\n      color: white;\n      content: '\\f10c';\n      margin-right: 20px;\n      transition: margin-right 0.1s ease-out;\n      transition-delay: 0.2s;\n      float: none; }\n    ul.todo-list li.active label.todo-checkbox > input:checked + span:before {\n      content: '\\f00c'; }\n\nlabel.todo-checkbox {\n  width: 100%;\n  padding-right: 25px;\n  min-height: 16px;\n  cursor: pointer; }\n  label.todo-checkbox > span {\n    white-space: nowrap;\n    height: 16px; }\n    label.todo-checkbox > span:before {\n      border: none;\n      color: rgba(255, 255, 255, 0.5);\n      transition: all 0.15s ease-out; }\n\n.add-item-icon {\n  display: none; }\n\n.ng2 .task-todo-container .todo-panel.panel, .blur .task-todo-container .todo-panel.panel {\n  color: white;\n  opacity: 0.9; }\n\n.ng2 .task-todo-container input.task-todo, .blur .task-todo-container input.task-todo {\n  color: white;\n  width: calc(100% - 25px);\n  border-radius: 0;\n  border: none;\n  background: transparent; }\n  .ng2 .task-todo-container input.task-todo:focus, .blur .task-todo-container input.task-todo:focus {\n    outline: none;\n    background-color: transparent;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n\n.ng2 .task-todo-container .add-item-icon, .blur .task-todo-container .add-item-icon {\n  display: block;\n  float: right;\n  margin-top: -45px;\n  margin-right: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.ng2 .task-todo-container ul.todo-list li, .blur .task-todo-container ul.todo-list li {\n  margin: 0;\n  border: none;\n  font-weight: 300; }\n  .ng2 .task-todo-container ul.todo-list li .blur-container, .blur .task-todo-container ul.todo-list li .blur-container {\n    height: 40px;\n    position: absolute;\n    width: calc(100% + 40px);\n    top: 0;\n    left: -25px;\n    overflow-y: hidden; }\n  .ng2 .task-todo-container ul.todo-list li:hover .blur-container, .blur .task-todo-container ul.todo-list li:hover .blur-container {\n    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n  .ng2 .task-todo-container ul.todo-list li:hover .blur-box, .blur .task-todo-container ul.todo-list li:hover .blur-box {\n    height: 100%;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);\n    -webkit-filter: blur(3px); }\n  .ng2 .task-todo-container ul.todo-list li i.remove-todo, .blur .task-todo-container ul.todo-list li i.remove-todo {\n    color: white;\n    opacity: 0.4; }\n    .ng2 .task-todo-container ul.todo-list li i.remove-todo:hover, .blur .task-todo-container ul.todo-list li i.remove-todo:hover {\n      color: white;\n      opacity: 0.95; }\n  .ng2 .task-todo-container ul.todo-list li i.mark, .blur .task-todo-container ul.todo-list li i.mark {\n    min-width: 40px;\n    display: none; }\n  .ng2 .task-todo-container ul.todo-list li label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li label.todo-checkbox > span:before {\n    position: absolute;\n    color: #ffffff;\n    content: '\\f10c';\n    float: none;\n    margin-right: 6px;\n    transition: none; }\n  .ng2 .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before {\n    content: '\\f00c'; }\n\n.ng2 .task-todo-container .box-shadow-border, .blur .task-todo-container .box-shadow-border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n  width: calc(100% + 44px);\n  margin-left: -22px; }\n"},1134:function(module,exports){module.exports='<div class="row">\n  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">\n    <site-statistics></site-statistics>\n  </div>\n</div>\n<div class="row">\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="用户来源渠道" \n           baCardClass="traffic-panel medium-card">\n    <!-- <traffic-chart></traffic-chart> -->\n  </ba-card>\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="用户来源地区" \n           baCardClass="medium-card">\n    <!-- <users-map></users-map> -->\n  </ba-card>\n</div>\n<div class="row">\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="今日流量" \n           baCardClass="medium-card">\n    <line-chart></line-chart>\n  </ba-card>\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12" \n           title="待办事项"\n           baCardClass="medium-card with-scroll">\n    <todo></todo>\n  </ba-card>\n</div>\n'},1135:function(module,exports){module.exports='<!-- <ba-am-chart baAmChartClass="dashboard-line-chart" [baAmChartConfiguration]="chartData" (onChartReady)="initChart($event)"></ba-am-chart> -->\r\n'},1136:function(module,exports){module.exports='<div class="row pie-charts">\r\n  <ba-card *ngFor="let chart of charts" \r\n           class="pie-chart-item-container col-xlg-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">\r\n    <div class="pie-chart-item">\r\n      <div class="description">\r\n        <div>{{ chart.description }}</div>\r\n        <div class="description-stats">{{ chart.stats }}</div>\r\n      </div>\r\n      <i class="chart-icon i-{{ chart.icon }}"></i>\r\n    </div>\r\n  </ba-card>\r\n</div>\r\n'},1137:function(module,exports){module.exports='<div class="task-todo-container">\r\n  <input type="text" value="" class="form-control task-todo" placeholder="Task to do.." (keyup)="addToDoItem($event)" [(ngModel)]="newTodoText"/>\r\n  <i (click)="addToDoItem($event)" class="add-item-icon ion-plus-round"></i>\r\n  <div class="box-shadow-border"></div>\r\n\r\n  <ul class="todo-list">\r\n    <li *ngFor="let item of getNotDeleted()" [ngClass]="{checked: item.isChecked, active: item.isActive}"\r\n        (mouseenter)="item.isActive=true" (mouseleave)="item.isActive=false">\r\n\r\n      <div class="blur-container"><div class="blur-box"></div></div>\r\n      <i class="mark" [ngStyle]="{ \'background-color\': item.color }"></i>\r\n      <label class="todo-checkbox custom-checkbox custom-input-success">\r\n        <input type="checkbox" [(ngModel)]="item.isChecked">\r\n        <span class="cut-with-dots">{{ item.text }}</span>\r\n      </label>\r\n      <i class="remove-todo ion-ios-close-empty" (click)="item.deleted = true"></i>\r\n    </li>\r\n  </ul>\r\n</div>\r\n'},1191:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(37),dashboard_component_1=__webpack_require__(1046),routes=[{path:"",component:dashboard_component_1.Dashboard,children:[]}];exports.routing=router_1.RouterModule.forChild(routes)},1192:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}__export(__webpack_require__(1193))},1193:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),lineChart_service_1=__webpack_require__(1047),LineChart=function(){function LineChart(_lineChartService){this._lineChartService=_lineChartService,this.chartData=this._lineChartService.getData()}return LineChart.prototype.initChart=function(chart){var zoomChart=function(){chart.zoomToDates(new Date(2013,3),new Date(2014,0))};chart.addListener("rendered",zoomChart),zoomChart(),chart.zoomChart&&chart.zoomChart()},LineChart=__decorate([core_1.Component({selector:"line-chart",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1110)],template:__webpack_require__(1135)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof lineChart_service_1.LineChartService&&lineChart_service_1.LineChartService)&&_a||Object])],LineChart);var _a}();exports.LineChart=LineChart},1194:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}__export(__webpack_require__(1195))},1195:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),siteStatistics_service_1=__webpack_require__(1048),siteStatistics=function(){function siteStatistics(_siteStatisticsService){this._siteStatisticsService=_siteStatisticsService,this.charts=this._siteStatisticsService.getData()}return siteStatistics=__decorate([core_1.Component({selector:"site-statistics",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1111)],template:__webpack_require__(1136)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof siteStatistics_service_1.SiteStatisticsService&&siteStatistics_service_1.SiteStatisticsService)&&_a||Object])],siteStatistics);var _a}();exports.siteStatistics=siteStatistics},1196:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}__export(__webpack_require__(1197))},1197:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),theme_1=__webpack_require__(77),todo_service_1=__webpack_require__(1049),Todo=function(){function Todo(_baConfig,_todoService){var _this=this;this._baConfig=_baConfig,this._todoService=_todoService,this.dashboardColors=this._baConfig.get().colors.dashboard,this.newTodoText="",this.todoList=this._todoService.getTodoList(),this.todoList.forEach(function(item){item.color=_this._getRandomColor()})}return Todo.prototype.getNotDeleted=function(){return this.todoList.filter(function(item){return!item.deleted})},Todo.prototype.addToDoItem=function($event){1!==$event.which&&13!==$event.which||""==this.newTodoText.trim()||(this.todoList.unshift({text:this.newTodoText,color:this._getRandomColor()}),this.newTodoText="")},Todo.prototype._getRandomColor=function(){var _this=this,colors=Object.keys(this.dashboardColors).map(function(key){return _this.dashboardColors[key]}),i=Math.floor(Math.random()*(colors.length-1));return colors[i]},Todo=__decorate([core_1.Component({selector:"todo",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1112)],template:__webpack_require__(1137)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof theme_1.BaThemeConfigProvider&&theme_1.BaThemeConfigProvider)&&_a||Object,"function"==typeof(_b="undefined"!=typeof todo_service_1.TodoService&&todo_service_1.TodoService)&&_b||Object])],Todo);var _a,_b}();exports.Todo=Todo},799:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(43),forms_1=__webpack_require__(69),nga_module_1=__webpack_require__(258),dashboard_component_1=__webpack_require__(1046),dashboard_routing_1=__webpack_require__(1191),siteStatistics_1=__webpack_require__(1194),lineChart_1=__webpack_require__(1192),todo_1=__webpack_require__(1196),lineChart_service_1=__webpack_require__(1047),siteStatistics_service_1=__webpack_require__(1048),todo_service_1=__webpack_require__(1049),DashboardModule=function(){function DashboardModule(){}return DashboardModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,nga_module_1.NgaModule,dashboard_routing_1.routing],declarations:[siteStatistics_1.siteStatistics,lineChart_1.LineChart,todo_1.Todo,dashboard_component_1.Dashboard],providers:[lineChart_service_1.LineChartService,siteStatistics_service_1.SiteStatisticsService,todo_service_1.TodoService]}),__metadata("design:paramtypes",[])],DashboardModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=DashboardModule}});