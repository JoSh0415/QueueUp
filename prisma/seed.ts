import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  // demo user + room
  const userId = "demo-user-0001";
  await db.profile.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
      name: "Demo Host",
      avatarUrl: "https://i.pravatar.cc/100?u=demo",
    },
  });

  const room = await db.room.upsert({
    where: { code: "DJ-1234" },
    update: {},
    create: {
      code: "DJ-1234",
      name: "QueueUp Demo",
      ownerId: userId,
      status: "open",
    },
  });

  await db.member.upsert({
    where: { roomId_userId: { roomId: room.id, userId } },
    update: {},
    create: { roomId: room.id, userId, role: "host" },
  });

  const tracks = [
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Never Gonna Give You Up",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      addedBy: userId,
    },
    {
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      title: "Gangnam Style",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      addedBy: userId,
    },
  ];

  for (const t of tracks) {
    await db.track.create({
      data: { roomId: room.id, status: "queued", ...t },
    });
  }

  console.log("Seeded demo room DJ-1234");
}

main().then(() => db.$disconnect());
