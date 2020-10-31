System.register([], function () {
	'use strict';
	return {
		execute: async function () {

			var Test = await Promise.resolve(1);

			console.log(Test);

		}
	};
});
