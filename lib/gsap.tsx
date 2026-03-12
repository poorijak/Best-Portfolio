"use client";

import gsap from "gsap";
import { CustomEase, Draggable, InertiaPlugin, ScrollTrigger } from "gsap/all";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase , Draggable , InertiaPlugin);

export default gsap;
