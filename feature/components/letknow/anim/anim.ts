import gsap from "@/lib/gsap"

export const imageSetAnimate = (container: HTMLDivElement | null, image: HTMLDivElement | null) => {

    const randomY = gsap.utils.random(-15, 15)

    gsap.set(image, { opacity: 0, scale: 1.2 })

    gsap.to(image, {
        opacity: 1,
        scale: 1,
        rotate: randomY,
        ease: "power3.inOut"
    })
}


export const iconHorizontalScroll = (movieContentRef: HTMLDivElement | null) => {
    if (!movieContentRef) return
    const q = gsap.utils.selector(movieContentRef)

    gsap.fromTo(q(".normal-scroll"), { xPercent: 0 }, { xPercent: -50, duration: 80, ease: "none", repeat: -1 })
    gsap.fromTo(q(".reverse-scroll"), { xPercent: -50 }, { xPercent: 0, duration: 80, ease: "none", repeat: -1 })
}