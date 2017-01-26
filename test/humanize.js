var test = require('ava')
var pretty = require('..')

test('humanize meter to km', function (t) {
  t.is(pretty(1500).humanize(), '1.5km')
})

test('humanize large meter to km', function (t) {
  t.is(pretty(15001100).humanize(), '15,001.1km')
  t.is(pretty(1000000).humanize(), '1,000km')
  t.is(pretty(10000000).humanize(), '10,000km')
})

test('humanize meter digits to km', function (t) {
  t.is(pretty(1500.1100).humanize(), '1.5km')
})

test('humanize meter digits to m', function (t) {
  t.is(pretty(1.1100).input('m').humanize(), '1.11m')
})

test('humanize meter to m', function (t) {
  t.is(pretty(15).humanize(), '15m')
})

test('humanize meter to m', function (t) {
  t.is(pretty(1.5).humanize(), '1.5m')
})

test('humanize meter to m', function (t) {
  t.is(pretty(.5).humanize(), '0.5m')
})

test('humanize meter to cm', function (t) {
  t.is(pretty(.4).humanize(), '40cm')
})

test('humanize meter to mm', function (t) {
  t.is(pretty(.05).humanize(), '50mm')
})

test('input: humanize cm', function (t) {
  t.is(pretty(150).input('cm').humanize(), '1.5m')
})

test('input: humanize cm', function (t) {
  t.is(pretty(0.5).input('cm').humanize(), '5mm')
})

test('input: humanize mm', function (t) {
  t.is(pretty(1500).input('mm').humanize(), '1.5m')
})
