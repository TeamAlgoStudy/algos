// Whiteboard breakdown at: https://excalidraw.com/#room=141b3b74a9cba46c0961,XdJicxqz7Rk_4b1k15eA0w

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const zipperLists = (head1, head2) => {

//   let tail = head1
//   let current1 = head1.next
//   let current2 = head2
//   let count = 0

//   while(current1 !== null && current2 !== null){
//     if (count % 2 === 0){
//       tail.next = current2
//       current2 = current2.next;
//     }else {
//       tail.next = current1
//       current1 = current1.next
//     }
//     tail=tail.next
//     count++
//   }
//   if(current1 !== null) tail.next = current1
//   if(current2 !== null) tail.next = current2

//   console.log("head1", head1, "head2", head2)
//   return head1
// };

const zipperLists = (head1, head2) => {
  console.log(head1.val, head2.val);
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  // console.log(head1.val, head2.val)
  return head1;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
