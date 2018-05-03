const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

export function encodeString(string) {
  return entities.encode(string);
}

export function decodeString(string) {
  return entities.decode(string);
}
