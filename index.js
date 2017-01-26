'use strict';

function prettify (value, shouldPrettify) {
  if (!shouldPrettify) return value
  var rounded = +(Math.round(value + 'e+2')  + 'e-2')
  var parts = rounded.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

var modifiers = {
  km: .001,
  hm: .01,
  dam: .1,
  m: 1,
  dm: 10,
  cm: 100,
  mm: 1000
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
  return prettify((this.value * this.type) * modifiers.km, this.prettify) + 'km'
}

Pretty.prototype.hm = function () {
  return prettify((this.value * this.type) * modifiers.hm, this.prettify) + 'hm'
}

Pretty.prototype.dam = function () {
  return prettify((this.value * this.type) * modifiers.dam, this.prettify) + 'dam'
}

Pretty.prototype.m = function () {
  return prettify((this.value * this.type) * modifiers.m, this.prettify) + 'm'
}

Pretty.prototype.dm = function () {
  return prettify((this.value * this.type) * modifiers.dm, this.prettify) + 'dm'
}

Pretty.prototype.cm = function () {
  return prettify((this.value * this.type) * modifiers.cm, this.prettify) + 'cm'
}

Pretty.prototype.mm = function () {
  return prettify((this.value * this.type) * modifiers.mm, this.prettify) + 'mm'
}

Pretty.prototype.humanize = function () {
  var value = this.type * this.value
  this.prettify = true
  if (value >= 1000) return this.km()
  if (value >= 1) return this.m()
  if (value >= .5) return this.m()
  if (value >= .1) return this.cm()
  return this.mm()
}

module.exports = Pretty
