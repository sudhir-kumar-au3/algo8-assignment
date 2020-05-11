const amqp = require('amqplib/callback_api');
let ch = null;
amqp.connect(process.env.RABBITMQ_URL, function (err, conn) {
  if (err) {
    throw err;
  }
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

const publishToQueue = async (queueName, data) => {
  ch.assertQueue(queueName, {
    durable: false,
  });
  ch.sendToQueue(queueName, Buffer.from(data));
};

process.on('exit', (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});

module.exports = publishToQueue;
