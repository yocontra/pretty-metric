var test = require('ava')
var pretty = require('..')

// kilometer conversions
test('input: km to hm', function (t) {
  t.is(pretty(1).input('km').hm(), '10hm')
})
test('input: km to dam', function (t) {
  t.is(pretty(1).input('km').dam(), '100dam')
})
test('input: km to m', function (t) {
  t.is(pretty(1).input('km').m(), '1000m')
})
test('input: km to dm', function (t) {
  t.is(pretty(1).input('km').dm(), '10000dm')
})
test('input: km to cm', function (t) {
  t.is(pretty(1).input('km').cm(), '100000cm')
})
test('input: km to mm', function (t) {
  t.is(pretty(1).input('km').mm(), '1000000mm')
})

// squared kilometer conversions
test('input: km2 to hm2', function (t) {
  t.is(pretty(1).input('km2').hm2(), '100hm2')
})
test('input: km2 to dam2', function (t) {
  t.is(pretty(1).input('km2').dam2(), '10000dam2')
})
test('input: km2 to m2', function (t) {
  t.is(pretty(1).input('km2').m2(), '1000000m2')
})
test('input: km2 to dm2', function (t) {
  t.is(pretty(1).input('km2').dm2(), '100000000dm2')
})
test('input: km2 to cm2', function (t) {
  t.is(pretty(1).input('km2').cm2(), '10000000000cm2')
})
test('input: km2 to mm2', function (t) {
  t.is(pretty(1).input('km2').mm2(), '1000000000000mm2')
})

// hectometer conversions
test('input: hm to km', function (t) {
  t.is(pretty(1).input('hm').km(), '0.1km')
})
test('input: hm to dam', function (t) {
  t.is(pretty(1).input('hm').dam(), '10dam')
})
test('input: hm to m', function (t) {
  t.is(pretty(1).input('hm').m(), '100m')
})
test('input: hm to dm', function (t) {
  t.is(pretty(1).input('hm').dm(), '1000dm')
})
test('input: hm to cm', function (t) {
  t.is(pretty(1).input('hm').cm(), '10000cm')
})
test('input: hm to mm', function (t) {
  t.is(pretty(1).input('hm').mm(), '100000mm')
})

// squared hectometer conversions
test('input: hm2 to km2', function (t) {
  t.is(pretty(1).input('hm2').km2(), '0.01km2')
})
test('input: hm2 to dam2', function (t) {
  t.is(pretty(1).input('hm2').dam2(), '100dam2')
})
test('input: hm2 to m2', function (t) {
  t.is(pretty(1).input('hm2').m2(), '10000m2')
})
test('input: hm2 to dm2', function (t) {
  t.is(pretty(1).input('hm2').dm2(), '1000000dm2')
})
test('input: hm2 to cm2', function (t) {
  t.is(pretty(1).input('hm2').cm2(), '100000000cm2')
})
test('input: hm2 to mm2', function (t) {
  t.is(pretty(1).input('hm2').mm2(), '10000000000mm2')
})

// decameter conversions
test('input: dam to km', function (t) {
  t.is(pretty(1).input('dam').km(), '0.01km')
})
test('input: dam to hm', function (t) {
  t.is(pretty(1).input('dam').hm(), '0.1hm')
})
test('input: dam to m', function (t) {
  t.is(pretty(1).input('dam').m(), '10m')
})
test('input: dam to dm', function (t) {
  t.is(pretty(1).input('dam').dm(), '100dm')
})
test('input: dam to cm', function (t) {
  t.is(pretty(1).input('dam').cm(), '1000cm')
})
test('input: dam to mm', function (t) {
  t.is(pretty(1).input('dam').mm(), '10000mm')
})

// squared decameter conversions
test('input: dam2 to km2', function (t) {
  t.is(pretty(1).input('dam2').km2(), '0.00009999999999999999km2')
})
test('input: dam2 to hm2', function (t) {
  t.is(pretty(1).input('dam2').hm2(), '0.01hm2')
})
test('input: dam2 to m2', function (t) {
  t.is(pretty(1).input('dam2').m2(), '100m2')
})
test('input: dam2 to dm2', function (t) {
  t.is(pretty(1).input('dam2').dm2(), '10000dm2')
})
test('input: dam2 to cm2', function (t) {
  t.is(pretty(1).input('dam2').cm2(), '1000000cm2')
})
test('input: dam2 to mm2', function (t) {
  t.is(pretty(1).input('dam2').mm2(), '100000000mm2')
})

// meter conversions
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

