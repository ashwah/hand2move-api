// Get our connection.
const Conn = require('./connection')

// Define tables.
const Job = require('./tables/job')(Conn)
const What = require('./tables/what')(Conn)
const Chat = require('./tables/chat')(Conn)
const User = require('./tables/user')(Conn)
const Message = require('./tables/message')(Conn)

// Define relationships.
Job.hasMany(What);
What.belongsTo(Job);

Chat.hasMany(Message);
Message.belongsTo(Chat);

User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Job);
Job.belongsTo(User);

module.exports = Conn;