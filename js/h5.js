document.addEventListener("DOMContentLoaded", function(event) {
	console.log("文档已加载完成，可以操作DOM元素");

	function gotoNative() {
		document.getElementById("content").innerHTML = "HHHH"
	}
	document.getElementById("btn").addEventListener("click", function() {
		gotoNative();
		console.log("--- hello")
	});

	document.getElementById("timer_red").addEventListener("click", function() {
		index = 0;
		getRandomNumber(1, 33, "temp_red", "red_result");
	});
	document.getElementById("timer_blue").addEventListener("click", function() {
		index = 0;
		getRandomNumber(1, 16, "temp_blue", "blue_result");

	});
	var index = 0;

	//产生随机数，min-max，两者都包含
	function getRandomNumber(min, max, id, resultId) {
		// 产生随机数
		let item = Math.floor((Math.random() * (max - min + 1)) + min);

		document.getElementById(id).innerHTML = "最终结果：" + item;
		if (index >= 10) {
			updateList(item);
			//获取元素上的数据
			var vv = document.getElementById(resultId).innerHTML;
			//拼接内容
			document.getElementById(resultId).innerHTML = vv + "\n\n" + item;
			return item;
		}
		index++;

		//延迟50毫秒，执行
		setTimeout(function() {
			getRandomNumber(min, max, id, resultId)
		}, 50);
	}
	var list = [];
	//记录红色球的内容
	function updateList(item) {
		list.push(item);
		var result = "\n";
		for (var i = 0; i < list.length; i++) {
			result += list[i] + "\n"
		}
	}
	// 判断是否包含
	function isContainItem(item) {
		for (var i = 0; i < list.length; i++) {
			if (list[i] == item) {
				console.log(`包含了${item}`);
				return true;
			}
		}
		return false;
	}


});
