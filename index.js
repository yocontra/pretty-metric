'use strict';

var modifiers = {
  km: function (value) {
    return value * .001 + 'km'
  },
  hm: function (value) {
    return value * .01 + 'hm'
  },
  dam: function (value) {
    return value * .1 + 'dam'
  },
  m: function (value) {
    return value + 'm'
  },
  dm: function (value) {
    return value * 10 + 'dm'
  },
  cm: function (value) {
    return value * 100 + 'cm'
  },
  mm: function (value) {
    return value * 1000 + 'mm'
  }
}

var types = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: .1,
  cm: .01,
  mm: .001
}

function Pretty (value) {
  if (!(this instanceof Pretty)) {
    return new Pretty(value)
  }
  this.value = value || 1
  this.type = types.m
}

Pretty.prototype.input = function (type) {
  if (!type in types) {
    throw new Error('type ' + type + ' is not valid')
  }
  this.type = types[type]
  return this
}

Pretty.prototype.km = function () {
  return modifiers.km(this.value * this.type)
}

Pretty.prototype.hm = function () {
  return modifiers.hm(this.value * this.type)
}

Pretty.prototype.dam = function () {
  return modifiers.dam(this.value * this.type)
}

Pretty.prototype.m = function () {
  return modifiers.m(this.value * this.type)
}

Pretty.prototype.dm = function () {
  return modifiers.dm(this.value * this.type)
}

Pretty.prototype.cm = function () {
  return modifiers.cm(this.value * this.type)
}

Pretty.prototype.mm = function () {
  return modifiers.mm(this.value * this.type)
}

Pretty.prototype.humanize = function () {
  var value = this.type * this.value
  if (value >= 1000) return this.km()
  if (value >= 100) return this.hm()
  if (value >= 1) return this.m()
  if (value >= .5) return this.m()
  if (value >= .1) return this.cm()
  return this.mm()
}

module.exports = Pretty
