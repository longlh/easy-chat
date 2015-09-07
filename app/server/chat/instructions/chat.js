'use strict';

exports._ = '/chat/instructions/chat';
exports._requires = [
	'@lodash',
	'/socket',
	'/chat/instructions',
	'/chat/container'
];
exports._factory = function(_, socketServer, instructions, container) {
	instructions.set('chat', function(socket, data) {
		var info = container.sockets[socket.id];

		var reply = {
			code: 'chat:bound',
			data: {
				chat: data.chat,
				agent: data.agent,
				visitor: data.visitor,
				from: data.from
			}
		};

		// boardcast to visitor
		socketServer.to(data.visitor + '_' + info.tenant).emit('command', reply);

		// boradcast to agent
		socketServer.to(data.agent).emit('command', reply);
	});
};
