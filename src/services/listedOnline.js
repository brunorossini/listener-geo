const redis = require("redis");

const client = redis.createClient();

/**
 * Quando o listener recebe uma nova posição
 * ele verifica se o carro estava na lista de carros offline
 * remove o carro de lá caso esteja, e adiciona ele na lista de online
 * com tls de 60 minutos, após esse tempo a chave irá expirar
 * e um evento no hermes adicionará ele na lista de carros offline
 */
const setListOnline = async (tracker_id, position) => {
  client.get(`offline:${tracker_id}`, (err, reply) => {
    if (reply) client.del(`offline:${tracker_id}`);
  });

  const key = `online:${tracker_id}`;
  client.set(key, JSON.stringify(position));
  client.expire(key, 60 * 60);
};

module.exports = setListOnline;
