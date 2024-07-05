const sql = require("better-sqlite3");
const db = sql("posts.db");

const dummyPosts = [
  {
    title: "What is Computer Network",
    slug: "Computer-Network",
    image: "/images/Pic4.jpg",
    summary:
      "A computer network is a system that enables devices to communicate and share resources.",
    content: `
    The basic principles of a computer network include fundamental components such as computers, devices, cables or wireless connections, and switches. Transmitting and receiving data through these components, each device is assigned an IP address to identify it on the network. Network protocols, such as TCP/IP, are used to govern the communication process and ensure data is transferred accurately and efficiently. Network security measures, including firewalls and encryption, are essential to protect data from unauthorized access or cyber threats. Finally, network management tools and techniques are employed to monitor and maintain network performance, troubleshoot issues, and optimize the network for efficiency.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "TCP/IP Model!",
    slug: "TCP-IP-Model!",
    image: "/images/Pic2.jpg",
    summary:
      "TCP/IP model is a layered model for computer network communication with four layers",
    content: `
     The TCP/IP model consists of four main layers: the Network Access layer, which governs physical network connections; the Internet layer, which handles IP addressing and routing; the Transport layer, which manages end-to-end communication and error checking; and the Application layer, which provides interfaces for applications to access network services.Each layer plays a specific role in data transmission and communication within computer networks, ensuring reliable and efficient data exchange.
    `,
    creator: "Max Mokhtari",
    creator_email: "mokhtari@example.com",
  },
  {
    title: "How CPU Work",
    slug: "future-of-Cpu",
    image: "/images/Pic1.jpg",
    summary:
      "The CPU is the brain of a computer, responsible for executing instructions and processing data.",
    content: `
The CPU (Central Processing Unit) works by executing instructions fetched from memory, performing calculations, and manipulating data. It contains control units to interpret instructions and direct data flow, as well as arithmetic logic units to perform mathematical calculations. The CPU interacts with memory, input/output devices, and other components through buses. Clock speed determines how fast the CPU can process instructions, while multi-core processors can handle multiple tasks simultaneously. The CPU's performance is influenced by factors such as cache size, architecture, and instruction set.

    `,
    creator: "Alex Amini",
    creator_email: "alex@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       content TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const table = db.prepare(`
      INSERT INTO posts VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @content,
         @creator,
         @creator_email
      )
   `);

  for (const post of dummyPosts) {
    table.run(post);
  }
}

initData();
