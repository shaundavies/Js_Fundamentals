
        function bracesValid(str) {
            var arr = [];
            for (var i = 0; i < str.length; i++) {
                if (str[i] === "(" || (str[i] === "{") || (str[i] === "[")) {
                    arr.push(str[i]);
                } else {
                    if (arr.length === 0) {
                        return false;
                    }
                    var lastValue = arr[arr.length - 1];
                    if (
                        (str[i] === ")" && lastValue === "(") ||
                        (str[i] === "}" && lastValue === "{") ||
                        (str[i] === "]" && lastValue === "[")
                    ) {
                        arr.pop();
                    } else {
                        break;
                    }
                }
            }
            return arr.length === 0;
        }

        console.log(bracesValid("{{()}}[]"));
        console.log(bracesValid("{(})"));