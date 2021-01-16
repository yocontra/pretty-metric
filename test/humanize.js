var test = require('ava')
var pretty = require('..')

test('humanize meter to km', function (t) {
  t.is(pretty(1500).humanize(), '1.5km')
})

test('humanize square meter to square km', function (t) {
  t.is(pretty(1500000).input('m2').humanize(), '1.5km2')
})

test('humanize large meter to km', function (t) {
  t.is(pretty(15001100).humanize(), '15,001.1km')
  t.is(pretty(1000000).humanize(), '1,000km')
  t.is(pretty(10000000).humanize(), '10,000km')
})

test('humanize large square meter to km2', function (t) {
  t.is(pretty(15001100000).input('m2').humanize(), '15,001.1km2')
  t.is(pretty(1000000000).input('m2').humanize(), '1,000km2')
  t.is(pretty(10000000000).input('m2').humanize(), '10,000km2')
})

test('humanize meter digits to km', function (t) {
  t.is(pretty(1500.1100).humanize(), '1.5km')
})

test('humanize square meter digits to km2', function (t) {
  t.is(pretty(1500000.1100).input('m2').humanize(), '1.5km2')
})

test('humanize meter digits to m', function (t) {
  t.is(pretty(1.1100).input('m').humanize(), '1.11m')
})

test('humanize square meter digits to m2', function (t) {
  t.is(pretty(1.1100).input('m2').humanize(), '1.11m2')
})

test('humanize meter to m', function (t) {
  t.is(pretty(15).humanize(), '15m')
})

test('humanize square meter to m', function (t) {
  t.is(pretty(15).input('m2').humanize(), '15m2')
})

test('humanize meter to m', function (t) {
  t.is(pretty(1.5).humanize(), '1.5m')
})

test('humanize square meter to m', function (t) {
  t.is(pretty(1.5).input('m2').humanize(), '1.5m2')
})

test('humanize meter to m', function (t) {
  t.is(pretty(.5).humanize(), '0.5m')
})

test('humanize square meter to m', function (t) {
  t.is(pretty(.5).input('m2').humanize(), '0.5m2')
})

test('humanize meter to cm', function (t) {
  t.is(pretty(.4).humanize(), '40cm')
})

test('humanize square meter to cm2', function (t) {
  t.is(pretty(.4).input('m2').humanize(), '4,000cm2')
})

test('humanize meter to mm', function (t) {
  t.is(pretty(.05).humanize(), '50mm')
})

test('humanize square meter to mm2', function (t) {
  t.is(pretty(.05).input('m2').humanize(), '50,000mm2')
})

test('input: humanize cm', function (t) {
  t.is(pretty(150).input('cm').humanize(), '1.5m')
})

test('input: humanize cm2', function (t) {
  t.is(pretty(15000).input('cm2').humanize(), '1.5m2')
})

test('input: humanize cm', function (t) {
  t.is(pretty(0.5).input('cm').humanize(), '5mm')
})

test('input: humanize cm2', function (t) {
  t.is(pretty(0.5).input('cm2').humanize(), '50mm2')
})

test('input: humanize mm', function (t) {
  t.is(pretty(1500).input('mm').humanize(), '1.5m')
})

test('input: humanize mm2', function (t) {
  t.is(pretty(1500000).input('mm2').humanize(), '1.5m2')
})

test('input: humanize zero', function (t) {
  t.is(pretty(0).input('mm').humanize(), '0mm')
})
