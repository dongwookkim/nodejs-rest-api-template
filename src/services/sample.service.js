const models = require('models');

exports.all = async () => {
  return await models.UserMember.findAll({ raw: true });
};

exports.search = async (name) => {
  return await models.UserMember.findOne({ where: { MBR_NM: name } });
};
