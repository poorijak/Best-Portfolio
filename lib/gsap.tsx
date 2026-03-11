"use client";

import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default gsap;
