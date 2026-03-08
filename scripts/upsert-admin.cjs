const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_USERNAME;
  const plainPassword = process.env.ADMIN_PASSWORD;

  if (!username || !plainPassword) {
    throw new Error("Set ADMIN_USERNAME and ADMIN_PASSWORD before running this script.");
  }

  const password = await bcrypt.hash(plainPassword, 12);

  await prisma.admin.upsert({
    where: { username },
    update: { password },
    create: { username, password },
  });

  console.log(`Admin credentials upserted for '${username}'.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
