
var Events = function () {
  this.events = [];
  this.listeners = {};
};


Events.prototype = {
  listeners: null,
  events: null,

  on: function (name, func) {
    var id = events.push({
      name: name,
      func: func
    });
    id--;

    if (Object.prototype.toString.call(listeners[name]) === '[object Array]') {
      listeners[name] = [id];
    } else {
      listeners[name].push(id);
    }

    return id;
  },

  trigger: function (name, data) {
    var listeners = this.listeners[name] || return;
    var events =this.events;
    listeners.forEach(function (listenerId) {
      if (typeof(listener) == "function") {
        events[i].call(null, data);
      }
    });
  },

  off: function () {
    if (arguments.length === 0) {
      this.listeners = {},
      this.events = [];
    }else if (arguments.length === 1) {
      this.removeEventById(arguments[0]);
    } else {
      this.removeEventByNameAndFunc(arguments[0]);
    }
  },

  offById: function (id) {
    var ids = this.listeners[this.events[id].name];
    var index = ids.indexOf(id);
    if (index > -1) {
      ids[index] = null;
    }
    this.events[id] = null;
  },

  offByNameAndFunc: function (name, func) {
    var ids = this.listeners[name];
    var events = this.events;
    var data;
    ids.forEach(function (id, pos) {
      data = events[id];
      if (data.name === name && data.func === func) {
        ids[pos] = null;
        events[id] = null;
      }
    });
  }
};
