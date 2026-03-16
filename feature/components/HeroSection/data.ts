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

export const playSound = (
  path: string,
  title: string,
  isToast: boolean = false,
  volume: number = 0.8,
  type: "toggle" | "PFS",
) => {
  if (!soundInstances[title]) {
    soundInstances[title] = new Audio(path);
  }

  const audio = soundInstances[title];

  if (type === "toggle") {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
      if (isToast) {
        toast.info(`Play ${title}`);
      }
    } else {
      audio.currentTime = 0; // รีเซ็ตเสียงเพื่อให้พร้อมเล่นใหม่
      audio.pause();
      if (isToast) {
        toast.info(`Paused ${title}`);
      }
    }
  } else {
    audio.currentTime = 0;
    audio.play();
    if (isToast) {
      toast.info(`Play ${title}`);
    }
  }
};

export const stickerData: StickerItem[] = [
  // 1
  {
    x: 461,
    y: 473,
    r: 12,
    s: 1.4,
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
    x: -594,
    y: 78,
    r: 6,
    s: 0.6,
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
        x: -110.3516,
        y: -64.0781,
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
  // 4
  {
    x: -656,
    y: 467,
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
    x: 202,
    y: -208,
    r: 7,
    s: 2,
    title: "k3",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      playSound("/sound/k3.mp3", "keyboard sound", false, 0.06, "toggle");
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
    x: 539,
    y: -206,
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
    x: 316,
    y: 261,
    r: -12,
    s: 0.8,
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
    x: -170,
    y: -351,
    r: -12,
    s: 1.3,
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
    x: -254,
    y: -186,
    r: -9,
    s: 1.2,
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
    y: 215,
    r: 4,
    s: 1,
    title: "phone booth",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      playSound("/sound/phone.mp3", "phone_booth", false, 0.5, "PFS");
      gsap.to(target, {
        rotation: 10,
        duration: 0.1,
        repeat: 20,
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
    x: 294,
    y: 109,
    r: -6,
    s: 0.5,
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
    x: 506,
    y: 144,
    r: -6,
    s: 0.5,
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
    s: 0.5,
    title: "click me",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      playSound("/sound/click.mp3", "click", false, 0.3, "PFS");

      gsap.to(target, {
        scale: baseS * 0.6,
        duration: 0.15,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(target, {
            scale: baseS,
            duration: 0.3,
            ease: "back.out(3)",
          });
        },
      });
    },
  },
  // 14
  {
    x: -231,
    y: -160,
    r: -6,
    s: 0.4,
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
    x: -15,
    y: 241,
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
    x: 639,
    y: 371,
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
    x: -183,
    y: 168,
    r: 8,
    s: 0.7,
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
    x: -399,
    y: -23,
    r: -12,
    s: 0.6,
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
    x: -628,
    y: -361,
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
    x: 514,
    y: -30,
    r: -6,
    s: 1.2,
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
    x: -483,
    y: -158,
    r: 6,
    s: 0.8,
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
    x: 832,
    y: 254,
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
    x: 530,
    y: -388,
    r: 3,
    s: 0.7,
    title: "queen",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;

      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      playSound(
        "/sound/queen.mp3",
        "bohemian rhapsody",
        true,
        undefined,
        "toggle",
      );
      gsap.to(target, {
        rotation: "+=360",
        repeat: -1,
        duration: 0.6,
        ease: "none",
        onComplete: () => {
          gsap.to(target, {
            x: baseX,
            y: baseY,
            scale: baseS,
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
    x: 119,
    y: -373,
    r: -8,
    s: 1.2,
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
    x: -763,
    y: 228,
    r: 8,
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
    x: -716,
    y: -154,
    r: 8,
    s: 0.5,
    title: "figma",
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
  // 27
  {
    x: 765,
    y: -127,
    r: 8,
    s: 0.6,
    title: "framer",
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
  // 28
  {
    x: 763,
    y: -312,
    r: -12,
    s: 0.4,
    title: "ts",
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
  // 29
  {
    x: -487,
    y: 285,
    r: -9,
    s: 2.3,
    title: "bottle",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");

      gsap.fromTo(
        target,
        {
          rotation: -15,
        },
        {
          rotation: 15,
          repeat: 10,
          yoyo: true,
          duration: 0.2,
          ease: "power1.inOut",
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
        },
      );
    },
  },
  // 30
  {
    x: 737,
    y: 59,
    r: 3,
    s: 0.7,
    title: "moon",
    onClick: (target) => {
      const baseS = gsap.getProperty(target, "scale") as number;
      const baseX = gsap.getProperty(target, "x");
      const baseY = gsap.getProperty(target, "y");
      gsap.to(target, {
        rotation: "+=360",
        repeat: 50,
        duration: 0.1, // ต้องใส่ duration ไม่งั้นมันจะเปลี่ยนทันทีจนมองไม่เห็น
      });
    },
  },
];
