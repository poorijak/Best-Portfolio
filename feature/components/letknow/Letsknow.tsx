'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { EDUCATION_DATA, IMAGESET_DATA, ImageSetType, MYTECHSTACK_DATA_1, MYTECHSTACK_DATA_2 } from './data/data'
import { cn } from '@/lib/utils'
import { iconHorizontalScroll, imageSetAnimate } from './anim/anim'
import { useGSAP } from '@gsap/react'
import StackIcon from 'tech-stack-icons'





const LetsknowSection = () => {

    const [imageSet, setImageSet] = useState<ImageSetType[] | []>([IMAGESET_DATA[0]])
    const containerRef = useRef<HTMLDivElement>(null)
    const iconHorizontalScrollRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    const hanldeAddImages = () => {
        if (imageSet.length < IMAGESET_DATA.length) {
            const nextImage = IMAGESET_DATA[imageSet.length]
            setImageSet(prev => [...prev, { id: nextImage.id, src: nextImage.src }])
        }
    }

    useGSAP(() => {
        if (imageRef.current) {
            const children = imageRef.current.children
            if (children.length > 0) {
                const lastChild = children[children.length - 1] as HTMLDivElement
                imageSetAnimate(containerRef.current, lastChild)
            }
        }
    }, { dependencies: [imageSet], scope: containerRef })

    useGSAP(() => {
        iconHorizontalScroll(iconHorizontalScrollRef.current)
    }, [])


    const iconScrollData1 = [...MYTECHSTACK_DATA_1, ...MYTECHSTACK_DATA_1, ...MYTECHSTACK_DATA_1]
    const iconScrollData2 = [...MYTECHSTACK_DATA_2, ...MYTECHSTACK_DATA_2, ...MYTECHSTACK_DATA_2]




    return (
        <div className='w-[90%] md:w-[60%] h-auto md:h-[580px] mx-auto gap-5 flex flex-col md:grid md:grid-cols-9 md:grid-rows-9'>
            <div className='h-[380px] md:h-auto md:col-span-3 md:row-span-5 px-5 py-[30px] border-[6px] border-white rounded-[16px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]'>
                <div className='flex flex-col w-full h-full gap-2.5'>
                    <h2 className='font-advercase text-text-black'>On repeat</h2>
                    <p className='font-saans-collection font-normal text-[13px] text-[#9E9E9E]'>
                        Just a few songs I can’t stop listening to
                    </p>
                    <div className="relative w-full h-full mt-[5px] flex justify-center">
                        <div className="relative w-[50%]  h-full">
                            <div className="absolute -left-10 top-0 w-full h-full z-20">
                                <Image fill src="/letsknow/queen_alblum.png" alt='queen_alblum' className='object-contain' />
                            </div>
                            <div className="absolute top-0 -right-15 md:-right-10 animate-spin  w-full h-full z-10">
                                <Image fill src="/letsknow/dist.png" alt='dist' className='object-contain' />
                            </div>
                        </div>
                    </div>
                    <p className='font-saans-collection text-center font-normal text-[13px] mt-[5px] text-[#9E9E9E]'>
                        Killer Queen - Queen
                    </p>
                </div>
            </div>
            <div className='order-first md:order-0 flex items-center py-4 md:py-0 md:col-span-3 md:row-span-3'>
                <span className='font-advercase text-text-black text-[32px] md:text-[47px] leading-tight'>{"Let's know"} <br /> more about me</span>
            </div>
            <div className='h-[380px] md:h-auto md:col-span-3 md:row-span-4 relative border-[6px] border-white rounded-[16px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]'>
                <Image src="/letsknow/map.png" fill alt='map' className='object-cover rounded-[16px]' />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    src="/memoji/memoji-menu.mov"
                    className="absolute z-20 top-1/2 size-16 left-1/2  -translate-x-1/2 -translate-y-1/2 scale-140 object-contain"
                />
                <div className='absolute size-20 p-5 bg-primary/35 rounded-full animate-pulse border-2 border-primary aspect-29/38 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                <div className='absolute bottom-3 bg-white rounded-full flex items-center justify-center px-2.5 py-[5px] left-3'>
                    <span className='text-[12px] font-saans-collection font-medium text-text-black'>📍 Bankok, Thailand</span>
                </div>
            </div>
            <div ref={containerRef} className='h-[380px] px-5 py-[30px] md:h-auto md:col-span-3 md:row-span-6 border-[6px] border-white rounded-[16px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]'>
                <div className='flex flex-col items-center justify-between w-full h-full '>

                    <div className='flex flex-col gap-2.5'>
                        <h2 className='text-base font-advercase text-text-black'>Experience</h2>
                        <span className='text-[13px] font-saans-collection text-[#9E9E9E] font-normal'>
                            I have experience, <span className='font-medium text-text-black'>but there’s still so much to learn</span>
                        </span>
                    </div>

                    <div ref={imageRef} className='relative w-full h-[160px]'>
                        {imageSet.map((image) => {
                            return <div key={image.id} onClick={hanldeAddImages} className='w-full border-[6px] aspect-192/128 border-[#ECECEC] h-full absolute left-1/2 -translate-x-1/2'>
                                <Image src={`/letsknow/memory/${image.src}.jpg`} alt="Image set" fill className='object-cover' />
                            </div>
                        })}
                    </div>

                    <p className='font-saans-collection text-center font-normal text-[13px] mt-[5px] text-[#9E9E9E]'>
                        Click this image to <span className='font-advercase font-medium  text-text-black'>{`"Interaction"`}</span>
                    </p>
                </div>

            </div>
            <div ref={iconHorizontalScrollRef} className='h-fit px-5 flex flex-col gap-5 py-5 w-full overflow-hidden md:h-auto md:col-span-3 md:row-span-5 border-[6px] border-white rounded-[16px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]'>
                <div className='flex flex-col gap-2.5'>
                    <h2 className='text-base font-advercase text-text-black'>Experience</h2>
                    <span className='text-[13px] font-saans-collection text-[#9E9E9E] font-normal'>
                        I have experience, <span className='font-medium text-text-black'>but there’s still so much to learn</span>
                    </span>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <div className='w-max normal-scroll flex gap-2.5 items-center'>
                        {
                            iconScrollData1.map((mts, i) => {
                                return (
                                    <div key={i} className='size-[70px] p-[13px] bg-[#F2F2F2] rounded-[6px]'>
                                        <StackIcon name={mts.icon} className='size-[40px]' />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-max reverse-scroll gap-2.5 flex items-center'>
                        {
                            iconScrollData2.map((mts, i) => {
                                return (
                                    <div key={i} className='size-[70px]  p-[13px] bg-[#F2F2F2] rounded-[6px]'>
                                        <StackIcon name={mts.icon} className='size-[40px]' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='h-fit overflow-hidden px-5 pt-[30px] md:h-auto md:col-span-3 md:row-span-4 border-[6px] border-white rounded-[16px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]'>
                <div className='flex flex-col w-full h-full gap-2.5'>
                    <h2 className='font-advercase text-base text-text-black'>Education</h2>
                    <div className='w-full h-[220px] relative overflow-hidden'>
                        <div data-lenis-prevent className='w-full h-full overflow-y-auto pr-2 flex flex-col  relative no-scrollbar'>
                            {EDUCATION_DATA.map((edu) => {
                                return (
                                    <div key={edu.id} className='flex first:pt-0 pt-7.5 font-saans-collection items-start gap-4 relative pl-[1px]'>
                                        <div className='relative w-fit h-full'>
                                            <div className="size-2.5 absolute shrink-0 rounded-full z-10 mt-1 bg-[#5F5F5F]" />
                                            <div className=' h-[calc(100%_+_30px)] top-0 left-1 absolute w-[2px] bg-[#C6C6C6]' />
                                        </div>
                                        <div className='flex flex-col font-medium gap-[7px]'>
                                            <h4 className='text-[13px] text-text-black leading-tight'>{edu.university}</h4>
                                            <p className='text-[10px] text-[#A8A8A8]'>{edu.degree}</p>
                                            <p className='text-[10px] text-[#A8A8A8]'>{edu.duration}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LetsknowSection