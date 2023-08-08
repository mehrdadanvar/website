export default defineEventHandler(async (event) => {
  console.log(event.node);
  return { data: "something" };
});
