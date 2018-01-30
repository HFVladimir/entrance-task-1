const { models } = require('../../models');

module.exports = {
event (root, { id }) {
    return models.Event.findById(id);
  },
  events (root, args, context) {
    //console.log(args);
    //console.log(context);
    //console.log('1');
    var res = models.Event.findAll(args, context);
    res.then(event => {
             //console.log('3');
           })
    
    return res;
  },
user (root, { id }) {
    return models.User.findById(id);
  },
  users (root, args, context) {
    return models.User.findAll({}, context);
  },
room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms (root, args, context) {
    return models.Room.findAll({ offset: 1 }, context);
  }
};

/*вот нарезала эти фрукты, которая к тебе едет, шлюха эта, в чем
сложность то наклейки наклеить

ну ты выставил в маленький инстарграмм фото в маленькой ванне,
потом тебя переклинило, и ты решил потратить все на женщин этих

да я не такая смешная*/