# Devices

You can use this code in json-generator.com to generate sample data for devices.

```
JG.repeat(20, 30, {
  id: JG.index(100),
  ipV4: `${JG.integer(0, 255)}.${JG.integer(0, 255)}.${JG.integer(0, 255)}.${JG.integer(0, 255)}`,
  hostname: JG.company(),
  macAddress: JG.guid(),
  operationSystem: JG.random('Linux', 'Mac', 'Windows', 'Unix'),
  manufacturer: JG.company(),
  model: JG.company(),
  openPorts: _.uniq(JG.repeat(2, JG.random('aaa', 'bbb', 'ccc', 'ddd'))),
});
```