const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "rastreador",
  brokers: [process.env.KAFKA_URL]
});

const producer = kafka.producer();
kafka.sendMessage = async msg => {
  await producer.connect();
  await producer.send({
    topic: "position",
    messages: [{ value: msg }]
  });
};

module.exports = kafka;
