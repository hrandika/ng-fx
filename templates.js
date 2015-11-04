angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("ng-class-template.html","<section class=\"page\" layout=\"column\">\n  <div class=\"page-title\">\n    <h3 class=\"page-title md-display-1\">\n      ng-class\n    </h3>\n  </div>\n  <div layout=\"row\">\n    <md-card flex=\"60\" class=\"code-example\">\n      <pre>\n        <code lang=\"html\" hljs>\n<div ng-class=\"\'{{vm.demo_config.animation}}\'\" class=\"fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n  <img src=\"\" alt=\"kermit\" />\n</div>\n        </code>\n      </pre>\n    </md-card>\n    <md-card flex=\"30\"\n    ng-class=\"vm.demo_config.animation\"\n    class=\"fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n      <img src=\"imgs/kermit-3.jpg\" alt=\"kermit\" />\n    </md-card>\n  </div>\n</section>\n");
$templateCache.put("ng-if-template.html","<section class=\"page\" layout=\"column\">\n  <div class=\"page-title\">\n    <h3 class=\"page-title md-display-1\">\n      ng-if\n    </h3>\n  </div>\n  <div layout=\"row\">\n    <div flex=\"10\">\n      <md-button class=\"md-raised md-accent\" ng-click=\"vm.show = !vm.show\">\n        toggle\n      </md-button>\n    </div>\n    <md-card flex=\"60\" class=\"code-example\">\n      <pre>\n        <code lang=\"html\" hljs>\n<button ng-click=\"showPic = !showPic\">toggle</button>\n<div ng-if=\"showPic\" class=\"{{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n  <img src=\"\" alt=\"kermit\" />\n</div>\n        </code>\n      </pre>\n    </md-card>\n    <md-card flex=\"30\" ng-if=\"vm.show\"\n    class=\"{{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n      <img src=\"imgs/kermit-2.jpg\" alt=\"kermit\" />\n    </md-card>\n  </div>\n</section>\n");
$templateCache.put("ng-repeat-template.html","<section class=\"page\" layout=\"column\">\n  <div class=\"page-title\">\n    <h3 class=\"page-title md-display-1\">\n      ng-repeat\n    </h3>\n  </div>\n  <div layout=\"row\">\n    <div flex=\"20\">\n      <md-input-container>\n        <label>filter</label>\n        <input ng-model=\"filter\">\n      </md-input-container>\n    </div>\n    <md-card flex=\"60\" class=\"code-example\">\n      <pre>\n        <code lang=\"html\" hljs>\n<input ng-model=\"search\">\n<ul>\n  <li ng-repeat=\"num in nums\"\n  class=\"{{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}} fx-stagger-{{vm.demo_config.stagger}}\">\n  </li>\n</ul>\n        </code>\n      </pre>\n    </md-card>\n  </div>\n  <div layout=\"row\" layout-wrap >\n    <md-card class=\"flex-25 box {{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}} fx-stagger-{{vm.demo_config.stagger}}\"\n    ng-repeat=\"item in vm.items | filter:filter\">\n    {{item.num}}\n    </md-card>\n  </div>\n</section>\n");
$templateCache.put("ng-show-hide-template.html","<section class=\"page\" layout=\"column\">\n  <div class=\"page-title\">\n    <h3 class=\"page-title md-display-1\">\n      ng-show ng-hide\n    </h3>\n  </div>\n  <div layout=\"row\">\n    <div flex=\"10\">\n      <md-button class=\"md-raised md-accent\" ng-click=\"vm.show = !vm.show\">\n        toggle\n      </md-button>\n    </div>\n    <md-card flex=\"60\" class=\"code-example\">\n      <pre>\n        <code lang=\"html\" hljs>\n<button ng-click=\"showPic = !showPic\">toggle</button>\n<div ng-show=\"showPic\"\nclass=\"{{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n  <img src=\"\" alt=\"kermit\" />\n</div>\n        </code>\n      </pre>\n    </md-card>\n    <md-card flex=\"30\" ng-show=\"vm.show\"\n    class=\"{{vm.demo_config.animation}} fx-dur-{{vm.demo_config.speed}} fx-ease-{{vm.demo_config.ease}}\">\n      <img src=\"imgs/kermit.jpg\" alt=\"kermit\" />\n    </md-card>\n  </div>\n</section>\n");}]);