# ng-spin
##### $http interceptor spinner for angular.js

Sometimes, you just need to show a spinning animation for some or every `$http` (ajax) request. This module makes your life easier by providing global, request specific and manual/non-http option to show/hide spinner. Shipped with multiple spinner types made by **[tobiasahlin](http://tobiasahlin.com/spinkit/)**.

***

## Install


#### Bower
```
bower install ng-spin
```

#### npm
```
npm install ng-spin
```

> Include `angular.min.js`, `ng-spin.min.js` and `ng-spin.min.css`
>
> Add `thatisuday.ng-spin` module to your app's dependencies list.

***

## Config

```
angular
.module('myApp', ['thatisuday.ng-spin'])
.config(function(ngSpinOpsProvider){
	ngSpinOpsProvider.setOps({
		autoGlobal : false,
		spinner : 'big-bang',
		size : 'normal',
		color : '#333',
		position : 'right-top',
		blocking : false
	});
})
```

| option | values | default | role | 
| ------ | ------ | ------- | ---- |
| autoGlobal | true/false | false | show spinner for every $http request (automatically) |
| spinner | bars, big-bang, binary, cubes, flipboard, ping, plane, snake, sos, worm | big-bang | choose spinner animation type |
| size | normal, sm, xs | normal | size of the spinner |
| color | hex, rgba | #333 | color of the spinner |
| position | left-top, right-top, left-bottom, right-bottom, center | right-top | position of the spinner on the page |
| blocking | false, white, black, transparent | false | show page overlay for spinner |


***

## Implement (use)

### Global (auto)
If you are setting `autoGlobal` in config to `true` then you pretty much done here. All your `$http` requests will be intercepted by `ng-spin` and spinner will be shown.

But If you want to show animation manually, then there are two other options as mentioned below.

### Request specific

```
$http({
	url : 'api.ofawebsite.com/user/me',
	method : 'POST',
	ngSpin : true
})
```

Setting `ngSpin` to true in `request` object of a `$http` request will trigger `ng-spin` interceptor to show spinner for that request.

### Manual

You can use `$ngSpin` service which returns `start` and `stop` method for spinner.

```
myApp.controller(function($ngSpin, $scope){
	$scope.loadData = function(){
		$ngSpin.start();

		$http({...}).then(function(res){
			$ngSpin.stop();
		});
	}
});
```

***

## Demo

[`Preview`](https://rawgit.com/thatisuday/ng-spin/master/demo/main.html)

As most of the thing is happening inside config phase, there isn't must to simulate. Clone this repo and open `demo/main.html` in browser. Try different options in `config` block.

Go to [`archibiz.com`](https://www.archibiz.com) to get a look and feel of it. I have set `autoGlobal` to `true`, so every `$http` request is intercepted by `ng-spin`. 

***

## Build

This repo is built with **gulp**. Clone this repo and use `npm install --only=dev` for custom build.

***

## Bug reports andContribution

- If you have any queries or bug reports, create issues here or send me email on `thatisuday@gmail.com`
- If you have more spinners or any enhancement, please send a PR with details.
- If you run naked around a tree, at about 87 km/h, there is a possibility of fucking yourself.
