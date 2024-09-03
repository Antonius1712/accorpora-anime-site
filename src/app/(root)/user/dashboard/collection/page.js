import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackButton from "@/components/Header/BackButton"
import { Auth } from '@/app/libs/auth'
import prisma from '@/app/libs/prisma'

const page = async () => {
    const user = await Auth();
    const myCollection = await prisma.collection.findMany({ where: { user_email: user?.email } })

    return (
        <section className="mt-4">
            <BackButton />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">

                {myCollection.map((collect, index) => {
                    return (
                        <Link key={index} className="border-2 border-color-accent relative" href={`/anime/${collect.mal_id}`}>
                            <Image src={collect.img_anime} width={350} height={350} />
                            <div className="w-full bg-color-accent py-4 bottom-0 absolute">
                                <h5 className="text-xl text-center">
                                    {collect.judul_anime}
                                </h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default page