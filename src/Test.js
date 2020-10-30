const value = await Promise.resolve(1);

export default value;

export async function foo() {
  async function bar() {
    return await Promise.resolve(2);
  }

  return await bar();
}
