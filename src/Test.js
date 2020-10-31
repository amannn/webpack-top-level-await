
let value = await Promise.resolve(1);

while (value < await Promise.resolve(5)) {
  value += await Promise.resolve(1);
}

export default value;
