import gsap from "@/lib/gsap";
import { toast } from "sonner";

export interface StickerItem {
  x: number;
  y: number;
  r: number;
  s: number;
  title: string;
  onClick?: (target: HTMLDivElement) => void;
}

const soundInstances: Record<string, HTMLAudioElement> = {};

export const playToggleSound = (
  path: string,
  title: string,
  isToast: boolean = false,
  volume: number = 0.8,
) => {
  if (!soundInstances[title]) {
    soundInstances[title] = new Audio(path);
  }

  const audio = soundInstances[title];

  if (audio.paused) {
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
    if (isToast) {
      toast.info(`Play ${title}`);
    }
    return "playing";
  } else {
    audio.pause();
    audio.currentTime = 0; // รีเซ็ตเสียงเพื่อให้พร้อมเล่นใหม่
    if (isToast) {
      toast.info(`Paused ${title}`);
    }
    return "paused";
  }
};

export const stickerData: StickerItem[] = [
  // 1
  {
    x: 700,
    y: 344,
    r: 12,
    s: 2.0,
    title: "thai tea",
    onClick: (target) => {
      const currentScale = gsap.getProperty(target, "scale") as number;
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      if (currentScale > 0.1) {
        gsap.to(target, {
          scale: "-=0.3",
          duration: 0.2,
          ease: "back.out(2)",
          overwrite: "auto",
        });
      } else {
        gsap.to(target, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            target.style.pointerEvents = "none";

            gsap.to(target, {
              x: baseX, // กลับมาที่ X เดิม
              y: baseY, // กลับมาที่ Y เดิม
              scale: baseS, //
              opacity: 1,
              delay: 2,
              duration: 0.5,
              ease: "back.out(1.7)",
              onStart: () => {
                target.style.pointerEvents = "auto";
              },
            });
          },
        });
      }
    },
  },
  // 2
  {
    x: -327,
    y: 274,
    r: 6,
    s: 0.5,
    title: "linkedIn",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 3
  {
    x: -27,
    y: -186,
    r: -3,
    s: 0.8,
    title: "hat",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 4
  {
    x: 684,
    y: -286,
    r: 15,
    s: 0.9,
    title: "controller",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        x: "+=2",
        y: "+=2",
        duration: 0.02,
        repeat: 30,
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 5
  {
    x: 194,
    y: -248,
    r: 7,
    s: 2,
    title: "k3",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      playToggleSound("/sound/k3.mp3", "keyboard sound", false, 0.01);
      gsap.to(target, {
        scale: 0.9,
        filter: "brightness(0.8)",
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    },
  },
  // 6
  {
    x: 720,
    y: 23,
    r: 0,
    s: 0.6,
    title: "airpod",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 7
  {
    x: -661.0156,
    y: 294.7891,
    r: -12,
    s: 1.3,
    title: "gundam",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 8
  {
    x: -23,
    y: -421,
    r: -12,
    s: 1.6,
    title: "macbook",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        x: "+=5",
        yoyo: true,
        repeat: 5,
        duration: 0.1,
        ease: "back2.inOut",
      }).to(target, {
        scale: 0,
        duration: 0.5,
        ease: "back.in(1.2)",
        onComplete: () => {
          gsap.to(target, {
            x: baseX,
            y: baseY, //
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 9
  {
    x: -191,
    y: -244,
    r: -9,
    s: 1.7,
    title: "kfc",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 10
  {
    x: 169,
    y: 223,
    r: 4,
    s: 1.2,
    title: "phone booth",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: 10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 11
  {
    x: -184,
    y: 297,
    r: -6,
    s: 0.8,
    title: "drumpbell",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      const baseP = gsap.to(target, {
        y: "100vh",
        duration: 1,
        ease: "back.in(0.4)",
        onComplete: () => {
          target.style.pointerEvents = "none";
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 12
  {
    x: -161,
    y: 203,
    r: -6,
    s: 0.8,
    title: "email me",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 13
  {
    x: 179,
    y: 272,
    r: -6,
    s: 0.8,
    title: "click me",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 14
  {
    x: -149,
    y: -190,
    r: -6,
    s: 0.8,
    title: "drag me",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 15
  {
    x: -2,
    y: 256,
    r: -6,
    s: 0.8,
    title: "call me",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 16
  {
    x: 185,
    y: -131,
    r: 3,
    s: 1.5,
    title: "panda",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x") as number;
      const baseY = gsap.getProperty(target, "y") as number;

      const tl = gsap.timeline();

      // 1. ปิดการคลิกระหว่างมี Animation เพื่อป้องกันบัค
      target.style.pointerEvents = "none";

      tl.to(target, {
        x: "+=10", // ขยับขวา
        duration: 0.05,
        repeat: 5, // ทำซ้ำ 5 ครั้ง
        yoyo: true, // สลับไปมา (ขวา-ซ้าย-ขวา)
        ease: "none",
      })
        .to(target, {
          rotation: "+=360", // หมุนรอบตัว
          scale: baseS * 1.2, // ขยายใหญ่นิดนึงตอนหมุนให้ดูมีพลัง
          duration: 0.8,
          ease: "back.out(1.5)",
        })
        .to(target, {
          y: "100vh", // ร่วงตกจอ
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        })
        .to(target, {
          x: baseX, // วาร์ปกลับมา X เดิม
          y: baseY, // วาร์ปกลับมา Y เดิม
          scale: baseS,
          opacity: 1,
          delay: 1.5, // รอสักพักค่อยโผล่กลับมา
          duration: 0.5,
          ease: "back.out(1.7)",
          onStart: () => {
            // เปิดการคลิกคืนให้เมื่อเริ่มแสดงตัว
            target.style.pointerEvents = "auto";
          },
        });
    },
  },
  // 17
  {
    x: 457,
    y: 185,
    r: -6,
    s: 0.9,
    title: "bandai",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 18
  {
    x: -523,
    y: 14,
    r: -12,
    s: 0.9,
    title: "meme",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        x: "-118.2539",
        y: "-36.9141",
        duration: 1,
        ease: "back.inOut",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 19
  {
    x: -773,
    y: -330,
    r: -6,
    s: 2.5,
    title: "usTower",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 20
  {
    x: 551,
    y: -120,
    r: -6,
    s: 1.6,
    title: "van",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 21
  {
    x: -450,
    y: -350,
    r: 6,
    s: 1.3,
    title: "aot",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        scale: 1.3,
        filter: "brightness(1.2) drop-shadow(0 0 10px #B8FB00)",
        duration: 0.4,
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 22
  {
    x: 865,
    y: 182,
    r: 6,
    s: 1.6,
    title: "rainbow",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 23
  {
    x: 210,
    y: -372,
    r: 3,
    s: 2,
    title: "queen",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      playToggleSound("/sound/queen.mp3", "bohemian rhapsody", true);
      gsap.to(target, {
        rotation: "+=360",
        duration: 1,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS, //
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 24
  {
    x: -215,
    y: -386,
    r: -8,
    s: 1.6,
    title: "h2r",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 25
  {
    x: -820,
    y: 90,
    r: -8,
    s: 1.2,
    title: "dog",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX,
            y: baseY,
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 26
  {
    x: -725,
    y: -113,
    r: -8,
    s: 0.6,
    title: "figma",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 27
  {
    x: 830,
    y: -119,
    r: 8,
    s: 0.6,
    title: "framer",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 28
  {
    x: 457,
    y: -364,
    r: -12,
    s: 0.4,
    title: "ts",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 29
  {
    x: -483,
    y: 155,
    r: 3,
    s: 2,
    title: "bootle",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        rotate: -25,
        duration: 0.4,
        transformOrigin: "bottom center",
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
  // 30
  {
    x: -449,
    y: -140,
    r: 3,
    s: 1,
    title: "moon",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      const tl = gsap.timeline();

      tl.to(target, {
        y: "100vh",
        x: "+=30",
        yoyo: true,
        duration: 5
      }).to(target, {
        x: "100vw",
        duration: 5,
        ease: "back.out",
        onComplete: () => {
          gsap.to(target, {
            x: baseX, // กลับมาที่ X เดิม
            y: baseY, // กลับมาที่ Y เดิม
            scale: baseS,
            rotate: 0,
            opacity: 1,
            delay: 2,
            duration: 0.5,
            ease: "back.out(1.7)",
            onStart: () => {
              target.style.pointerEvents = "auto";
            },
          });
        },
      });
    },
  },
];
