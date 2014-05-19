var readFileSync = require("fs").readFileSync;

exports.defineTags = function(dictionary) {
	dictionary.defineTag("externalExample", {
		mustHaveValue: true,
		isNamespace: false,
		canHaveType: true,
		defaultValue: [],
		onTagged: function(doclet, tag) {
			var examples = doclet.externalExamples;
			var example = {};
			var names;

			if (!examples) {
				examples = doclet.externalExamples = [];
			}

			names = tag.value.type && tag.value.type.names;
			if (names) {
				example.isRunnable = names.indexOf("runnable") > -1;
			} else {
				example.isRunnable = false;
			}

			example.src = readFileSync(
				"examples/api/" + tag.value.description + ".js",
				"UTF-8"
			);
			examples.push(example);
		}
	});
};
