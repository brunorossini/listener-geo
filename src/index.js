require("dotenv").config();
let listener = require("./services/listener");

const kafka = require("./services/kafka");

const consumer = kafka.consumer({ groupId: "rastreador" });
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "notification", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(JSON.parse(message.value));
    }
  });
};

run().catch(console.error);

listener();
