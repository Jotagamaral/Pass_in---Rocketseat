import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '15a73b28-aaf3-4533-bccd-7a2bea1afb45',
            title: 'Unite Sumit',
            slug: 'unite-sumit',
            details: 'Um evento para devs apaixonados por código.',
            maximumAttendees: 120,
        }        
    })
}

seed().then(() => {
    console.log('Database seede')
    prisma.$disconnect()
})