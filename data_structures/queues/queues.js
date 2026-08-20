let queue = [];
queue.push("Person A");   // enqueue
queue.push("Person B");   // enqueue
queue.push("Person C");   // enqueue

console.log("Queue before dequeue:", queue);

const served = queue.shift();   // dequeue

console.log("Served:", served);
console.log("Queue after dequeue:", queue);
