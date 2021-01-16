'use strict';

function prettify (value, shouldPrettify) {
  if (!shouldPrettify) return value
  var rounded = +(Math.round(value + 'e+2')  + 'e-2')
  var parts = rounded.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

/**
 * Utility for checking conversion validity
 * Errors if a length measurement is trying to convert to an area measurement
 * and vice versa
 * @param {string} fromCategoryType the incoming category type i.e. length or area
 * @param {string} toCategoryType the outbound category type i.e. length or area
 */
function isValidConversion (fromCategoryType, toCategoryType) {
  if (fromCategoryType !== toCategoryType) {
    var errorSnippet =
      fromCategoryType === 'area'
        ? 'an area measurement to a length measurement'
        : 'a length measurement to an area measurement'
    throw new Error(
      `Invalid conversion. You are trying to convert ${errorSnippet}.`
    )
  }
}

var modifiers = {
  km: .001,
  km2: .000001,
  hm: .01,
  hm2: .0001, 
  dam: .1,
  dam2: .01,
  m: 1,
  m2: 1,
  dm: 10,
  dm2: 100,
  cm: 100,
  cm2: 10000,
  mm: 1000,
  mm2: 1000000
}

var types = {
  km: { value: 1000, category: 'length' },
  km2: { value: 1000000, category: 'area' },
  hm: { value: 100, category: 'length' },
  hm2: { value: 10000, category: 'area' },
  dam: { value: 10, category: 'length' },
  dam2: { value: 100, category: 'area' },
  m: { value: 1, category: 'length' },
  m2: { value: 1, category: 'area' },
  dm: { value: .1, category: 'length' },
  dm2: { value: .01, category: 'area' },
  cm: { value: .01, category: 'length' },
  cm2: { value: .0001, category: 'area' },
  mm: { value: .001, category: 'length' },
  mm2: { value: .000001, category: 'area' },
}

function Pretty (value) {
  if (!(this instanceof Pretty)) {
    return new Pretty(value)
  }
  this.value = value === 0 ? 0 : value || 1
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
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.km, this.prettify) + 'km'
}

Pretty.prototype.km2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.km2, this.prettify) + 'km2'
}

Pretty.prototype.hm = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.hm, this.prettify) + 'hm'
}

Pretty.prototype.hm2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.hm2, this.prettify) + 'hm2'
}

Pretty.prototype.dam = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.dam, this.prettify) + 'dam'
}

Pretty.prototype.dam2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.dam2, this.prettify) + 'dam2'
}

Pretty.prototype.m = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.m, this.prettify) + 'm'
}

Pretty.prototype.m2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.m2, this.prettify) + 'm2'
}

Pretty.prototype.dm = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.dm, this.prettify) + 'dm'
}

Pretty.prototype.dm2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.dm2, this.prettify) + 'dm2'
}

Pretty.prototype.cm = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.cm, this.prettify) + 'cm'
}

Pretty.prototype.cm2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.cm2, this.prettify) + 'cm2'
}

Pretty.prototype.mm = function () {
  isValidConversion(this.type.category, 'length')
  return prettify((this.value * this.type.value) * modifiers.mm, this.prettify) + 'mm'
}

Pretty.prototype.mm2 = function () {
  isValidConversion(this.type.category, 'area')
  return prettify((this.value * this.type.value) * modifiers.mm2, this.prettify) + 'mm2'
}

Pretty.prototype.humanize = function () {
  var value = this.type.value * this.value
  var category = this.type.category
  this.prettify = true

  if (category === 'area') {
    if (value >= 1000000) return this.km2()
    if (value >= 1) return this.m2()
    if (value >= .5) return this.m2()
    if (value >= .1) return this.cm2()
    return this.mm2()
  }
  if (value >= 1000) return this.km()
  if (value >= 1) return this.m()
  if (value >= .5) return this.m()
  if (value >= .1) return this.cm()
  return this.mm()
}

module.exports = Pretty
