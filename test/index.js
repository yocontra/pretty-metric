var test = require('ava')
var pretty = require('..')

test('default 1 meter to m', function (t) {
  t.is(pretty().m(), '1m')
})

test('meter to km', function (t) {
  t.is(pretty(1500).km(), '1.5km')
})

test('meter to hm', function (t) {
  t.is(pretty(1500).hm(), '15hm')
})

test('meter to dam', function (t) {
  t.is(pretty(1500).dam(), '150dam')
})

test('meter to m', function (t) {
  t.is(pretty(150).m(), '150m')
})

test('meter to dm', function (t) {
  t.is(pretty(150).dm(), '1500dm')
})

test('meter to cm', function (t) {
  t.is(pretty(150).cm(), '15000cm')
})

test('meter to mm', function (t) {
  t.is(pretty(150).mm(), '150000mm')
})

test('input: cm to km', function (t) {
  t.is(pretty(1500).input('cm').km(), '0.015km')
})

test('input: cm to hm', function (t) {
  t.is(pretty(1500).input('cm').hm(), '0.15hm')
})

test('input: cm to dam', function (t) {
  t.is(pretty(1500).input('cm').dam(), '1.5dam')
})

test('input: cm to m', function (t) {
  t.is(pretty(150).input('cm').m(), '1.5m')
})

test('input: cm to dm', function (t) {
  t.is(pretty(150).input('cm').dm(), '15dm')
})

test('input: cm to cm', function (t) {
  t.is(pretty(150).input('cm').cm(), '150cm')
})

test('input: cm to mm', function (t) {
  t.is(pretty(150).input('cm').mm(), '1500mm')
})


