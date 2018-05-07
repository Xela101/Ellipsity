//Ellipsify text that overflows its container.
var Ellipsity = (function(){
	function Ellipsity(){
	}

	//Binary search to find optimal splitting points.
	Ellipsity.prototype.binarySearch = function(length, callback) {
		var low = 0;
		var high = length - 1;
		var best = -1;
		var mid;

		while (low <= high) {
			mid = ~~((low + high) / 2);
			var result = callback(mid);
			if (result < 0) {
				high = mid - 1;
			}
			else if (result > 0) {
				low = mid + 1;
			}
			else {
				best = mid;
				low = mid + 1;
			}
		}
		return best;
	}

	//Check to see if the text is overflowing.
	Ellipsity.prototype.isTextOverflowing = function(element)
	{
		var currentOverflow = element.style.overflow;
		if (!currentOverflow || currentOverflow === "visible")
		  element.style.overflow = "hidden";

		var isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
		element.style.overflow = currentOverflow;
		return isOverflowing;
	}

	//Ellipsify the container so the last text element inside fits.
	Ellipsity.prototype.ellipsify = function(container){
		var self = this;
		var content = container.lastElementChild;
		var text = content.innerText;
		if(this.isTextOverflowing(container)){
			var checkFunc = function (i) {
				content.innerText = text.substring(0, i);
				return self.isTextOverflowing(container)?-1:0;
			};
			var len = this.binarySearch(text.length - 1, checkFunc);
			content.innerText = text.substring(0, len).slice(0,-3)+"...";
		}
	}
	return new Ellipsity();
}());