// squared meter conversions
test('input: m2 to km2', function (t) {
  t.is(pretty(1).input('m2').km2(), '0.000001km2')
})
test('input: m2 to hm2', function (t) {
  t.is(pretty(1).input('m2').hm2(), '0.0001hm2')
})
test('input: m2 to dam2', function (t) {
  t.is(pretty(1).input('m2').dam2(), '0.01dam2')
})
test('input: m2 to dm2', function (t) {
  t.is(pretty(1).input('m2').dm2(), '100dm2')
})
test('input: m2 to cm2', function (t) {
  t.is(pretty(1).input('m2').cm2(), '10000cm2')
})
test('input: m2 to mm2', function (t) {
  t.is(pretty(1).input('m2').mm2(), '1000000mm2')
})

// decimeter conversions
test('input: dm to km', function (t) {
  t.is(pretty(10000).input('dm').km(), '1km')
})
test('input: dm to hm', function (t) {
  t.is(pretty(10000).input('dm').hm(), '10hm')
})
test('input: dm to dam', function (t) {
  t.is(pretty(10000).input('dm').dam(), '100dam')
})
test('input: dm to m', function (t) {
  t.is(pretty(10000).input('dm').m(), '1000m')
})
test('input: dm to cm', function (t) {
  t.is(pretty(10000).input('dm').cm(), '100000cm')
})
test('input: dm to mm', function (t) {
  t.is(pretty(10000).input('dm').mm(), '1000000mm')
})

// squared decimeter conversions
test('input: dm2 to km2', function (t) {
  t.is(pretty(150000).input('dm2').km2(), '0.0015km2')
})
test('input: dm2 to hm2', function (t) {
  t.is(pretty(10000).input('dm2').hm2(), '0.01hm2')
})
test('input: dm2 to dam2', function (t) {
  t.is(pretty(10000).input('dm2').dam2(), '1dam2')
})
test('input: dm2 to m2', function (t) {
  t.is(pretty(10000).input('dm2').m2(), '100m2')
})
test('input: dm2 to cm2', function (t) {
  t.is(pretty(10000).input('dm2').cm2(), '1000000cm2')
})
test('input: dm2 to mm2', function (t) {
  t.is(pretty(10000).input('dm2').mm2(), '100000000mm2')
})

// centimeter conversions
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

// squared centimeter conversions
test('input: cm2 to km2', function (t) {
  t.is(pretty(10000000).input('cm2').km2(), '0.001km2')
})
test('input: cm2 to hm2', function (t) {
  t.is(pretty(10000000).input('cm2').hm2(), '0.1hm2')
})
test('input: cm2 to dam2', function (t) {
  t.is(pretty(10000000).input('cm2').dam2(), '10dam2')
})
test('input: cm2 to m2', function (t) {
  t.is(pretty(10000000).input('cm2').m2(), '1000m2')
})
test('input: cm2 to dm2', function (t) {
  t.is(pretty(10000000).input('cm2').dm2(), '100000dm2')
})
test('input: cm2 to mm2', function (t) {
  t.is(pretty(10000000).input('cm2').mm2(), '1000000000mm2')
})

// millimeter conversions
test('input: mm to km', function (t) {
  t.is(pretty(1000000).input('mm').km(), '1km')
})
test('input: mm to hm', function (t) {
  t.is(pretty(1000000).input('mm').hm(), '10hm')
})
test('input: mm to dam', function (t) {
  t.is(pretty(1000000).input('mm').dam(), '100dam')
})
test('input: mm to m', function (t) {
  t.is(pretty(1000000).input('mm').m(), '1000m')
})
test('input: mm to dm', function (t) {
  t.is(pretty(1000000).input('mm').dm(), '10000dm')
})
test('input: mm to cm', function (t) {
  t.is(pretty(1000000).input('mm').cm(), '100000cm')
})

// squared millimeter conversions
test('input: mm2 to km2', function (t) {
  t.is(pretty(1500000000).input('mm2').km2(), '0.0015km2')
})
test('input: mm2 to hm2', function (t) {
  t.is(pretty(10000000).input('mm2').hm2(), '0.001hm2')
})
test('input: mm2 to dam2', function (t) {
  t.is(pretty(10000000).input('mm2').dam2(), '0.1dam2')
})
test('input: mm2 to m2', function (t) {
  t.is(pretty(10000000).input('mm2').m2(), '10m2')
})
test('input: mm2 to dm2', function (t) {
  t.is(pretty(10000000).input('mm2').dm2(), '1000dm2')
})
test('input: mm2 to cm2', function (t) {
  t.is(pretty(10000000).input('mm2').cm2(), '100000cm2')
})


// invalid conversions
test('converting from length to area throws error', function (t) {
  const error = t.throws(() => pretty(1).input('m').km2())
  t.is(
    error.message,
    'Invalid conversion. You are trying to convert a length measurement to an area measurement.'
  )
})
test('converting from area to length throws error', function (t) {
  const error = t.throws(() => pretty(1).input('km2').m())
  t.is(
    error.message,
    'Invalid conversion. You are trying to convert an area measurement to a length measurement.'
  )
})
