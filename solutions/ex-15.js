/**
 *	Async Loops	
 */
module.exports = function loadUsers(userIds, load, done) {
	var count = userIds.length;
	var users = [];
	userIds.forEach( id => load(id, (user, index) => {
		users[index] = user;
		if(--count <= 0) return done(users);
	}));
};