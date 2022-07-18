import { prisma } from '~/db.server';

export default async function getPosts() {
    return prisma.post.findMany();
}