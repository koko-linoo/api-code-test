import { PrismaClient } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';

// Init Prisma client
const prisma = new PrismaClient();

async function main() {
    await prisma.user.upsert({
        where: {
            username: "Lin Oo"
        },
        update: {
            username: 'Lin Oo',
        },
        create: {
            username: "Lin Oo",
            password: await hash('password#1', await genSalt(10)),
            role: "ADMIN"
        },
    });

    await prisma.category.createMany({
        data: [
            {
                name: "Alerts",
            },
            {
                name: "Company News",
            },
        ]
    });

    await prisma.tag.createMany({
        data: [
            {
                name: "Money alerts",
                categoryId: 1,
            },
            {
                name: "News",
                categoryId: 1,
            },
            {
                name: "Technology",
                categoryId: 2,
            },
            {
                name: "crypto-currencies",
                categoryId: 2,
            },
            {
                name: "AML Outsourcing",
                categoryId: 2,
            },
            {
                name: "AML Services",
                categoryId: 2,
            },
            {
                name: "Support",
                categoryId: 2,
            }
        ]
    });

    await prisma.post.createMany({
        data: [
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
            {
                title: "Major Crypto Exchanges Face Action Over",
                content: "Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...",
                categoryId: 1,
                createdUser: 1,
            },
        ]
    })
}

// Execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // Close Prisma client at the end
        await prisma.$disconnect();
    });
