# pretty-metric [![Build Status](https://travis-ci.org/stevelacy/pretty-metric.svg?branch=master)](https://travis-ci.org/stevelacy/pretty-metric)

> Parse, convert, and humanize metric sizes

## Install

```shell
$ npm install pretty-metric
```
## Usage

```js

const prettyMetric = require('pretty-metric')

prettyMetric(1500).km()
// => 1.5km

prettyMetric(1500000).humanize()
// => 1,500km

prettyMetric(1500).humanize()
// => 1.5km

prettyMetric(.4).humanize()
// => 40cm

// Using input types
prettyMetric(150).input('cm').humanize()
// => 1.5m

prettyMetric(0.5).input('cm').humanize()
// => 5mm

```

## Functions

#### .km(), .hm(), .dam(), .m(), .dm(), .cm(), .mm()
> Converts the input measurement to the corresponding output

Default input measurement type is `meter`. It can be changed with `.input()`

```js
prettyMetric(1500).km()
// => 1.5km

prettyMetric(1).mm()
// => 1000m
```

#### humanize()
> Converts the input value to a more human recognizable size

This method will automatically add commas to the output string as follows:
```
100000 => 100km
1000000 => 1,000km
10000000 => 10,000km
```

```js
prettyMetric(150).humanize()
// => 1.5m

```

#### input()
> Sets the input value to a particular metric

This can be chained with `humanize()`

```js
prettyMetric(1500).input('cm').km()
// => 0.015km

prettyMetric(1500).input('mm').humanize()
// => 1.5m
```

## Supported sizes

```
km:  kilometer  - 1000m
hm:  hectometer - 100m
dam: decimeter  - 10m
m:   meter      - 1m
dm:  decimeter  - .1m
cm:  centimeter - .01m
mm:  millimeter  - .001m

```

## [License](LICENSE) (MIT)
