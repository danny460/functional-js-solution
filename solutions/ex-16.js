/**
 * Recursion
 */
module.exports = function getDependencies(tree, result){
	var result = result || [];
	if(!tree || !tree.dependencies) return result;
	Object.keys(tree.dependencies).forEach(name => {
		var key = `${name}@${tree.dependencies[name].version}`;
		if(result.indexOf(key) === -1) result.push(key);
		getDependencies(tree.dependencies[name], result);
	});
	return result.sort();
};